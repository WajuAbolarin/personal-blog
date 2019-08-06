<template>
  <div>
    <section class="post-archive container" v-if="posts.length">
      <h1 class="h4 page-title text-center my-4">All Articles</h1>
      <div class="row">
        <div class="col col-xs-12 col-md-8 mx-auto py-2">
          <post-list :posts="posts" />
          <!-- <div class="col-xs-12 col-md-4 col py-3 mx-md-auto .offset-md-8">
            <a href="/" class="btn btn-outline-secondary btn-block">All Posts</a>
          </div>-->
        </div>
      </div>
      <hr />
    </section>
  </div>
</template>

<script>
import PostList from '~/components/ThePostList'

export default {
  layout: 'page',
  components: { PostList },
  asyncData(ctx) {
    return ctx.app
      .$api()
      .getPosts()
      .then(({ posts }) => {
        return { posts }
      })
  }
}
</script>

<style>
</style>
