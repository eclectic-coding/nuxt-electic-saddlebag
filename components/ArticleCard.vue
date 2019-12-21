<template>
  <div style="margin: 1em">
    <nuxt-link :to="'/posts/' + id">
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
        const postDate = new Date(this.post.published_at)
        return postDate.toDateString()
      },
      id() {
        return this.post.id
      },
      article() {
        return this.post.description
      }
    }
  }
</script>
