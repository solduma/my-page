import * as FontAwesome from "./plugins/fontawesome";

export default {
  head: {
    title: "Il jo Yoo | Data Scientist",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "og:title",
        property: "og:title",
        content: "Il jo Yoo | ML Scientist",
      },
      { hid: "og:url", property: "og:url", content: "yoo.il-jo.com" },
      {
        hid: "og:description",
        property: "og:description",
        content: "Data Science, Machine Learning, Deep Learning, MLOps, DevOps, WebDev & beyond!",
      },
      { name: "format-detection", content: "telephone=no" },
      { name: "theme-color", content: "#ffd35d" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["@/assets/css/main.scss"],

  plugins: [],

  components: true,

  buildModules: [
    "@nuxtjs/fontawesome",
    "@nuxt/typescript-build",
    "@nuxtjs/composition-api/module",
    ['@pinia/nuxt', { disableVuex: true }],
  ],
  fontawesome: {
    icons: {
      solid: FontAwesome.solid,
      regular: FontAwesome.regular,
      brands: FontAwesome.brands,
    },
  },

  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
  ],

  axios: {
    baseURL: "/",
    proxy: true, 
  },

  proxy: {
    "/api": {
      target: `http://localhost:3000`,
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    },
  },

  pwa: {
    manifest: {
      lang: "en",
    },
  },

  build: {},
  server: {
    port: 4002,
  },
  telemetry: false,
};
