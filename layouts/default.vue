<template>
  <main role="main">
    <home-header/>
    <nuxt/>
    <the-footer/>
    <hr>
  </main>
</template>

<script>
import HomeHeader from '~/components/TheHomeHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components:{HomeHeader, TheFooter},
  head: {
    link: [
      { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/css/style.css' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.6.3/css/brands.css',
        crossorigin:'anonymous',
        integrity: 'sha384-1KLgFVb/gHrlDGLFPgMbeedi6tQBLcWvyNUN+YKXbD7ZFbjX6BLpMDf0PJ32XJfX'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.6.3/css/fontawesome.css',
        crossorigin:'anonymous',
        integrity: 'sha384-jLuaxTTBR42U2qJ/pm4JRouHkEDHkVqH0T1nyQXn1mZ7Snycpf6Rl25VBNthU4z0'
      },
    ],
    meta: [
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@waju_abolarin' },
      { name: 'twitter:title', content: 'Abolarin Olanrewaju, Fullstack Developer, Laravel, VueJS, NuxtJS' },
      { name: 'twitter:description', content: 'Personal Blog of Abolarin Olanrewaju, where i write about, Javascript, VueJs, Laravel, PHP, stupid mistakes, and the occasional great idea!' },
      { name: 'twitter:image', content: '/apple-icon-180x180.png' },
      { name: 'twitter:image:alt', content: 'Waju' }
    ]
  },
}
</script>
<style lang="scss">
article {
    blockquote {
      text-align: left;
      border-left : 3px solid rgba(184, 172, 9, 0.488);
      padding-left: .7rem;
      margin-bottom: 1.25rem;
      font-size: 1rem;
    }

    img{
        margin-bottom: 3rem;
        margin-top: 3rem;
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
        max-width: 100%;
        height: auto;
        border-radius: .25rem;
    }
}
span.tag-name{
    background: rgba(184, 172, 9, 0.488);
    transform: rotate(-2deg);
}
.btn {
    border-color: rgba(184, 172, 9, 0.488);
    color: #000;
    font-weight: 700;

}
.btn-outline-secondary:hover {
    color: #000;
    background-color: rgba(184, 172, 9, 0.488);
    border-color: rgba(184, 172, 9, 0.488);
}

.nav-item{
    border: 2px solid transparent;
    font-weight: 900;
}
.nav-item.active,
.nav-item:hover{
    border-bottom: 2px solid rgba(184, 172, 9, 0.488);
}
.copy-mail{
    background: rgba(184, 172, 9, 0.488);
    transform: rotate(-2deg);
    display: inline-block;
    font-weight: 900;
    font-family: Poppins;
    padding: .5em;
    margin-right: .9em;
}

.credits{
    position: fixed;
    bottom: 0;
    // left: -25px;
    pointer-events: none;
    font-size: 0.7rem;
    margin-bottom: .4em;
}

.upright{
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotateZ(180deg);
}

.site-footer{
    background: url('/images/rock.png');
    background-size: cover;
    background-position: center center;
    display: block;
    margin: 0;
    border-top: 2px solid #E5E6E7;
}
</style>
