<template>
  <div>
    <h1>Il Jo Yoo</h1>
    <p>
      I'm a Senior Data Scientist at Hyundai Capital, and a Co-Founder of
      <a href="https://momo.town">Momo</a>. <br />
      I write about Programming, Data Science, MLOps, and Web Development in a
      product perspective. <br />
      All views are my own.<br />
      Feel free to contact me with anything via following channels. <br />
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useLang } from "@/stores/lang";


export default defineComponent({
  layout(context) {
    return "MainLayout";
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
