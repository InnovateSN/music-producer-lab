/**
 * Music Producer Lab - API Client
 * Handles communication with the backend API
 *
 * Usage:
 * - Include this file in your HTML: <script src="/js/api-client.js"></script>
 * - Call API methods: await MplApi.saveProgress('drums-1', { status: 'completed' })
 */

window.MplApi = {
  baseUrl: '/api',

  /**
   * Generic API call helper
   */
  async call(endpoint, options = {}) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'API request failed');
      }

      return data;
    } catch (error) {
      console.error(`API Error (${endpoint}):`, error);
      throw error;
    }
  },

  /**
   * Authentication
   */
  auth: {
    /**
     * Sync user with database after login
     */
    async sync() {
      return MplApi.call('/auth/sync', {
        method: 'POST',
      });
    },

    /**
     * Get current user profile
     */
    async getCurrentUser() {
      return MplApi.call('/users/me');
    },

    /**
     * Update current user profile
     */
    async updateProfile(data) {
      return MplApi.call('/users/me', {
        method: 'PATCH',
        body: JSON.stringify(data),
      });
    },
  },

  /**
   * Lesson Progress
   */
  progress: {
    /**
     * Get all lesson progress for current user
     */
    async getAll() {
      return MplApi.call('/progress');
    },

    /**
     * Get progress for a specific lesson
     */
    async get(lessonKey) {
      return MplApi.call(`/progress/${lessonKey}`);
    },

    /**
     * Save lesson progress
     * @param {string} lessonKey - e.g., 'drums-1', 'harmony-5'
     * @param {object} data - { status, completion_percentage, time_spent_seconds, module_name, lesson_number }
     */
    async save(lessonKey, data) {
      return MplApi.call('/progress', {
        method: 'POST',
        body: JSON.stringify({
          lesson_key: lessonKey,
          ...data,
        }),
      });
    },

    /**
     * Mark lesson as completed
     */
    async complete(lessonKey, timeSpent = 0) {
      return this.save(lessonKey, {
        status: 'completed',
        completion_percentage: 100,
        time_spent_seconds: timeSpent,
      });
    },

    /**
     * Mark lesson as in progress
     */
    async start(lessonKey) {
      return this.save(lessonKey, {
        status: 'in_progress',
        completion_percentage: 0,
        time_spent_seconds: 0,
      });
    },
  },

  /**
   * Saved Patterns (drums, melodies, chords)
   */
  patterns: {
    /**
     * Get all saved patterns
     */
    async getAll() {
      return MplApi.call('/patterns');
    },

    /**
     * Save a pattern
     * @param {string} type - 'drum_pattern', 'melody', 'chord_progression'
     * @param {object} patternData - The pattern data (steps, notes, etc.)
     * @param {object} options - { name, lessonKey, isFavorite }
     */
    async save(type, patternData, options = {}) {
      return MplApi.call('/patterns', {
        method: 'POST',
        body: JSON.stringify({
          pattern_type: type,
          pattern_data: patternData,
          pattern_name: options.name,
          lesson_key: options.lessonKey,
          is_favorite: options.isFavorite || false,
        }),
      });
    },
  },

  /**
   * Statistics
   */
  stats: {
    /**
     * Get user statistics
     */
    async getMyStats() {
      return MplApi.call('/stats/me');
    },
  },

  /**
   * Migration helper: Import localStorage progress to database
   */
  async migrateLocalStorage() {
    try {
      const localProgress = JSON.parse(localStorage.getItem('lessonProgress') || '{}');

      if (Object.keys(localProgress).length === 0) {
        console.log('No local progress to migrate');
        return { migrated: 0 };
      }

      let migrated = 0;

      for (const [lessonKey, data] of Object.entries(localProgress)) {
        try {
          await this.progress.save(lessonKey, data);
          migrated++;
        } catch (error) {
          console.error(`Failed to migrate ${lessonKey}:`, error);
        }
      }

      console.log(`Migrated ${migrated} lessons to cloud`);

      // Optional: Clear local storage after successful migration
      // localStorage.removeItem('lessonProgress');

      return { migrated };
    } catch (error) {
      console.error('Migration error:', error);
      throw error;
    }
  },

  /**
   * Hybrid storage: Save to both localStorage and cloud
   * Use this during transition period
   */
  async saveProgressHybrid(lessonKey, data) {
    // Save to localStorage (existing behavior)
    const localProgress = JSON.parse(localStorage.getItem('lessonProgress') || '{}');
    localProgress[lessonKey] = data;
    localStorage.setItem('lessonProgress', JSON.stringify(localProgress));

    // Try to save to cloud (fail silently if not authenticated)
    try {
      await this.progress.save(lessonKey, data);
    } catch (error) {
      // User might not be logged in, that's okay
      console.log('Cloud save skipped (not authenticated)');
    }
  },

  /**
   * Check if user is authenticated
   */
  async isAuthenticated() {
    try {
      await this.auth.getCurrentUser();
      return true;
    } catch {
      return false;
    }
  },
};

/**
 * Auto-sync on page load if user is authenticated
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', async () => {
    const isAuth = await MplApi.isAuthenticated();
    if (isAuth) {
      console.log('✅ User authenticated, cloud sync enabled');

      // Optional: Auto-migrate local storage
      // await MplApi.migrateLocalStorage();
    } else {
      console.log('ℹ️ User not authenticated, using local storage only');
    }
  });
} else {
  // DOM already loaded
  (async () => {
    const isAuth = await MplApi.isAuthenticated();
    if (isAuth) {
      console.log('✅ User authenticated, cloud sync enabled');
    }
  })();
}

// Export for modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MplApi;
}
