/**
 * MUSIC PRODUCER LAB - PROGRESS TRACKER
 * LocalStorage-based progress tracking with export/import functionality
 */

(function() {
  'use strict';

  const STORAGE_KEY = 'mpl-progress';
  const VERSION = '1.0.0';

  class ProgressTracker {
    constructor() {
      this.data = this.load();
      this.initEventListeners();
    }

    /**
     * Initialize default progress structure
     */
    getDefaultData() {
      return {
        version: VERSION,
        createdAt: new Date().toISOString(),
        lastUpdated: new Date().toISOString(),
        user: {
          preferredLanguage: 'en',
          theme: 'dark'
        },
        progress: {
          totalLabsCompleted: 0,
          totalTimeMinutes: 0,
          currentStreak: 0,
          longestStreak: 0,
          lastActivityDate: null,
          labs: {},
          categories: {
            drums: { completed: 0, total: 20 },
            arrangement: { completed: 0, total: 20 },
            'sound-design': { completed: 0, total: 15 },
            mixing: { completed: 0, total: 15 },
            vocals: { completed: 0, total: 10 },
            mastering: { completed: 0, total: 10 }
          }
        },
        achievements: []
      };
    }

    /**
     * Load progress from localStorage
     */
    load() {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const data = JSON.parse(stored);
          // Validate version compatibility
          if (data.version === VERSION) {
            return data;
          }
        }
      } catch (e) {
        console.error('Failed to load progress:', e);
      }
      return this.getDefaultData();
    }

    /**
     * Save progress to localStorage
     */
    save() {
      try {
        this.data.lastUpdated = new Date().toISOString();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
        this.dispatchEvent('progress-saved', this.data);

        // Also save to cloud if user is signed in
        this.saveToCloud();

        return true;
      } catch (e) {
        console.error('Failed to save progress:', e);
        return false;
      }
    }

    /**
     * Save progress to cloud (async, fail silently if not authenticated)
     */
    async saveToCloud() {
      try {
        // Check if user is signed in
        if (!window.MplAuth || !window.MplAuth.isSignedIn) {
          return; // Silently skip if not signed in
        }

        // Check if MplApi is available
        if (!window.MplApi || !window.MplApi.progress) {
          console.log('MplApi not available, skipping cloud sync');
          return;
        }

        // Save each completed lab to cloud
        for (const [labId, labData] of Object.entries(this.data.progress.labs)) {
          if (labData.completed) {
            try {
              await window.MplApi.progress.save(labId, {
                status: 'completed',
                completion_percentage: 100,
                time_spent_seconds: Math.round((labData.timeSpent || 0) * 60), // Convert minutes to seconds
                module_name: labData.category,
              });
            } catch (error) {
              console.error(`Failed to sync lab ${labId}:`, error);
            }
          }
        }

        console.log('✅ Progress synced to cloud');
      } catch (error) {
        // Fail silently - local storage is still working
        console.error('Cloud sync failed (non-critical):', error);
      }
    }

    /**
     * Mark a lab as completed
     */
    completeLab(labId, category, timeSpent = 0) {
      const now = new Date().toISOString();

      // Check if lab was already completed
      const wasCompleted = this.data.progress.labs[labId]?.completed;

      // Update lab data
      this.data.progress.labs[labId] = {
        completed: true,
        completedAt: wasCompleted ? this.data.progress.labs[labId].completedAt : now,
        lastAttempt: now,
        attempts: (this.data.progress.labs[labId]?.attempts || 0) + 1,
        timeSpent: (this.data.progress.labs[labId]?.timeSpent || 0) + timeSpent,
        category: category
      };

      // Update totals only if first completion
      if (!wasCompleted) {
        this.data.progress.totalLabsCompleted++;
        if (category && this.data.progress.categories[category]) {
          this.data.progress.categories[category].completed++;
        }
      }

      this.data.progress.totalTimeMinutes += timeSpent;

      // Update streak
      this.updateStreak();

      // Check achievements
      this.checkAchievements();

      // Save
      this.save();

      // Dispatch event
      this.dispatchEvent('lab-completed', { labId, category, timeSpent });

      return true;
    }

    /**
     * Update daily streak
     */
    updateStreak() {
      const today = new Date().toISOString().split('T')[0];
      const lastActivity = this.data.progress.lastActivityDate;

      if (!lastActivity) {
        // First activity ever
        this.data.progress.currentStreak = 1;
        this.data.progress.longestStreak = 1;
      } else {
        const lastDate = new Date(lastActivity);
        const todayDate = new Date(today);
        const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));

        if (diffDays === 0) {
          // Same day, no change to streak
          return;
        } else if (diffDays === 1) {
          // Consecutive day, increment streak
          this.data.progress.currentStreak++;
          if (this.data.progress.currentStreak > this.data.progress.longestStreak) {
            this.data.progress.longestStreak = this.data.progress.currentStreak;
          }
        } else {
          // Streak broken, reset to 1
          this.data.progress.currentStreak = 1;
        }
      }

      this.data.progress.lastActivityDate = today;
    }

    /**
     * Check and unlock achievements
     */
    checkAchievements() {
      const achievements = [
        {
          id: 'first-beat',
          name: 'First Beat',
          description: 'Complete your first lab',
          condition: () => this.data.progress.totalLabsCompleted >= 1
        },
        {
          id: 'getting-started',
          name: 'Getting Started',
          description: 'Complete 5 labs',
          condition: () => this.data.progress.totalLabsCompleted >= 5
        },
        {
          id: 'committed',
          name: 'Committed',
          description: 'Complete 10 labs',
          condition: () => this.data.progress.totalLabsCompleted >= 10
        },
        {
          id: 'dedicated',
          name: 'Dedicated Producer',
          description: 'Complete 20 labs',
          condition: () => this.data.progress.totalLabsCompleted >= 20
        },
        {
          id: 'master',
          name: 'Lab Master',
          description: 'Complete all labs',
          condition: () => this.data.progress.totalLabsCompleted >= 90
        },
        {
          id: 'week-streak',
          name: 'Week Warrior',
          description: 'Practice 7 days in a row',
          condition: () => this.data.progress.currentStreak >= 7
        },
        {
          id: 'month-streak',
          name: 'Monthly Master',
          description: 'Practice 30 days in a row',
          condition: () => this.data.progress.currentStreak >= 30
        },
        {
          id: 'drums-complete',
          name: 'Rhythm Master',
          description: 'Complete all Drums labs',
          condition: () => this.data.progress.categories.drums.completed >= this.data.progress.categories.drums.total
        },
        {
          id: 'speed-demon',
          name: 'Speed Demon',
          description: 'Complete 3 labs in one day',
          condition: () => {
            const today = new Date().toISOString().split('T')[0];
            const todayLabs = Object.values(this.data.progress.labs).filter(
              lab => lab.completedAt?.startsWith(today)
            );
            return todayLabs.length >= 3;
          }
        }
      ];

      achievements.forEach(achievement => {
        if (achievement.condition() && !this.hasAchievement(achievement.id)) {
          this.unlockAchievement(achievement.id, achievement.name, achievement.description);
        }
      });
    }

    /**
     * Check if achievement is unlocked
     */
    hasAchievement(achievementId) {
      return this.data.achievements.some(a => a.id === achievementId);
    }

    /**
     * Unlock an achievement
     */
    unlockAchievement(id, name, description) {
      this.data.achievements.push({
        id,
        name,
        description,
        unlockedAt: new Date().toISOString()
      });
      this.dispatchEvent('achievement-unlocked', { id, name, description });
      this.save();
    }

    /**
     * Get completion percentage
     */
    getCompletionPercentage() {
      const totalLabs = Object.values(this.data.progress.categories).reduce(
        (sum, cat) => sum + cat.total, 0
      );
      return totalLabs > 0
        ? Math.round((this.data.progress.totalLabsCompleted / totalLabs) * 100)
        : 0;
    }

    /**
     * Get stats summary
     */
    getStats() {
      return {
        totalCompleted: this.data.progress.totalLabsCompleted,
        totalTime: this.data.progress.totalTimeMinutes,
        currentStreak: this.data.progress.currentStreak,
        longestStreak: this.data.progress.longestStreak,
        completionPercentage: this.getCompletionPercentage(),
        achievementsCount: this.data.achievements.length,
        categories: this.data.progress.categories
      };
    }

    /**
     * Export progress to JSON file
     */
    exportProgress() {
      const dataStr = JSON.stringify(this.data, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });

      const date = new Date().toISOString().split('T')[0];
      const filename = `mpl-progress-${date}.json`;

      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.click();

      URL.revokeObjectURL(url);

      this.dispatchEvent('progress-exported', { filename });
      return filename;
    }

    /**
     * Import progress from JSON
     */
    importProgress(jsonData) {
      try {
        const imported = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;

        // Validate structure
        if (!imported.version || !imported.progress) {
          throw new Error('Invalid progress data format');
        }

        // Merge with existing data (keep the latest)
        this.data = this.mergeProgress(this.data, imported);
        this.save();

        this.dispatchEvent('progress-imported', this.data);
        return true;
      } catch (e) {
        console.error('Failed to import progress:', e);
        this.dispatchEvent('progress-import-error', { error: e.message });
        return false;
      }
    }

    /**
     * Merge two progress objects (keep most recent)
     */
    mergeProgress(current, imported) {
      const merged = { ...current };

      // Merge labs (keep completed status from either source)
      Object.keys(imported.progress.labs).forEach(labId => {
        const importedLab = imported.progress.labs[labId];
        const currentLab = current.progress.labs[labId];

        if (!currentLab || (importedLab.completed && !currentLab.completed)) {
          merged.progress.labs[labId] = importedLab;
        }
      });

      // Recalculate totals
      merged.progress.totalLabsCompleted = Object.values(merged.progress.labs)
        .filter(lab => lab.completed).length;

      merged.progress.totalTimeMinutes = Object.values(merged.progress.labs)
        .reduce((sum, lab) => sum + (lab.timeSpent || 0), 0);

      // Keep best streak
      merged.progress.longestStreak = Math.max(
        current.progress.longestStreak,
        imported.progress.longestStreak
      );

      // Merge achievements
      const allAchievements = [...current.achievements, ...imported.achievements];
      merged.achievements = Array.from(
        new Map(allAchievements.map(a => [a.id, a])).values()
      );

      merged.lastUpdated = new Date().toISOString();

      return merged;
    }

    /**
     * Reset all progress (with confirmation)
     */
    reset() {
      this.data = this.getDefaultData();
      this.save();
      this.dispatchEvent('progress-reset');
      return true;
    }

    /**
     * Dispatch custom events
     */
    dispatchEvent(eventName, detail = {}) {
      window.dispatchEvent(new CustomEvent(`mpl:${eventName}`, { detail }));
    }

    /**
     * Initialize event listeners
     */
    initEventListeners() {
      // Listen for file input changes (for import)
      document.addEventListener('change', (e) => {
        if (e.target.id === 'importProgressFile') {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
              this.importProgress(event.target.result);
            };
            reader.readAsText(file);
          }
        }
      });
    }
  }

  // Create global instance
  window.MPL = window.MPL || {};
  window.MPL.ProgressTracker = new ProgressTracker();

  // Auto-update navbar badge on load
  window.addEventListener('DOMContentLoaded', () => {
    const stats = window.MPL.ProgressTracker.getStats();
    const badge = document.getElementById('progress-badge');
    if (badge) {
      const totalLabs = Object.values(stats.categories).reduce((sum, cat) => sum + cat.total, 0);
      badge.textContent = `${stats.totalCompleted}/${totalLabs}`;
      badge.style.display = 'inline-block';
    }
  });

})();
