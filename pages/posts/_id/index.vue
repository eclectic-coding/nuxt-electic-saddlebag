<template>
  <div>
    <h2>{{ post.title }}</h2>
    <small>date | {{ post.tag_list }}</small>
    <p>{{ post.body_markdown }}</p>
  </div>
</template>

<script>
  import DevtoService from '../../../services/DevtoService'

  export default {
    head() {
      return {
        title: 'Post ID: ' + this.$route.params.id,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'What you need to now about ' + this.title
          }
        ]
      }
    },
    computed: {
      id() {
        return this.$route.params.id
      },
      title() {
        return this.$route.params.title
      }
    },
    async asyncData({ $axios, params, error }) {
      try {
        const { data } = await DevtoService.getArticle(params.id)
        return {
          post: data
        }
      } catch (e) {
        error({
          statusCode: 503,
          message: 'Unable to fetch events at this time. Please try again.'
        })
      }
    }
  }
</script>
