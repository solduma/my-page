<template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useLang } from "@/stores/lang";
import content from "@/content/about";

export default defineComponent({
  setup() {
    const lang = useLang();
    return { content, lang };
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
