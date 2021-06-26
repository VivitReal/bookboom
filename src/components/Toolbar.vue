<template>
    <v-app-bar
        absolute
        color="#fcb69f"
        dark
        shrink-on-scroll
        src="https://picsum.photos/1920/1080?random"
        scroll-target="#scrolling-techniques-2"
    >
        <template v-slot:img="{ props }">
            <v-img
                v-bind="props"
                gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
            ></v-img>
        </template>

        <v-app-bar-title>Book Boom</v-app-bar-title>

    </v-app-bar>
</template>

<script>

export default {
    name: "Toolbar",
    data: () => {
        return {

        }
    }
}
</script>

<style>

</style>