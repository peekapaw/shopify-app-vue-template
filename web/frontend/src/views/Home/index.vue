<template>
  <div>
    <v-card class="mx-auto" color="indigo" prepend-icon="mdi-information">
      <template v-slot:title> Welcome! </template>
      <v-card-text>
        {{ bannerText }}
      </v-card-text>
    </v-card>
    <v-card class="mt-4">
      <v-row no-gutters>
        <v-col sm="6" md="12" lg="4" xl="4">
          <v-sheet class="ma-2 pa-2">
            <EntranceCard title="Discount roups" @click="onEnterance('/discount-groups')">
              <template #icon>
                <v-icon size="36">mdi-account-multiple</v-icon>
              </template>

              Customer groups to offer wholesale prices & discounts.</EntranceCard
            ></v-sheet
          >
        </v-col>
        <v-col sm="6" md="12" lg="4" xl="4">
          <v-sheet class="ma-2 pa-2">
            <EntranceCard title="Percentage discounts" @click="onEnterance('/percentage')">
              <template #icon>
                <v-icon size="36">mdi-label-percent-outline</v-icon>
              </template>

              Offer percentage discounts specific to a customer tag.</EntranceCard
            ></v-sheet
          >
        </v-col>
        <v-col sm="6" md="12" lg="4" xl="4">
          <v-sheet class="ma-2 pa-2">
            <EntranceCard title="Individaual variant prices" @click="onEnterance('/individual-variant')">
              <template #icon>
                <v-icon size="36">mdi-tag-multiple-outline</v-icon>
              </template>

              Offer specific prices like $16.28 or $72 for any customer.</EntranceCard
            ></v-sheet
          >
        </v-col>
        <v-col sm="6" md="12" lg="4" xl="4">
          <v-sheet class="ma-2 pa-2">
            <EntranceCard title="Volume discounts" @click="onEnterance('/volume-discount')">
              <template #icon>
                <v-icon size="36">mdi-cart-percent</v-icon>
              </template>

              Offer volume/tier-based discounts fro bulk purchases.</EntranceCard
            ></v-sheet
          >
        </v-col>
        <v-col sm="6" md="12" lg="4" xl="4">
          <v-sheet class="ma-2 pa-2">
            <EntranceCard title="Manual orders">
              <template #icon>
                <v-icon size="36">mdi-brightness-percent</v-icon>
              </template>

              Place orders & add discounts on behalf of your customers.</EntranceCard
            ></v-sheet
          >
        </v-col>
        <v-col sm="6" md="12" lg="4" xl="4">
          <v-sheet class="ma-2 pa-2">
            <EntranceCard title="Advanced shipping">
              <template #icon>
                <v-icon size="36">mdi-truck-cargo-container</v-icon>
              </template>

              Offer advanced shipping rates for your customers.</EntranceCard
            ></v-sheet
          >
        </v-col>
        <v-col sm="6" md="12" lg="4" xl="4">
          <v-sheet class="ma-2 pa-2">
            <EntranceCard title="Wholesale discount codes">
              <template #icon>
                <v-icon size="36">mdi-ticket-percent-outline</v-icon>
              </template>

              Create discount codes for your wholesale customers.</EntranceCard
            ></v-sheet
          >
        </v-col>
        <v-col sm="6" md="12" lg="4" xl="4">
          <v-sheet class="ma-2 pa-2">
            <EntranceCard title="Wholesale signup form">
              <template #icon>
                <v-icon size="36">mdi-account-edit</v-icon>
              </template>

              Easily onboard your wholesale customers.</EntranceCard
            ></v-sheet
          >
        </v-col>
        <v-col sm="6" md="12" lg="4" xl="4">
          <v-sheet class="ma-2 pa-2">
            <EntranceCard title="Next terms">
              <template #icon>
                <v-icon size="36">mdi-calendar-multiple-check</v-icon>
              </template>

              Offer payment terms such as 30 days, 60 days, 90 days.</EntranceCard
            ></v-sheet
          >
        </v-col>
        <v-col sm="6" md="12" lg="4" xl="4">
          <v-sheet class="ma-2 pa-2">
            <EntranceCard title="Subscription plans">
              <template #icon>
                <v-icon size="36">mdi-credit-card-marker-outline</v-icon>
              </template>

              Select the right plan to scale your wholesale business.</EntranceCard
            ></v-sheet
          >
        </v-col>
        <v-col sm="6" md="12" lg="4" xl="4">
          <v-sheet class="ma-2 pa-2">
            <EntranceCard title="Settings">
              <template #icon>
                <v-icon size="36">mdi-cog-outline</v-icon>
              </template>

              Manage how the app should work form your store.</EntranceCard
            ></v-sheet
          >
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script setup>
import EntranceCard from '@/components/EntranceCard/index.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const bannerText =
  'As our teammates celebrate the color festival, support may be slightly slower than usual. We appreciate your understanding and are grateful for your continued support. Happy Holi!'
const onEnterance = (path) => {
  router.push(path)
  console.log('onEnterance', path)
}
</script>

<style lang="scss" scoped></style>
