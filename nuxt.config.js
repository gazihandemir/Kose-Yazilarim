const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://bootswatch.com/4/sketchy/bootstrap.min.css",
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#666" },

  /*
   ** Global CSS
   */
  css: [
    //  "~/assets/style/bootstrap.min.css"
  ],
  env: {
    baseUrl: "https://kose-yazilarim-d82f6-default-rtdb.firebaseio.com",
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/Components.js"],

  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],
  axios: {},

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
