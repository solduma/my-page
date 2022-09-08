<template>
  <div>
    <div v-html="content[lang.lang]"></div>
    <div v-for="skill in badges" :key="skill.type" class="skillWrapper">
      <p>{{ skill.type }}</p>
      <ul>
        <li v-for="link in skill.links" :key="link.alt">
          <img
            :src="
              'https://img.shields.io/badge/-' +
              link.alt +
              '-' +
              link.color +
              '?style=for-the-badge&logo=' +
              link.name +
              '&logoColor=ffdd54&style=flat'
            "
            :alt="link.alt"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import badges from "../assets/json/badges.json";
import { useLang } from "@/stores/lang";
import content from "@/content/about";

export default defineComponent({
  setup() {
    const lang = useLang();
    return { content, lang, badges };
  },
});
</script>

<style scoped lang="scss">
h2 {
  height: 32px;
}

@media (max-width: 767px) {
  ::v-deep .aboutWrapper,
  ::v-deep .skillWrapper {
    display: block;
  }
  ::v-deep .onPC {
    display: none;
  }
}

@media (min-width: 767px) {
  ::v-deep .aboutWrapper,
  ::v-deep .skillWrapper,
  ::v-deep .isOnMobile {
    display: flex;
  }
  ::v-deep .onMobile {
    display: none;
  }
}

::v-deep .aboutWrapper > ul {
  margin-bottom: 20px;
}

::v-deep .aboutWrapper > img,
::v-deep ul:first-child,
::v-deep p {
  width: 140px;
  margin-right: 30px;
  font-weight: bold;
  flex-shrink: 0;
}

::v-deep .skillWrapper > ul {
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 5px;
  flex-shrink: 1;
}

::v-deep .skillWrapper > ul > li {
  margin-right: 3px;
}
</style>
