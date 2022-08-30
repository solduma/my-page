<template>
  <header>
    <h1>
      <NuxtLink to="/">
        <img src="../assets/img/logo.png" alt="Main Logo" />
      </NuxtLink>
    </h1>
    <nav>
      <h2 class="hide">This is a nav area!</h2>
      <NuxtLink to="/about">
        <div class="desktop">
          <font-awesome-layers class="fa-lg">
            <font-awesome-icon :icon="['fas', 'user']" />
          </font-awesome-layers>
        </div>
        <div class="mobile">About Me</div>
      </NuxtLink>
      <NuxtLink to="/project">
        <div class="desktop">
          <font-awesome-layers class="fa-lg">
            <font-awesome-icon :icon="['fas', 'briefcase']" />
          </font-awesome-layers>
        </div>
        <div class="mobile">Past Projects</div>
      </NuxtLink>
      <NuxtLink to="/blog">
        <div class="desktop">
          <font-awesome-layers class="fa-lg">
            <font-awesome-icon :icon="['fas', 'chart-column']" />
          </font-awesome-layers>
        </div>
        <div class="mobile">ML Stuffs</div>
      </NuxtLink>
      <NuxtLink to="/momo">
        <div>
          <img src="../assets/img/momo.png" alt="Momo Img" />
        </div>
      </NuxtLink>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isOnMobile: false,
    };
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      if (window.innerWidth <= 767) {
        this.isOnMobile = true;
      } else {
        this.isOnMobile = false;
      }
    },
  },
});
</script>

<style scoped lang="scss">
@import "../assets/css/variables.scss";

@media (max-width: 767px) {
  .mobile {
    display: none;
  }
}

@media (min-width: 767px) {
  .desktop {
    display: none;
  }
}

p {
  position: relative;
  z-index: 1;
}

header {
  position: fixed;
  display: flex;
  flex-flow: row-wrap;
  justify-content: space-between;
  align-items: stretch;
  top: 0;
  min-width: 100vw;
  background: $BumbleBeeYellow;
  margin: 0px;
}

header a {
  display: flex;
  flex-flow: row-wrap;
  align-items: center;
}

header img {
  width: 32px;
  height: 32px;
  margin: 4px;
}

nav {
  display: flex;
  flex-flow: wrap;
  justify-content: flex-end;
  align-items: stretch;
  margin-right: 20px;
}
nav a {
  margin: 0px 0px 0px 20px;
  font-size: 18px;
  font-weight: bold;
  line-height: 32 px;
  text-decoration: none;
  color: black;
}

nav a:last-child {
  color: $MomoGrotto;
}

.router-link-active {
  color: white;
  text-shadow: -1px 0 #ffc72b, 0 1px #ffc72b, 1px 0 #ffc72b, 0 -1px #ffc72b;
}
</style>
