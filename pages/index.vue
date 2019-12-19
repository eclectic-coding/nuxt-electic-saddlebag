<template>
  <main class="container">
    <section>
      <h1>
        Eclectic Saddlebag
      </h1>
    </section>
    <section>
      <div style="padding: 1em 0">
        Blog Feed from Dev.to
      </div>
      <ArticleCard
        v-for="(post, index) in posts"
        :key="index"
        :post="post"
        :data-index="index"
      />
    </section>
    <button class="btn button--green">Hello</button>
  </main>
</template>

<script>
  import ArticleCard from '@/components/ArticleCard'

  export default {
    components: { ArticleCard },
    head() {
      return {
        title: 'Post Listing'
      }
    },
    asyncData({ $axios, error }) {
      return $axios
        .get('https://dev.to/api/articles?username=eclecticcoding')
        .then((response) => {
          return {
            posts: response.data
          }
        })
        .catch((e) => {
          error({
            statusCode: 503,
            message: 'Unable to fetch events at this time. Please try again.'
          })
        })
    }
  }
</script>

<style scoped>
  .container {
    margin: 0 auto;
    width: 60vw;
  }

  ul li {
    list-style-type: none;
  }

  h1,
  h3 {
    margin: 1em 0;
  }
</style>
