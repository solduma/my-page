<template>
  <div v-html="content[lang.lang]"></div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { useLang } from "@/stores/lang";
import content from "@/content/index";

export default defineComponent({
  setup() {
    const lang = useLang();
    return { content, lang };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/css/variables.scss";
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600");
@import url("https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap");

ul > li {
  display: flex;
  margin-right: 3px;
  margin-bottom: 3px;
  display: flex;
  flex-flow: row wrap;
}

p > a {
  color: $MomoGrotto;
  font-weight: bold;
  line-height: 32 px;
  text-decoration: none;
}
</style>
