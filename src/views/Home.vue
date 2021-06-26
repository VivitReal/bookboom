<template>
    <div class="text-center">
        <v-row justify="center">
            <v-col cols="4">
                <v-text-field
                    flat
                    clearable
                    label="Search book"
                    prepend-inner-icon="mdi-magnify"
                    solo-inverted
                    v-model="keyword"
                    @input="search"
                ></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-row>
                    <v-col>
                        <v-select
                            style="width:130px"
                            background-color="rgba(128,208,199,.8)"
                            v-model="orderBy"
                            :items="orderByList"
                            label="Order by"
                            solo-inverted
                            @input="search"
                        ></v-select>
                    </v-col>
                    <v-col>
                        <v-text-field
                            style="width:115px"
                            background-color="rgba(128,208,199,.8)"
                            clearable
                            label="Max count"
                            solo-inverted
                            v-model="maxResults"
                            @input="search"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <BookList />
    </div>
</template>

<script>
import BookList from "../components/Books/Index.vue"
import {mapActions} from "vuex";

export default {
    name: "Home",
    data: () => {
        return {
            loadState: "success",
            books: [],
            keyword: "",
            orderBy: undefined,
            orderByList: ["relevance", "newest"],
            maxResults: 12
        }
    },
    methods: {
        search() {
            this.loadState = 'loading'
            if (this.orderBy == undefined) this.orderBy = "relevance"
            let request = { 
                keyword: this.keyword, 
                orderBy: this.orderBy, 
                maxResults: this.maxResults
            }
            this.axiosGetBooks(request)
        },

        ...mapActions(['axiosGetBooks']),
    },
    components: {
        BookList
    }
}
</script>

<style>

</style>