import { defineStore } from "pinia";

export const useStore = defineStore("storeId", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      lang: "kr",
    };
  },
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    switchLang() {
      this.lang = this.lang === "en" ? "kr" : "en";
    },
  },
});
