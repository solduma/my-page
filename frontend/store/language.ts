import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => ({ lang: 'en' }),
  getters: {
    getLang: (state) => state.lang,
  },
  actions: {
    switchLang() {
      this.lang = this.lang === 'en' ? 'kr' : 'en';
    },
  },
})