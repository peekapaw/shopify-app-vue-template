<template>
  <div>
    <page-header title="Create discount groups">
    </page-header>
    <div class="flex">
      <div class="main flex-1 mr-8">
        <v-card title="Title" class="pb-4">
          <div class="px-4">
            <v-text-field label="Discount Group Title" variant="outlined" density="compact"
              v-model="form.title"></v-text-field>
          </div>
        </v-card>
        <v-card class="mt-4 pb-4" title="Customer Tag">
          <div class="px-4">
            <v-text-field label="" placeholder="e.g. VIP, Gold, Silver, bronze" variant="outlined" density="compact"
              hint="Customer tag is case-insensitive" v-model="form.customerTag"></v-text-field>
            <v-alert type="info" variant="outlined">
              Discounts will only be shown to the customers with this tag when they login.
            </v-alert>
          </div>
        </v-card>
        <v-card class="mt-4 pb-4" title="Applies to">
          <div class="px-4">
            <v-radio-group hide-details v-model="form.appliesTo">
              <v-radio label="All products" value="All"></v-radio>
              <v-radio label="Specific collections" value="two"></v-radio>
              <v-radio label="Specific products" value="three"></v-radio>
            </v-radio-group>
          </div>
        </v-card>
        <v-card class="mt-4 pb-4" title="Minimum requirements">
          <div class="px-4">
            <v-checkbox v-model="form.minRequirements" label="Minimum purchase amount (¥)" value="amount"
              density="compact" hide-details></v-checkbox>
            <v-checkbox density="compact" v-model="form.minRequirements" label="Minimum order quantity" hide-details
              value="order"></v-checkbox>
          </div>
        </v-card>
        <v-card class="mt-4 pb-4" title="Shipping rate">
          <div class="px-4">
            <v-radio-group hide-details v-model="form.shippingRate">
              <v-radio label="Store default" value="default"></v-radio>
              <v-radio label="Flat rate" value="flat"></v-radio>
            </v-radio-group>
            <v-alert type="info" variant="outlined">
              Choose flat rate if you'd like to set more advanced shipping rules. Learn more about
              advanced shipping rules.
            </v-alert>
          </div>
        </v-card>
      </div>
      <div class="sider flex-none w-1/3">
        <v-card title="Status">
          <div class="px-4">
            <v-switch
          v-model="form.enable"
          color="primary"
          :label="statusLabel"
        ></v-switch>
            
          </div>
        </v-card>
      </div>
    </div>
    <div class="flex justify-between mt-8 border-t border-solid border-gray-300 pt-4">
      <div class="flex-none mr-4">
        <v-btn variant="outlined" @click="$router.go(-1)"> Discard </v-btn>
      </div>
      <div class="flex-none mr-4">
        <v-btn color="primary" @click="save">Save discount group</v-btn>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import { useDiscountStore } from '@/stores/discount'
import PageHeader from '@/components/PageHeader/index.vue'
import { computed } from 'vue';

const form = ref({
  title: '',
  customerTag: '',
  appliesTo: 'All',
  minRequirements: [],
  shippingRate: 'default',
  enable: true
})

const statusLabel = computed(() => {
  return form.value.enable ? 'Enabled' : 'Disabled'
})
const discountStore = useDiscountStore()
const save = () => {
  discountStore.createDiscountGroup(form.value).then((res) => {
    console.log('res---res', res)
  })
}
</script>

<style lang="scss" scoped></style>
