import path, { join } from "path";
import fs from "fs";
import * as FontAwesome from "./plugins/fontawesome";
import { faYahoo } from "@fortawesome/free-brands-svg-icons";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Il jo Yoo | ML Engineer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "og:title",
        property: "og:title",
        content: "Il jo Yoo | ML Engineer",
      },
      { hid: "og:url", property: "og:url", content: "yoo.il-join.com" },
      {
        hid: "og:description",
        property: "og:description",
        content: "ML/DL, DevOps, WebDev & beyond!",
      },
      { name: "format-detection", content: "telephone=no" },
      { name: "theme-color", content: "#ffd35d" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/fontawesome",
    "@nuxt/typescript-build",
    "@nuxtjs/composition-api/module",
  ],
  fontawesome: {
    icons: {
      solid: FontAwesome.solid,
      regular: FontAwesome.regular,
      brands: FontAwesome.brands,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
    proxy: true, // proxy 사용
  },

  proxy: {
    "/api": {
      // target: `https://${domain}`,
      target: `http://localhost:3000`,
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    },
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  server: {
    port: 4002,
  },
  telemetry: false,
};
