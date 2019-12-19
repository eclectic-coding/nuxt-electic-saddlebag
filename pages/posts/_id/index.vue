<template>
  <div>
    <h2>Post ID: {{ this.$route.params.id }}</h2>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Post ID' + this.id,
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
    }
  }
</script>
