require("dotenv").config();
const pkg = require("./package");
const axios = require("axios");

const apiUrl = process.env.SANITY_API_URL;

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: "Waju",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
      { name: "msapplication-TileColor", content: "#ffffff" },
      { name: "msapplication-TileImage", content: "/ms-icon-144x144.png" },
      { name: "theme-color", content: "#ffffff" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Lora:400,700|Poppins:400,700,900"
      },
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/apple-icon-57x57.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/apple-icon-60x60.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/apple-icon-72x72.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/apple-icon-76x76.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/apple-icon-114x114.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/apple-icon-120x120.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/apple-icon-144x144.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/apple-icon-152x152.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-icon-180x180.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/android-icon-192x192.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "link.replace(regex,",
        href: "/favicon-96x96.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      { rel: "manifest", href: "/manifest.json" }
    ]
  },
  generate: {
    routes() {
      return axios
        .get(
          `${apiUrl}?query=*%5B_type%20%3D%3D%20%22post%22%20%20%7C%7C%20_type%20%3D%3D%20'tag'%5D%7B%0A%20%20'slug'%20%3A%20slug.current%2C%0A%20%20title%2C%0A%20%20'type'%3A_type%20%0A%7D`
        )
        .then(resp => {
          let urls = resp.data.result.map(link => {
            if (link.type == "tag") {
              return `/tag/${link.title.toLowerCase()}`;
            }
            return `/${link.slug}`;
          });
          return ["/", ...urls];
        });
    }
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "rgba(184, 172, 9, 0.488)" },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/api"],

  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/dotenv", "@nuxtjs/google-analytics"],
  googleAnalytics: {
    id: 'UA-145243170'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  https: true
};
