<template>
    <v-app>
        <v-card class="overflow-hidden">
            <Toolbar />

            <v-sheet
                id="scrolling-techniques-2"
                class="overflow-y-auto"
                height="100vh"
            >
                <v-container style="margin-top: 150px">
                    <router-view/>
                </v-container>
            </v-sheet>
        </v-card>
    </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar.vue"

export default {
    name: 'App',
    components: {
        Toolbar
    },
    data: () => ({
        //
    }),
};
</script>
