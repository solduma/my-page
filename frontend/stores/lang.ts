import { defineStore } from "pinia";
import { ref } from "vue";

export type RootState = {
  lang: string;
};

export const useLang = defineStore("lang", () => {
  const lang = ref("kr");
  function setLang(param: string | null) {
    lang.value = !param ? "kr" : param;
  }
  function switchLang() {
    lang.value = lang.value === "en" ? "kr" : "en";
    localStorage.setItem("lang", lang.value);
  }

  return { lang, setLang, switchLang };
});
