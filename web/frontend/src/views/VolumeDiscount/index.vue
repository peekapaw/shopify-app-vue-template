<template>
    <div>
      <div class="flex justify-between">
        <div class="flex-none mr-4">
          <v-btn class="transform-none" color="primary" variant="outlined" @click="$router.go(-1)"
            ><v-icon>mdi-arrow-left</v-icon></v-btn
          >
        </div>
        <div class="text-left flex-1 leading-8">Discount Groups</div>
        <div class="flex-none">
          <v-btn color="primary" variant="flat">Create discount group</v-btn>
        </div>
      </div>
      <v-card class="mx-auto mt-8 rounded-lg py-4">
        <div class="px-4">
          <v-text-field
            class="mb-2"
            label=""
            v-model="keyword"
            placeholder="Search by customer tags"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
          ></v-text-field>
        </div>
  
        <v-table density="compact">
          <thead>
            <tr>
              <th class="text-left">Discount title</th>
              <th class="text-left">Customer tag</th>
              <th class="text-left">Discount(%)</th>
              <th class="text-left">Applies to</th>
              <th class="text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.title">
              <td>{{ item.title }}</td>
              <td>{{ item.customer_tag }}</td>
              <td>{{ item.Discount }}</td>
              <td>{{ item.Applies_to }}</td>
              <td>
                <div class="text-center bg-green-200 rounded-full">{{ item.Status }}</div>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const keyword = ref('')
  const desserts = [
    {
      title: 'Group A',
      customer_tag: 'Tag 1',
      Discount: 10,
      Applies_to: 'All products',
      Status: 'Active'
    },
    {
      title: 'Group B',
      customer_tag: 'Tag 2',
      Discount: 15,
      Applies_to: 'Selected products',
      Status: 'Active'
    },
    {
      title: 'Group C',
      customer_tag: 'Tag 3',
      Discount: 20,
      Applies_to: 'All products',
      Status: 'Active'
    },
    {
      title: 'Group D',
      customer_tag: 'Tag 4',
      Discount: 25,
      Applies_to: 'Selected products',
      Status: 'Active'
    },
    {
      title: 'Group E',
      customer_tag: 'Tag 5',
      Discount: 30,
      Applies_to: 'All products',
      Status: 'Active'
    },
    {
      title: 'Group F',
      customer_tag: 'Tag 6',
      Discount: 35,
      Applies_to: 'Selected products',
      Status: 'Active'
    },
    {
      title: 'Group G',
      customer_tag: 'Tag 7',
      Discount: 40,
      Applies_to: 'All products',
      Status: 'Active'
    },
    {
      title: 'Group H',
      customer_tag: 'Tag 8',
      Discount: 45,
      Applies_to: 'Selected products',
      Status: 'Active'
    },
    {
      title: 'Group I',
      customer_tag: 'Tag 9',
      Discount: 50,
      Applies_to: 'All products',
      Status: 'Active'
    },
    {
      title: 'Group J',
      customer_tag: 'Tag 10',
      Discount: 55,
      Applies_to: 'Selected products',
      Status: 'Active'
    }
  ]
  </script>
  
  <style lang="scss" scoped></style>
  