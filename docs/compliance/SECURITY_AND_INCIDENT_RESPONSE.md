# Security Controls & Incident Response Summary

**Version:** 1.0

## 1. Security Baseline
- Password hashing with bcrypt.
- Origin validation on auth-sensitive endpoints.
- Reset-token based password recovery.
- Auth endpoint throttling with persistent DB-backed buckets and fallback behavior.
- Multi-tenant RLS policies defined in canonical schema.

## 2. Security Governance
- Quarterly control review.
- Secrets rotation policy for production credentials.
- Change management via PR review and build validation.

## 3. Incident Response Lifecycle
1. Detect and triage.
2. Contain and mitigate.
3. Eradicate and recover.
4. Post-incident review with corrective actions.

## 4. Notification Commitments
- Confirmed security incidents affecting customer data: notify without undue delay, target within 24 hours of confirmation.
- Follow-up reports include scope, impacted systems, and remediation actions.

## 5. Evidence Artifacts for Procurement
- RLS verification script and staging evidence pack.
- Vulnerability remediation log.
- Build and release records.
