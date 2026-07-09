// Utilities
import { defineStore } from 'pinia'

export const coreStore = defineStore('raubachCore', {
  state: () => ({
    darkMode: null as (boolean | null),
    systemTheme: 'dark',
    theme: 'light',
  }),
  getters: {
    storeDarkMode: (state): boolean | null => state.darkMode,
    storeTheme: (state): string => state.theme,
    storeIsDarkMode: (state): boolean => (state.theme === 'system' ? state.systemTheme : state.theme) === 'dark',
    storeSystemTheme: (state): string => state.systemTheme || 'dark',
  },
  actions: {
    setDarkMode (newDarkMode: boolean) {
      this.darkMode = newDarkMode
    },
    setTheme (newTheme: string) {
      this.theme = newTheme

      if (newTheme !== 'system') {
        this.setDarkMode(newTheme === 'dark')
      }
    },
    setSystemTheme (newSystemTheme: string) {
      this.systemTheme = newSystemTheme
    },
  },
  persist: {
    key: 'raubach',
  },
})
