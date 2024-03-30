<template>
  <div>
    <page-header title="Discount groups">
      <template #actions>
        <v-btn color="primary" variant="flat" @click="goAdd">CREATE</v-btn>
      </template>
    </page-header>
    <v-skeleton-loader type="article" v-if="loading"></v-skeleton-loader>
    <v-card class="mx-auto mt-8 rounded-lg py-4" v-else>
      <div class="px-4">
        <v-text-field class="mb-2" label="" @keydown.enter.prevent="onSearch" v-model="keyword"
          placeholder="Search by customer tags" prepend-inner-icon="mdi-magnify" variant="outlined"></v-text-field>
      </div>

      <v-table density="compact">
        <thead>
          <tr>
            <th class="text-left">Discount title</th>
            <th class="text-left">Customer tag</th>
            <th class="text-left">Discount(%)</th>
            <th class="text-left">Applies to</th>
            <th class="text-left">Status</th>
            <th class="text-left" width="120px"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.title">
            <td>{{ item.title }}</td>
            <td>{{ item.customerTag }}</td>
            <td>{{ item.discount_value }}%</td>
            <td>{{ item.appliesTo }}</td>
            <td>
              <!-- <div class="text-center bg-green-200 rounded-full"></div> -->
              <v-chip color="green" v-if="item.enable">
                Enable
              </v-chip>
              <v-chip color="red" v-else>Disabled</v-chip>
            </td>
            <td>
              <div class="flex">
                <v-btn variant="text" color="primary" @click="goEdit(item.id)">
                  Edit
                </v-btn>
                <v-btn variant="text" @click="handleDelete(item.id)" color="error">
                  Delete
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
import { useRouter } from 'vue-router'
import PageHeader from '@/components/PageHeader/index.vue'
import { useDiscountStore } from '@/stores/discount'
const router = useRouter()
const loading = ref(false)
const goAdd = () => {
  router.push('/discount-groups/add')
}
const keyword = ref('')
const desserts = ref([])
const store = useDiscountStore()

const onSearch = () => {
  loading.value = true
  getDataList({ customerTag: keyword.value })
}
const getDataList = (params) => {
  store.getDiscountGroups(params).then((res) => {
    if (res?.success) {
      desserts.value = res.data
    }
  }).finally(() => {
    loading.value = false
  })
}
onMounted(() => {
  loading.value = true
  getDataList()
  // get discount group collection

})
const handleDelete = (id) => {
  store.deleteDiscountGroup(id).then((res) => {
    if (res.success) {
      desserts.value = desserts.value.filter((item) => item.id !== id)
    }
  })
}
const goEdit = (id) => {
  router.push({
    path: '/discount-groups/add',
    query: { id }
  })
}
</script>

<style lang="scss" scoped></style>
