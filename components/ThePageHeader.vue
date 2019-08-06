<template>
  <header>
    <nav
      class="d-block mb-5 p-3 py-auto shadow-sm d-flex flex-column flex-md-row justify-content-baseline border-bottom post-nav"
    >
      <div class="post-header-photo mx-auto mb-2 mx-md-0 mb-md-0">
        <nuxt-link to="/" class="d-block">
          <img
            class="rounded-circle post-header-pic header-pic border-white"
            src="~/static/apple-icon.png"
            alt="Waju"
          />
        </nuxt-link>
      </div>
      <ul class="ml-md-auto nav justify-content-center align-items-baseline">
        <li class="nav-item active">
          <nuxt-link class="nav-link" to="/">Blog</nuxt-link>
        </li>

        <li class="nav-item">
          <a
            class="nav-link"
            href="https://twitter.com/waju_abolarin"
            target="_blank"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://github.com/WajuAbolarin"
            target="_blank"
          >
            <i class="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

