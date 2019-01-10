<template>
  <ul class="d-flex flex-column post-list px-2">
    <post-list-item
      tag="li"
      v-for="post in posts"
      :post="post"
      :key="post.slug"
      />
  </ul>
</template>

<script>
import PostListItem from '~/components/PostListItem'

export default {

  components: {PostListItem},

  props: ['posts'],

}
</script>

<style>

</style>
