<template>
    <div>
        <v-row v-if="bookList">
            <v-col
                v-for="book in bookList"
                :key="book.id"
                cols="12"
                md="4"
            >
                <v-card min-height="300px" @click="displayBook(book)">
                    <div v-if="book.volumeInfo.imageLinks">
                        <img :src="book.volumeInfo.imageLinks.thumbnail" :alt="book.volumeInfo.title">
                    </div>
                    <div v-else>
                        <img
                            src="https://islandpress.org/sites/default/files/400px%20x%20600px-r01BookNotPictured.jpg"
                            :alt="book.volumeInfo.title"
                            width="128"
                        >
                    </div>

                    <h4>{{ book.volumeInfo.title }}</h4>
                    <p v-if="book.volumeInfo.authors">Author: {{ book.volumeInfo.authors.length == 1 ? book.volumeInfo.authors[0] : book.volumeInfo.authors.join(", ") }}</p>
                </v-card>
            </v-col>

            <BookModal :book.sync="bookInfo" />
            
        </v-row>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import BookModal from './BookModal.vue'

export default {
    name: "BookList",
    components: { BookModal },
    data(){
        return {
            bookInfo: {}
        }
    },
    computed: {
        ...mapState({
            bookList: state => {
                return state.books.items
            }
        })
    },
    methods: {
        displayBook(book) {
            this.bookInfo = book
        }
    }
}
</script>

<style>

</style>