<template>
  <div class="momowWrapper">
    <h1>
      <a href="https://momo.town" aria-label="Momo"
        ><img src="img/momologo.png" alt="Momo Link"
      /></a>
    </h1>
    <p v-html="content[lang.lang]"></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { useLang } from "@/stores/lang";
import content from "@/content/momo";

export default defineComponent({
  setup() {
    const lang = useLang();
    return { content, lang };
  },
});
</script>

<style lang="scss">
.momowWrapper {
  display: flex;
  flex-flow: column;
  align-content: center;
}

@media (max-width: 767px) {
  .momowWrapper > h1 > a > img {
    width: 280px;
  }
}

@media (min-width: 767px) {
  .momowWrapper > h1 > a > img {
    width: 400px;
  }
}
</style>