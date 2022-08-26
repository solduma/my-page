<template>
  <div class="momowWrapper">
    <h1>
      <a href="https://momo.town" aria-label="Momo"
        ><img src="../assets/img/momologo.png" alt="Momo Link"
      /></a>
    </h1>
    <p>
      Momo aims to become the greatest Mobility Community. <br />
      It's in an open beta state, but you can sign-up, post your ideas, or share funny memes. <br/>
      I intend to keep a Dev Journal on this page to share my story about full-stack web and DevOps development. <br/>
      Any thoughts are welcome, especially if you are interested in joining the team Momo!
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  layout: 'MainLayout',
  components: {},
});
</script>

<style lang="scss">
.momowWrapper {
  display: flex;
  flex-flow: column;
  align-content: center;
}
.momowWrapper > h1 > a > img {
  width: 400px;
}
</style>