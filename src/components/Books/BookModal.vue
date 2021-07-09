<template>
    <v-dialog
        v-if="showBook"
        v-model="showBook"
        persistent
        max-width="600px"
    >
        <v-card class="text-center">
            <v-card-title class="text-h5 grey lighten-2">
                {{ book.volumeInfo.title }}
            </v-card-title>

            <v-card-text class="mt-2">
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

                <p v-if="book.volumeInfo.authors">Author: {{ book.volumeInfo.authors.join(", ") }}</p>
                <p>{{ book.volumeInfo.description }}</p>
                Categories: 
                <v-chip
                    v-for="tag in book.volumeInfo.categories"
                    :key="tag"
                    class="ma-2"
                    color="orange"
                    outlined
                >
                    {{ tag }}
                </v-chip>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                
                <v-btn
                    color="green"
                    dark
                    :href="book.volumeInfo.infoLink"
                >
                    Read
                </v-btn>
                <v-btn
                    color="red"
                    plain
                    @click="clearBook()"
                >
                    Close
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>

export default {
    name: "BookModal",
    props: ['book'],
    data(){
        return {

        }
    },
    computed: {
        showBook: function() {
            if (Object.keys(this.book).length) return true
            else return false
        }
    },
    methods: {
        clearBook () {
            this.$emit('update:book', {})
        }
    }
}
</script>