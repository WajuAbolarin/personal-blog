<template>
  <div>
    <section class="article-content container pt-2">
      <div class="row">
        <div class="col-xs-12 col-md-4">
          <aside class="col-xs-12 d-flex flex-column mb-5">
            <img
              :src="post.mainImage"
              class="img-fluid post-thumnail rounded mb-4 shadow"
              alt
            />
            <h1 class="page-title font-weight-bold mt-0 h2">{{post.title}}</h1>
            <small class="text-muted mb-2 font-italic mt-2">{{post.subtitle}}</small>
            <footer class="post-meta text-muted d-flex">
              <post-date :date="post.publishedAt" />
              <post-tags :tags="post.tags" />
            </footer>
          </aside>
          <!-- Related Post -->
          <div class="col-xs-12 d-none d-md-block mt-5 pt-5">
            <section class="post-archive">
              <h4 class="page-title mb-3 text-center">Related Articles</h4>
              <div class="row">
                <post-list
                  class="post-list col mx-auto"
                  :posts="post.relatedPosts"
                />
              </div>
              <div class="col-xs-12 py-3 mx-md-auto">
                <nuxt-link
                  to="/"
                  class="btn btn-outline-secondary btn-block"
                >All Posts</nuxt-link>
              </div>
            </section>
          </div>
        </div>
        <!-- Article -->
        <article class="col-xs-12 col-md-8 mt-2 mt-md-0">
          <div v-html="post.body"></div>
          <!-- <div
            class="col-md-12 py-5 mt-4 d-none d-md-flex justify-content-between"
          >
            <nuxt-link
              to="/"
              class="btn btn-outline-secondary btn-md"
            >&larr; Previous Post</nuxt-link>
            <nuxt-link
              to="/"
              class="btn btn-outline-secondary btn-md"
            >Next Post &rarr;</nuxt-link>
          </div>-->
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import hljs from 'highlight.js/lib/highlight'
import php from 'highlight.js/lib/languages/php'
import javascript from 'highlight.js/lib/languages/javascript'
import bash from 'highlight.js/lib/languages/bash'
import css from 'highlight.js/lib/languages/css'

import PostList from '~/components/ThePostList'
import PostDate from '~/components/PostDate'
import PostTags from '~/components/PostTags'

hljs.registerLanguage('php', php)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('css', css)

export default {
  components: { PostList, PostDate, PostTags },

  layout: 'page',

  mounted() {
    document
      .querySelectorAll('pre > code')
      .forEach(block => hljs.highlightBlock(block))
  },

  head(ctx) {
    return {
      title: `${this.post.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.subtitle
        },
        { name: 'twitter:title', content: this.post.title },
        { name: 'twitter:description', content: this.post.subtitle },
        { name: 'twitter:image', content: this.post.mainImage },
        { name: 'twitter:image:alt', content: this.post.title }
      ],
      link: [{ rel: 'stylesheet', href: '/css/hl.css' }]
    }
  },
  async asyncData(ctx) {
    return await ctx.app.$api().getPost(ctx.params.slug)
  }
}
</script>
