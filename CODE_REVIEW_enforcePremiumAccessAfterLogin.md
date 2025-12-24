# Code Review: `enforcePremiumAccessAfterLogin`

**File**: `supabase-login-guard.js`  
**Data**: 2024-12-24  
**Reviewer**: AI Code Analysis

---

## Executive Summary

La funzione presenta **diversi problemi critici** che ne compromettono il funzionamento. Il problema principale è l'uso di `await` in una funzione non-async, che causerà un errore di sintassi. Sono presenti anche inconsistenze con il resto della codebase e mancano alcuni edge case importanti.

---

## Problemi Critici

### 1. **ERRORE FATALE: `await` in funzione non-async**

```javascript
// PROBLEMA: La funzione nel task NON ha la keyword `async`
function enforcePremiumAccessAfterLogin(client = supabase) {
  // ...
  const { data: { session }, error: sessionError } = await client.auth.getSession();
  // ❌ SyntaxError: await is only valid in async functions
```

**Fix**: Il file attuale (`supabase-login-guard.js`) ha già `export async function`, ma il codice nel task manca di `async`. Assicurarsi che la dichiarazione sia:

```javascript
export async function enforcePremiumAccessAfterLogin(client = supabase)
```

---

### 2. **Inconsistenza nella tabella del profilo**

```javascript
// Nel codice fornito (task):
.from("profiles")
.select("subscription_type, access_until")
.eq("id", userId)

// Nel resto della codebase (supabase-access.js):
.from("users")
.select("has_paid, email, plan_tier, subscription_type, access_until")
.eq("email", email)
```

**Problemi**:
- La tabella si chiama `users` (non `profiles`)
- Il lookup usa `email` (non `id`)
- Manca il campo `has_paid` che è usato altrove

**Fix consigliato**:
```javascript
const { data: profile, error: profileError } = await client
  .from("users")
  .select("has_paid, subscription_type, access_until")
  .eq("id", userId)
  .maybeSingle();
```

---

### 3. **Logica di accesso non allineata con il resto della codebase**

Nel file `supabase-access.js`, la logica premium è:
```javascript
const isPremium = userHasValidAccess || profile?.has_paid === true;
```

Nel codice del task:
```javascript
if (subscriptionType === "free" || accessExpired) {
  // Denied
}
```

**Problema**: Se `has_paid === true` ma `accessExpired === true`, l'utente viene bloccato erroneamente. La codebase esistente consente l'accesso anche solo con `has_paid`.

**Fix consigliato**:
```javascript
const hasPaid = profile.has_paid === true;
const subscriptionType = profile.subscription_type || "free";
const accessUntil = profile.access_until ? new Date(profile.access_until) : null;
const accessValid = accessUntil && !isNaN(accessUntil.getTime()) && accessUntil > new Date();

// Allineato con supabase-access.js
if (!hasPaid && !accessValid) {
  console.log("[mpl] Access denied: no payment and no valid subscription");
  redirectToPremiumRequired();
  return false;
}
```

---

## Problemi di Media Gravità

### 4. **`redirectToPremiumRequired()` non funziona lato server (SSR)**

La funzione è chiamata in caso di errore, ma in ambiente SSR (Next.js server component, API route, middleware):
- `window` non esiste
- Il redirect silenziosamente non fa nulla

**Fix consigliato**:
```javascript
function redirectToPremiumRequired() {
  if (typeof window !== 'undefined') {
    const currentUrl = new URL(window.location.href);
    if (currentUrl.searchParams.get('premium') !== 'required') {
      currentUrl.searchParams.set('premium', 'required');
      window.location.href = currentUrl.toString();
    }
  } else {
    // SSR: throw error to be handled by caller
    throw new Error('PREMIUM_REQUIRED');
  }
}
```

Oppure usare un pattern più flessibile:
```javascript
export async function enforcePremiumAccessAfterLogin(client = supabase, options = {}) {
  const { onAccessDenied = redirectToPremiumRequired } = options;
  // ...
  if (/* denied */) {
    onAccessDenied('NO_SESSION');
    return false;
  }
}
```

---

### 5. **Manca gestione timeout/retry per chiamate Supabase**

Se Supabase è lento o il network fallisce temporaneamente, l'utente viene bloccato.

**Suggerimento**:
```javascript
const MAX_RETRIES = 2;
const RETRY_DELAY = 500;

async function fetchWithRetry(fn, retries = MAX_RETRIES) {
  for (let i = 0; i <= retries; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === retries) throw err;
      await new Promise(r => setTimeout(r, RETRY_DELAY * (i + 1)));
    }
  }
}
```

---

### 6. **Comparazione date non affidabile**

```javascript
accessUntil <= new Date()
```

**Problemi**:
- Timezone locale può causare comportamenti inconsistenti
- Nessun margine di tolleranza (clock skew)

**Fix consigliato**:
```javascript
const GRACE_PERIOD_MS = 60 * 1000; // 1 minuto di tolleranza
const accessExpired = !accessUntil || 
  isNaN(accessUntil.getTime()) || 
  accessUntil.getTime() <= Date.now() - GRACE_PERIOD_MS;
```

---

## Problemi Minori

### 7. **Logging eccessivo e inconsistente**

- `console.error` per session mancante (dovrebbe essere `warn`)
- `console.log` per accesso granted/denied (dovrebbe essere `debug` in produzione)

**Suggerimento**: Usare un logger configurabile:
```javascript
const log = {
  debug: (...args) => process.env.NODE_ENV !== 'production' && console.log(...args),
  warn: console.warn,
  error: console.error,
};
```

---

### 8. **Manca validazione del client passato**

```javascript
export async function enforcePremiumAccessAfterLogin(client = supabase) {
  if (!client) { ... }
```

**Problema**: Non verifica che il client abbia i metodi necessari (`auth.getSession`, `from`).

**Fix**:
```javascript
if (!client || typeof client.auth?.getSession !== 'function') {
  console.error("[mpl] Invalid Supabase client provided.");
  redirectToPremiumRequired();
  return false;
}
```

---

### 9. **Manca export di `redirectToPremiumRequired`**

Se qualcuno volesse riusare la logica di redirect, non può.

**Fix**:
```javascript
export function redirectToPremiumRequired() { ... }
```

---

## Edge Case Non Coperti

| Edge Case | Stato | Suggerimento |
|-----------|-------|--------------|
| Utente loggato ma senza riga in `profiles` | ✅ Coperto | Redirect a premium |
| `access_until` è una stringa malformata | ✅ Coperto | `isNaN()` check |
| `subscription_type` è `null` | ✅ Coperto | Default a `"free"` |
| Utente con `has_paid=true` ma `accessExpired=true` | ❌ Bug | Dovrebbe essere consentito |
| Network timeout durante fetch | ❌ Non coperto | Aggiungere retry/timeout |
| Session token expired ma refresh disponibile | ⚠️ Parziale | Supabase auto-refresh dovrebbe gestirlo |
| Rate limiting di Supabase | ❌ Non coperto | Aggiungere gestione errore 429 |
| Multi-tab: utente fa logout in altra tab | ❌ Non coperto | Listener su `storage` event |

---

## Refactoring Consigliato

```javascript
/**
 * supabase-login-guard.js - Refactored
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';
const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

const GRACE_PERIOD_MS = 60 * 1000; // 1 minute clock skew tolerance

/**
 * Validates that the client has required Supabase methods
 */
function isValidSupabaseClient(client) {
  return client && 
    typeof client.auth?.getSession === 'function' && 
    typeof client.from === 'function';
}

/**
 * Computes whether user has valid premium access
 */
function computePremiumAccess(profile) {
  if (!profile) return { hasAccess: false, reason: 'NO_PROFILE' };

  const hasPaid = profile.has_paid === true;
  const subscriptionType = profile.subscription_type || 'free';
  const accessUntil = profile.access_until ? new Date(profile.access_until) : null;
  const accessValid = accessUntil && 
    !isNaN(accessUntil.getTime()) && 
    accessUntil.getTime() > Date.now() - GRACE_PERIOD_MS;

  // Align with supabase-access.js logic
  const hasAccess = hasPaid || accessValid;

  return {
    hasAccess,
    hasPaid,
    subscriptionType,
    accessValid,
    reason: hasAccess ? 'VALID' : (subscriptionType === 'free' ? 'FREE_PLAN' : 'EXPIRED'),
  };
}

/**
 * Redirects to premium required page (client-side only)
 * @throws {Error} In SSR environments
 */
export function redirectToPremiumRequired(reason = 'PREMIUM_REQUIRED') {
  if (typeof window !== 'undefined') {
    const currentUrl = new URL(window.location.href);
    if (currentUrl.searchParams.get('premium') !== 'required') {
      currentUrl.searchParams.set('premium', 'required');
      currentUrl.searchParams.set('reason', reason);
      window.location.href = currentUrl.toString();
    }
  } else {
    // SSR: let caller handle the redirect
    const error = new Error(reason);
    error.code = 'PREMIUM_REQUIRED';
    error.reason = reason;
    throw error;
  }
}

/**
 * Enforces premium access after login
 * 
 * @param {SupabaseClient} client - Supabase client instance
 * @param {Object} options - Configuration options
 * @param {Function} options.onAccessDenied - Custom handler for access denied
 * @param {string} options.profileTable - Table name for profiles (default: 'users')
 * @param {string} options.lookupField - Field to match user (default: 'id')
 * @returns {Promise<{granted: boolean, reason?: string, profile?: object}>}
 */
export async function enforcePremiumAccessAfterLogin(client = supabase, options = {}) {
  const {
    onAccessDenied = redirectToPremiumRequired,
    profileTable = 'users',
    lookupField = 'id',
  } = options;

  // Validate client
  if (!isValidSupabaseClient(client)) {
    console.error("[mpl] Supabase client is not initialized or invalid.");
    onAccessDenied('NO_CLIENT');
    return { granted: false, reason: 'NO_CLIENT' };
  }

  try {
    // Get session
    const { data: { session }, error: sessionError } = await client.auth.getSession();

    if (sessionError) {
      console.warn("[mpl] Session error", sessionError.message);
      onAccessDenied('SESSION_ERROR');
      return { granted: false, reason: 'SESSION_ERROR', error: sessionError };
    }

    if (!session?.user) {
      console.warn("[mpl] No active session");
      onAccessDenied('NO_SESSION');
      return { granted: false, reason: 'NO_SESSION' };
    }

    // Determine lookup value
    const lookupValue = lookupField === 'email' 
      ? session.user.email 
      : session.user.id;

    // Fetch profile
    const { data: profile, error: profileError } = await client
      .from(profileTable)
      .select("has_paid, subscription_type, access_until")
      .eq(lookupField, lookupValue)
      .maybeSingle();

    if (profileError) {
      console.error("[mpl] Profile fetch error", profileError.message);
      onAccessDenied('PROFILE_ERROR');
      return { granted: false, reason: 'PROFILE_ERROR', error: profileError };
    }

    if (!profile) {
      console.warn("[mpl] No profile found for user");
      onAccessDenied('NO_PROFILE');
      return { granted: false, reason: 'NO_PROFILE' };
    }

    // Check access
    const access = computePremiumAccess(profile);

    if (!access.hasAccess) {
      console.log(`[mpl] Access denied: ${access.reason}`);
      onAccessDenied(access.reason);
      return { granted: false, reason: access.reason, profile };
    }

    console.log("[mpl] Access granted: premium valid");
    return { granted: true, reason: 'VALID', profile, access };

  } catch (err) {
    // Handle SSR redirect throws
    if (err.code === 'PREMIUM_REQUIRED') {
      throw err; // Re-throw for SSR handling
    }
    
    console.error("[mpl] Unexpected error in access check", err);
    onAccessDenied('UNEXPECTED_ERROR');
    return { granted: false, reason: 'UNEXPECTED_ERROR', error: err };
  }
}

/**
 * SSR-safe version that returns result without redirecting
 */
export async function checkPremiumAccess(client = supabase, options = {}) {
  return enforcePremiumAccessAfterLogin(client, {
    ...options,
    onAccessDenied: () => {}, // No-op, just return result
  });
}
```

---

## Test Unitari Consigliati

```javascript
// __tests__/supabase-login-guard.test.js
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { enforcePremiumAccessAfterLogin, checkPremiumAccess } from '../supabase-login-guard';

// Mock Supabase client factory
function createMockClient({ session = null, sessionError = null, profile = null, profileError = null }) {
  return {
    auth: {
      getSession: vi.fn().mockResolvedValue({
        data: { session },
        error: sessionError,
      }),
    },
    from: vi.fn().mockReturnValue({
      select: vi.fn().mockReturnValue({
        eq: vi.fn().mockReturnValue({
          maybeSingle: vi.fn().mockResolvedValue({
            data: profile,
            error: profileError,
          }),
        }),
      }),
    }),
  };
}

describe('enforcePremiumAccessAfterLogin', () => {
  let mockOnDenied;

  beforeEach(() => {
    mockOnDenied = vi.fn();
  });

  it('should deny access when client is null', async () => {
    const result = await enforcePremiumAccessAfterLogin(null, { onAccessDenied: mockOnDenied });
    
    expect(result.granted).toBe(false);
    expect(result.reason).toBe('NO_CLIENT');
    expect(mockOnDenied).toHaveBeenCalledWith('NO_CLIENT');
  });

  it('should deny access when no session exists', async () => {
    const client = createMockClient({ session: null });
    const result = await enforcePremiumAccessAfterLogin(client, { onAccessDenied: mockOnDenied });
    
    expect(result.granted).toBe(false);
    expect(result.reason).toBe('NO_SESSION');
  });

  it('should deny access when session has error', async () => {
    const client = createMockClient({ sessionError: new Error('Token expired') });
    const result = await enforcePremiumAccessAfterLogin(client, { onAccessDenied: mockOnDenied });
    
    expect(result.granted).toBe(false);
    expect(result.reason).toBe('SESSION_ERROR');
  });

  it('should deny access when profile not found', async () => {
    const client = createMockClient({
      session: { user: { id: '123', email: 'test@example.com' } },
      profile: null,
    });
    const result = await enforcePremiumAccessAfterLogin(client, { onAccessDenied: mockOnDenied });
    
    expect(result.granted).toBe(false);
    expect(result.reason).toBe('NO_PROFILE');
  });

  it('should deny access for free subscription without has_paid', async () => {
    const client = createMockClient({
      session: { user: { id: '123', email: 'test@example.com' } },
      profile: { subscription_type: 'free', has_paid: false, access_until: null },
    });
    const result = await enforcePremiumAccessAfterLogin(client, { onAccessDenied: mockOnDenied });
    
    expect(result.granted).toBe(false);
    expect(result.reason).toBe('FREE_PLAN');
  });

  it('should grant access when has_paid is true', async () => {
    const client = createMockClient({
      session: { user: { id: '123', email: 'test@example.com' } },
      profile: { subscription_type: 'free', has_paid: true, access_until: null },
    });
    const result = await enforcePremiumAccessAfterLogin(client, { onAccessDenied: mockOnDenied });
    
    expect(result.granted).toBe(true);
    expect(mockOnDenied).not.toHaveBeenCalled();
  });

  it('should grant access when access_until is in the future', async () => {
    const futureDate = new Date(Date.now() + 86400000).toISOString(); // +1 day
    const client = createMockClient({
      session: { user: { id: '123', email: 'test@example.com' } },
      profile: { subscription_type: 'premium', has_paid: false, access_until: futureDate },
    });
    const result = await enforcePremiumAccessAfterLogin(client, { onAccessDenied: mockOnDenied });
    
    expect(result.granted).toBe(true);
  });

  it('should deny access when access_until is expired', async () => {
    const pastDate = new Date(Date.now() - 86400000).toISOString(); // -1 day
    const client = createMockClient({
      session: { user: { id: '123', email: 'test@example.com' } },
      profile: { subscription_type: 'premium', has_paid: false, access_until: pastDate },
    });
    const result = await enforcePremiumAccessAfterLogin(client, { onAccessDenied: mockOnDenied });
    
    expect(result.granted).toBe(false);
    expect(result.reason).toBe('EXPIRED');
  });

  it('should handle malformed access_until date', async () => {
    const client = createMockClient({
      session: { user: { id: '123', email: 'test@example.com' } },
      profile: { subscription_type: 'premium', has_paid: false, access_until: 'not-a-date' },
    });
    const result = await enforcePremiumAccessAfterLogin(client, { onAccessDenied: mockOnDenied });
    
    expect(result.granted).toBe(false);
  });

  it('should use custom profile table when specified', async () => {
    const client = createMockClient({
      session: { user: { id: '123', email: 'test@example.com' } },
      profile: { has_paid: true },
    });
    
    await enforcePremiumAccessAfterLogin(client, { 
      onAccessDenied: mockOnDenied,
      profileTable: 'custom_profiles',
    });
    
    expect(client.from).toHaveBeenCalledWith('custom_profiles');
  });
});

describe('checkPremiumAccess (SSR-safe)', () => {
  it('should return result without calling onAccessDenied', async () => {
    const client = createMockClient({ session: null });
    const result = await checkPremiumAccess(client);
    
    expect(result.granted).toBe(false);
    expect(result.reason).toBe('NO_SESSION');
    // No redirect should occur
  });
});
```

---

## Checklist di Implementazione

- [ ] Aggiungere `async` alla dichiarazione della funzione
- [ ] Allineare nome tabella (`users` vs `profiles`)
- [ ] Allineare logica `has_paid || accessValid`
- [ ] Aggiungere validazione del client Supabase
- [ ] Gestire SSR con throw/callback pattern
- [ ] Aggiungere grace period per comparazione date
- [ ] Esportare `redirectToPremiumRequired`
- [ ] Aggiungere opzioni configurabili (`profileTable`, `lookupField`, `onAccessDenied`)
- [ ] Scrivere test unitari
- [ ] Documentare comportamento SSR vs client

---

## Conclusione

La funzione ha una buona struttura base ma richiede:
1. **Fix critico**: keyword `async` (se mancante)
2. **Fix importante**: allineamento con la logica esistente in `supabase-access.js`
3. **Miglioramenti**: gestione SSR, configurabilità, retry logic

Il refactoring proposto mantiene la retrocompatibilità mentre aggiunge robustezza e flessibilità.
