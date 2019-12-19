<template>
  <div style="margin: 1em">
    <nuxt-link :to="'/posts/' + slug">
      <h3>{{ post.title }}</h3>
    </nuxt-link>
    <small style="margin-bottom: 0.5em">{{ parsedDate }}</small>
    <p style="margin: 0.5em 0 1em 0">{{ post.description }}</p>
    <small>PostID: {{ post.id }}</small>
  </div>
</template>

<script>
  export default {
    name: 'ArticleCard',
    props: {
      // eslint-disable-next-line vue/require-default-prop
      post: Object
    },
    computed: {
      parsedDate() {
        const postDate = new Date(this.post.created_at)
        return postDate.toDateString()
      },
      slug() {
        return this.post.slug
      }
    }
  }
</script>
