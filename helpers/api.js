import sanityClient from "@sanity/client";
import blocksToHTML from "@sanity/block-content-to-html";

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
} | order(publishedAt desc)`,
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
};

class Sanity {
  constructor(projectId, dataset) {
    this.projectId = projectId;
    this.dataset - dataset;

    this.client = sanityClient({
      projectId,
      dataset,
      useCdn: true
    });
  }

  async getPost(slug) {
    let [post] = await this.client.fetch(queries.post, { slug });
    const h = blocksToHTML.h;
    const serializers = {
      types: {
        code: props =>
          h(
            "pre",
            { className: props.node.language },
            h("code", props.node.code)
          )
      }
    };
    const body = blocksToHTML({
      blocks: post.body,
      projectId: this.projectId,
      dataset: this.dataset,
      serializers
    });

    post = Object.assign({}, post, { body });
    return { post };
  }

  getPosts() {
    return this.client.fetch(queries.allPosts).then(posts => {
      return { posts };
    });
  }

  async tagPosts(tag) {
    return await this.client.fetch(queries.tagPosts, { tag });
  }
}

export default Sanity;
