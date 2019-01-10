<template>
    <li class="d-block post mx-auto card post-card mb-5 w-100">
        <div class="card-body">
            <nuxt-link
              :to="`/${post.slug}`"
              class="post-title p d-block mb-3">
                {{post.title}}
            </nuxt-link>
            <footer class="post-meta text-muted d-flex">
              <post-date :date="post.publishedAt"/>
              <post-tags :tags="post.tags"/>
            </footer>
        </div>
    </li>
</template>

<script>
import PostTags from '~/components/PostTags'
import PostDate from '~/components/PostDate'

export default {
  components: {PostTags, PostDate},
  props: ['post'],

  computed: {
    tags(){
      return this.post.tags
    }
  },
}
</script>

<style>

</style>
