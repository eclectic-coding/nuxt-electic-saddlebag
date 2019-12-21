import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://dev.to/api/articles`,
  headers: {
    // 'api-key': process.env.DEVTO_API_KEY,
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getArticles() {
    return apiClient.get('/?username=eclecticcoding')
  },
  getArticle(id) {
    return apiClient.get('/' + id)
  }
}
