// Utilities
import { defineStore } from 'pinia'

export const coreStore = defineStore('raubachCore', {
  state: () => ({
    theme: 'system' as string,
  }),
  actions: {
    setTheme(newTheme: string) {
      this.theme = newTheme
    },
  },
  persist: {
    key: 'raubach',
  },
})
