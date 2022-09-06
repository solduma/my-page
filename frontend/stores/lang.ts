import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useLang = defineStore("lang", () => {
  const lang = ref("kr");
  function setLang(param: string | null) {
    lang.value = !param ? 'kr' : param ;
  }
  function switchLang() {
    lang.value = lang.value === "en" ? "kr" : "en";
  }

  return { lang, setLang, switchLang };
});
