<template>
  <div>
    <br>
    <hr>
    <a href="https://github.com/solduma/" aria-label="Github">
      <font-awesome-layers class="fa-2x">
        <font-awesome-icon :icon="['fab', 'github']" />
      </font-awesome-layers>
    </a>
    <a
      href="https://www.linkedin.com/in/il-jo-yoo-58034720/"
      aria-label="LinkedIn"
    >
      <font-awesome-layers class="fa-2x">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </font-awesome-layers>
    </a>
    <a href="mailto: iljo.joseph.yoo@gmail.com" aria-label="Email">
      <font-awesome-layers class="fa-2x">
        <font-awesome-icon :icon="['fas', 'envelope']" />
      </font-awesome-layers>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>

<style scoped lang="scss">
@import "../assets/css/variables.scss";

a {
  // color: $BumbleBeeYellow;
  color: rgb(95, 95, 95);
  position: relative;
  margin-right: 5px;
}
</style>