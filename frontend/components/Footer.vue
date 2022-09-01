<template>
  <div>
    <br />
    <hr />
    <div id="footerWrapper">
      <div>
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
      <div class="switch">
        <input
          id="language-toggle"
          class="check-toggle check-toggle-round-flat"
          type="checkbox"
        />
        <label for="language-toggle"></label>
        <span class="on">KR</span>
        <span class="off">EN</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// document.getElementById("language-toggle").value;
export default defineComponent({
  name: "Footer",
  mounted() {
    if (process.browser && !this.$auth.$storage.getLocalStorage("lang")) {
      this.$auth.$storage.setLocalStorage(
        "lang",
        (document.getElementById("language-toggle") as HTMLInputElement)
          .value == "on"
          ? "kr"
          : "en"
      );
    } else {
      this.$auth.$storage.setLocalStorage("lang", "en");
    }
  },
});
</script>

<style scoped lang="scss">
@import "../assets/css/variables.scss";

#footerWrapper {
  display: flex;
  justify-content: space-between;
}

a {
  // color: $BumbleBeeYellow;
  color: rgb(95, 95, 95);
  position: relative;
  margin-right: 5px;
}

.switch {
  position: relative;
  display: inline-block;
  margin: 0 5px;
}

.switch > span {
  position: absolute;
  top: 14px;
  pointer-events: none;
  font-family: "Helvetica", Arial, sans-serif;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  width: 50%;
  text-align: center;
}

input.check-toggle-round-flat:checked ~ .off {
  color: black;
}

input.check-toggle-round-flat:checked ~ .on {
  color: $BumbleBeeYellow;
}

.switch > span.on {
  left: 0;
  padding-left: 2px;
  color: black;
}

.switch > span.off {
  right: 0;
  padding-right: 4px;
  color: white;
}

.check-toggle {
  position: absolute;
  margin-left: -9999px;
  visibility: hidden;
}
.check-toggle + label {
  display: block;
  position: relative;
  cursor: pointer;
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

input.check-toggle-round-flat + label {
  padding: 2px;
  width: 97px;
  height: 35px;
  background-color: $BumbleBeeYellow;
  -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  -ms-border-radius: 60px;
  -o-border-radius: 60px;
  border-radius: 60px;
}
input.check-toggle-round-flat + label:before,
input.check-toggle-round-flat + label:after {
  display: block;
  position: absolute;
  content: "";
}

input.check-toggle-round-flat + label:before {
  top: 2px;
  left: 2px;
  bottom: 2px;
  right: 2px;
  background-color: $BumbleBeeYellow;

  -moz-border-radius: 60px;
  -ms-border-radius: 60px;
  -o-border-radius: 60px;
  border-radius: 60px;
}
input.check-toggle-round-flat + label:after {
  top: 4px;
  left: 4px;
  bottom: 4px;
  width: 48px;
  background-color: #fff;
  -webkit-border-radius: 52px;
  -moz-border-radius: 52px;
  -ms-border-radius: 52px;
  -o-border-radius: 52px;
  border-radius: 52px;
  -webkit-transition: margin 0.2s;
  -moz-transition: margin 0.2s;
  -o-transition: margin 0.2s;
  transition: margin 0.2s;
}

input.check-toggle-round-flat:checked + label {
}

input.check-toggle-round-flat:checked + label:after {
  margin-left: 44px;
}
</style>
