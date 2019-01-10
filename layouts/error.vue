<template>
  <div class="container text-center py-auto">
    <h1 class="my-auto font-weight-bold page-title" v-if="error.statusCode === 404">Page Not Found</h1>
    <h1 class="my-auto font-weight-bold page-title" v-else>An Error Occurred</h1>
     <nuxt-link to="/" class="btn btn-outline-secondary btn-md px-5 mt-5">
        Home
      </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'page' // you can set a custom layout for the error page
}
</script>
