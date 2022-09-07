<template>
  <div>
    <div v-if="lang.lang === 'en'">
      <h1>Il Jo Yoo</h1>
      <p>
        I'm a Senior Data Scientist at Hyundai Capital, and a Co-Founder of
        <a href="https://momo.town">Momo</a>. <br />
        I write about Programming, Data Science, MLOps, and Web Development in a
        product perspective. <br />
        All views are my own.<br />
        Feel free to contact me with anything. <br />
      </p>
    </div>
    <div v-else>
      <h1>유일조</h1>
      <p>
        현대캐피탈의 시니어 데이터 사이언티스트로 근무하고 있으며
        <a href="https://momo.town">Momo</a>의 공동 창업자입니다. <br />
        프로덕트 관점에서의 프로그래밍, 데이터 사이언스, MLOps, 웹개발에 관해
        이야기 해 보려 합니다.<br />
        이곳의 모든 글은 제 주관적 경험으로 작성되어 있습니다.<br />
        모든 주제와 내용을 불문하고 연락은 환영합니다.<br />
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useLang } from "@/stores/lang";

export default defineComponent({
  data() {
    return {
      lang: useLang(),
    };
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
