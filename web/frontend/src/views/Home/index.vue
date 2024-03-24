<template>
  <div class="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto mt-4">
    <v-card class="mx-auto" color="indigo" prepend-icon="mdi-information">
      <template v-slot:title> Welcome! </template>
      <v-card-text>
        {{ bannerText }}
      </v-card-text>
    </v-card>
    <v-card class="mt-4">
      <v-row no-gutters>
        <v-col sm="12" md="6" lg="4" xl="4">
          <v-sheet class="ma-2 pa-2">
            <EntranceCard title="Discount roups">
              <template #icon>
                <v-icon size="36">mdi-account-multiple</v-icon>
              </template>

              Customer groups to offer wholesale prices & discounts.</EntranceCard
            ></v-sheet
          >
        </v-col>
        <v-col sm="12" md="6" lg="4" xl="4">
          <v-sheet class="ma-2 pa-2">
            <EntranceCard title="Percentage discounts">
              <template #icon>
                <v-icon size="36">mdi-label-percent-outline</v-icon>
              </template>

              Offer percentage discounts specific to a customer tag.</EntranceCard
            ></v-sheet
          >
        </v-col>
        <v-col sm="12" md="6" lg="4" xl="4">
          <v-sheet class="ma-2 pa-2">
            <EntranceCard title="Individaual variant prices">
              <template #icon>
                <v-icon size="36">mdi-tag-multiple-outline</v-icon>
              </template>

              Offer specific prices like $16.28 or $72 for any customer.</EntranceCard
            ></v-sheet
          >
        </v-col>
        <v-col sm="12" md="6" lg="4" xl="4">
          <v-sheet class="ma-2 pa-2">
            <EntranceCard title="Individaual variant prices">
              <template #icon>
                <v-icon size="36">mdi-tag-multiple-outline</v-icon>
              </template>

              Offer specific prices like $16.28 or $72 for any customer.</EntranceCard
            ></v-sheet
          >
        </v-col>
        <v-col sm="12" md="6" lg="4" xl="4">
          <v-sheet class="ma-2 pa-2">
            <EntranceCard title="Individaual variant prices">
              <template #icon>
                <v-icon size="36">mdi-tag-multiple-outline</v-icon>
              </template>

              Offer specific prices like $16.28 or $72 for any customer.</EntranceCard
            ></v-sheet
          >
        </v-col>
        <v-col sm="12" md="6" lg="4" xl="4">
          <v-sheet class="ma-2 pa-2">
            <EntranceCard title="Individaual variant prices">
              <template #icon>
                <v-icon size="36">mdi-tag-multiple-outline</v-icon>
              </template>

              Offer specific prices like $16.28 or $72 for any customer.</EntranceCard
            ></v-sheet
          >
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script setup>
import EntranceCard from '@/components/EntranceCard/index.vue'
const bannerText =
  'As our teammates celebrate the color festival, support may be slightly slower than usual. We appreciate your understanding and are grateful for your continued support. Happy Holi!'
</script>

<style lang="scss" scoped></style>
