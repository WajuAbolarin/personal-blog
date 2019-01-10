  <template>
   <section class="post-archive container py-4">
    <h1 class="text-center h4 page-title">Articles tagged <span class="tag-name d-inline-block px-1 font-italic">{{tagName}}</span></h1>
    <hr>
    <div class="row py-4">
      <div class="col col-xs-12 col-md-8 mx-auto py-2">
        <post-list :posts="posts" class="d-flex flex-column post-list px-2"/>
        <!-- <div class="col-xs-12 col-md-4 col py-3 mx-md-auto .offset-md-8">
            <nuxt-link to="/" class="btn btn-outline-secondary btn-block">
                More
            </nuxt-link>
        </div> -->
      </div>
    </div>
    <hr>
  </section>
</template>

<script>
import PostList from '~/components/ThePostList'
import {upperFirst} from '~/helpers/stringHelpers'

export default {
  components: {PostList},
  head(ctx){
    return {
      title: `Articles Tagged ${this.tag}`,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { name: 'twitter:title', content: `Articles Tagged ${this.tag}` },
        { name: 'twitter:description', content: this.description },
        { name: 'twitter:image', content: '/apple-icon-180x180.png' },
        { name: 'twitter:image:alt', content: `Articles Tagged ${this.tag}` }
      ]
    }
  },
  layout: 'page',
  computed:{
    tagName(){
      return upperFirst(this.$route.params.tag)
    },
  },
  async asyncData({params, app}){
    return app
      .$api()
      .tagPosts(upperFirst(params.tag))
      .then(([data]) => data)

  }
}
</script>

<style>

</style>
