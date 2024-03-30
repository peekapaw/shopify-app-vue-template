<template>
  <div>
    <div class="flex justify-between">
      <div class="flex-none mr-4">
        <v-btn class="transform-none" color="primary" variant="outlined"
          @click="$router.go(-1)"><v-icon>mdi-arrow-left</v-icon></v-btn>
      </div>
      <div class="text-left flex-1 leading-8">Percentage discounts</div>
    </div>
    <v-skeleton-loader type="article" v-if="loading" class="mt-8"></v-skeleton-loader>
    <v-card class="mx-auto mt-8 rounded-lg py-4" v-else>
      <div class="px-4">
        <v-text-field class="mb-2" label="" v-model="keyword" placeholder="Search by customer tags"
          prepend-inner-icon="mdi-magnify" variant="outlined"></v-text-field>
      </div>

      <v-table density="compact">
        <thead>
          <tr>
            <th class="text-left">Discount group</th>
            <th class="text-left">Customer tag</th>
            <th class="text-left">Applies to</th>
            <th class="text-left">Discount percentage</th>
            <th class="text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item, index in desserts" :key="item.title">
            <td>{{ item.title }}</td>
            <td>{{ item.customerTag }}</td>
            <td>{{ item.appliesTo }}</td>
            <td class="pt-2"><v-text-field max-length="3" variant="outlined" density="compact" label=""
                v-model.number="form.discount_value[index]" type="number" suffix="%"
                @update:focused="onfocus(item._id)"></v-text-field>
            </td>
            <td>
              <div v-if="activeId == item._id" class="flex">
                <v-btn variant="tonal" color="primary" class="mr-2" @click="onSavePercentage(item.id, index)">
                  Save
                </v-btn>
                <v-btn variant="outlined" @click="activeId = null">
                  Cancel
                </v-btn>
              </div>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useDiscountStore } from '@/stores/discount'

const keyword = ref('')
const store = useDiscountStore()
const loading = ref(false)
onMounted(() => {
  loading.value = true
  // get discount group collection
  store.getDiscountGroups().then((res) => {
    if (res.success) {
      desserts.value = res.data
      // 根据discount_value，给form赋值
      res.data.forEach((item) => {
        form.value.discount_value.push(item.discount_value || 0)
      })
    }
  }).finally(() => {
    loading.value = false
  })
})
const form = ref({ discount_value: [] })
const desserts = ref([])
const activeId = ref(null)
const onfocus = (id) => {
  activeId.value = id
}
const onSavePercentage = (id, index) => {
  store.updateDiscountGroupById({ id, discount_value: form.value.discount_value[index] }).then((res) => {
    console.log(res)
  })
}
</script>

<style lang="scss" scoped></style>
