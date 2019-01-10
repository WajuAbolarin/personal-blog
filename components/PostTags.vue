<template>
  <div class="post-tags ml-auto d-flex justify-content-around">
    <nuxt-link
      v-for="tag in tags"
      :key="tag"
      :to="`/tag/${tag.toLowerCase()}`"
      class="post-tag mx-1 badge"
      >
      {{tag}}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['tags'],
}
</script>

<style>

</style>
