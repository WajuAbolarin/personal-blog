<template>
  <div>
    <header class="d-flex flex-column align-items-center p-2 pt-5 container">
    <nuxt-link to="/">
      <img class="rounded-circle header-pic border-white" src="~assets/images/me.png" alt="Abolarin Olanrewaju Olabode">
    </nuxt-link>
    <div class="header-pic-ring"></div>
    <h1 class="page-title text-center mt-0 h4">
      Abolarin Olanrewaju
    </h1>
    <small class="text-muted text-center mb-2 font-italic">
      Fullstack developer building the web with Laravel and VueJS
    </small>
    <div class="d-flex mt-1 justify-content-between">
        <span class="mr-4 h4">
            <a href="https://twitter.com/waju_abolarin" target="_blank">
                <i class="fab fa-twitter"></i>
            </a>
        </span>
        <span class="h4">
            <a href="https://github.com/WajuAbolarin" target="_blank">
                <i class="fab fa-github"></i>
            </a>
        </span>
    </div>
    </header>
    <nav class="container mb-5">
      <hr>
      <ul class="nav justify-content-center">
          <li class="nav-item active">
              <nuxt-link class="nav-link" to="/">Blog</nuxt-link>
          </li>
          <!-- <li class="nav-item">
              <nuxt-link class="nav-link" to="#">Projects</nuxt-link>
          </li> -->
      </ul>
      <hr>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
