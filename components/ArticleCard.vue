<template>
  <div style="margin: 1em">
    <h3>{{ post.title }}</h3>
    <small style="margin-bottom: 0.5em">{{ parsedDate }}</small>
    <p style="margin: 0.5em 0 1em 0">{{ post.description }}</p>
    <small>PostID: {{ post.id }}</small>
  </div>
</template>

<script>
  export default {
    name: 'ArticleCard',
    props: {
      post: Object
    },
    computed: {
      parsedDate() {
        const postDate = new Date(this.post.created_at)
        return postDate.toDateString()
      }
    }
  }
</script>

<style scoped></style>
