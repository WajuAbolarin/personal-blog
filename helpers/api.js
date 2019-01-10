require('dotenv').config()
import sanityClient from '@sanity/client'
import blocksToHTML from "@sanity/block-content-to-html"

const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATA_SET,
  useCdn: true
});

const queries = {
  post: `*[_type == "post" && slug.current == $slug]{
        title,
        subtitle,
        body,
        'slug': slug.current,
        'tags': tags[]->title,
        publishedAt,
        'mainImage':mainImage.asset->url,
        'relatedPosts': *[
          _type == 'post'
          &&  references(^.tags[]->._id)
          && _id != ^._id
        ]{
        title,
        'slug': slug.current,
        'tags': tags[]->title,
        publishedAt
      }
      }`,

  allPosts: `*[_type == "post"]{
      title,
      subtitle,
      'slug': slug.current,
      'tags': tags[]->title,
      publishedAt,
      'mainImage':mainImage.asset->url
} | order(publishedAt desc)`
,
  tagPosts: `*[_type == 'tag' && title == $tag]{
      'tag':title,
      description,
      'posts': *[_type == 'post' && references(^._id)]{
        title,
        subtitle,
        'slug': slug.current,
        'tags': tags[]->title,
        publishedAt,
      }
    }`
}

class Sanity{
  constructor(){
    this.client = sanityClient({
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: process.env.SANITY_DATA_SET,
      useCdn: true
    });
  }

  async getPost(slug){

    let [post] = await this.client.fetch(queries.post, { slug });
    const h = blocksToHTML.h
    const serializers = {
      types: {
        code: props => (
          h('pre', { className: props.node.language },
            h('code', props.node.code)
          )
        )
      }
    }
    const body = blocksToHTML({
      blocks: post.body,
      projectId: "11y83f9z",
      dataset: "production",
      serializers
    })

    post = Object.assign({}, post, { body })
  return {post} ;
  }

   getPosts(){
    return this.client
      .fetch(queries.allPosts)
      .then( posts => {
        return {posts}
      })
  }

  async tagPosts(tag){
    return await this.client.fetch(queries.tagPosts, { tag })
  }

}

export default Sanity



