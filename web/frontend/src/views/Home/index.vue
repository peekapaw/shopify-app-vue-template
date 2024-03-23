<template>
    <div class="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto mt-4">

        <v-card class="mx-auto" color="indigo" prepend-icon="mdi-information">

            <template v-slot:title>
                Welcome!
            </template>
            <v-card-text>
                {{ bannerText }}
            </v-card-text>
        </v-card>
        <v-card class="mt-4">
            <v-card-text>hellovbtn</v-card-text>
        </v-card>
        

    </div>
</template>

<script setup>
const bannerText = 'As our teammates celebrate the color festival, support may be slightly slower than usual. We appreciate your understanding and are grateful for your continued support. Happy Holi!'
</script>

<style lang="scss" scoped></style>