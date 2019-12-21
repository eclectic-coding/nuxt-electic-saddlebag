<template>
  <main class="container">
    <SiteHeader />
    <section>
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
  import DevtoService from '@/services/DevtoService.js'
  import ArticleCard from '@/components/ArticleCard'
  import SiteHeader from '@/components/SiteHeader'

  export default {
    components: {
      ArticleCard,
      SiteHeader
    },
    head() {
      return {
        title: 'Post Listing'
      }
    },
    async asyncData({ error }) {
      try {
        const { data } = await DevtoService.getArticles()
        return {
          posts: data
        }
      } catch (e) {
        error({
          statusCode: 503,
          message: 'Unable to fetch events events at this time'
        })
      }
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
    margin: 1em;
  }
</style>
