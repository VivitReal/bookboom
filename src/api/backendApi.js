import axios from 'axios'

const http = axios.create({
    baseURL: process.env.VUE_APP_BACKEND
})

export default {
    // APIs to the backend server
    getBooks: (params) => http.get(`/books/v1/volumes?q=intitle:${params.keyword}&orderBy=${params.orderBy}&maxResults=${params.maxResults}`)
}
