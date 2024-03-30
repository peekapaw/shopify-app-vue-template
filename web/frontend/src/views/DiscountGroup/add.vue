<template>
  <div>
    <page-header title="Create discount groups">
    </page-header>
    <v-form ref="refForm">
      <div class="flex">
        <div class="main flex-1 mr-8">
          <v-card title="Title" class="pb-4">
            <div class="px-4">
              <v-text-field :rules="titleRules" label="Discount Group Title" variant="outlined" density="compact"
                v-model="form.title"></v-text-field>
            </div>
          </v-card>
          <v-card class="mt-4 pb-4" title="Customer tag">
            <div class="px-4">
              <v-text-field label="" :rules="customerTagRules" placeholder="e.g. VIP" variant="outlined"
                density="compact" hint="Customer tag is case-insensitive" v-model="form.customerTag"></v-text-field>
              <v-alert type="info" variant="outlined">
                Discounts will only be shown to the customers with this tag when they login.
              </v-alert>
            </div>
          </v-card>
          <v-card class="mt-4 pb-4" title="Applies to">
            <div class="px-4">
              <v-radio-group hide-details v-model="form.appliesTo">
                <v-radio label="All products" value="entire_store"></v-radio>
                <v-radio label="Specific collections" value="collection"></v-radio>
                <v-radio label="Specific products" value="products"></v-radio>
              </v-radio-group>
              <div class="flex" v-if="form.appliesTo == 'collection' || form.appliesTo == 'products'">
                <div class="flex-1 mr-2">
                  <v-text-field placeholder="Search collection name" v-if="form.appliesTo == 'collection'"
                    variant="outlined" density="compact">
                  </v-text-field>
                  <v-text-field placeholder="Search products name" v-if="form.appliesTo == 'products'"
                    variant="outlined" density="compact"> </v-text-field>
                </div>
                <div class="flex-none">
                  <v-btn color="primary" class="ml-4" @click="dialogCollection = true">Browse</v-btn>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="mt-4 pb-4" title="Minimum requirements">
            <div class="px-4">
              <v-checkbox v-model="form.isMinAmountLimit" label="Minimum purchase amount ($)" density="compact"
                hide-details></v-checkbox>
              <v-text-field v-if="form.isMinAmountLimit" onblur="if(this.value <= 0) this.value = 0;"
                oninput="if(this.value <= 0) this.value = 0;" class="w-1/2" variant="outlined" density="compact"
                placeholder="Minimum purchase amount ($)" v-model="form.minPurchaseAmount" type="number"
                prefix="$"></v-text-field>
              <v-checkbox density="compact" v-model="form.isMinimumQuantityLimit" label="Minimum order quantity"
                hide-details></v-checkbox>
              <v-text-field v-if="form.isMinimumQuantityLimit" onblur="if(this.value <= 0) this.value = 0;"
                oninput="if(this.value <= 0) this.value = 0;" class="w-1/2" variant="outlined" density="compact"
                placeholder="Minimum order quantity" v-model="form.minOrderQuantity" type="number"
                suffix="pcs"></v-text-field>
            </div>
          </v-card>
          <v-card class="mt-4 pb-4" title="Shipping rate">
            <div class="px-4">
              <v-radio-group hide-details v-model="form.shippingRateType">
                <v-radio label="Store default" value="store"></v-radio>
                <v-radio label="Flat rate" value="flat"></v-radio>
              </v-radio-group>
              <v-text-field v-if="form.shippingRateType === 'flat'" onblur="if(this.value <= 0) this.value = 0;"
                oninput="if(this.value <= 0) this.value = 0;" class="w-1/2" variant="outlined" density="compact"
                placeholder="Minimum purchase amount ($)" v-model="form.flatRate" type="number"
                prefix="$"></v-text-field>
              <div class="border-t border-solid border-gray-300" v-if="form.shippingRateType === 'flat'">
                <div class="leading-8 py-4">Condition</div>
                <div class="flex">
                  <div class="flex-1 mr-2">
                    <v-select v-model="form.totalAmountCondition" variant="outlined" density="compact" label=""
                      :items="conditionList" item-title="title" item-value="value"></v-select>
                  </div>
                  <div class="flex-1"><v-text-field v-if="form.shippingRateType === 'flat'"
                      onblur="if(this.value <= 0) this.value = 0;" oninput="if(this.value <= 0) this.value = 0;"
                      class="w-1/2" variant="outlined" density="compact" placeholder="Minimum purchase amount ($)"
                      v-model="form.conditionTotalAmount" type="number" prefix="$"></v-text-field></div>
                </div>
                <div class="flex">
                  <div class="flex-1 mr-2"><v-select v-model="form.totalWeightCondition" variant="outlined"
                      density="compact" label="" :items="conditionList" item-title="title"
                      item-value="value"></v-select></div>
                  <div class="flex-1"><v-text-field v-if="form.shippingRateType === 'flat'"
                      onblur="if(this.value <= 0) this.value = 0;" oninput="if(this.value <= 0) this.value = 0;"
                      class="w-1/2" variant="outlined" density="compact" placeholder="Minimum purchase amount ($)"
                      v-model="form.conditionTotalWeight" type="number" prefix="$"></v-text-field></div>
                </div>
              </div>

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
              <v-switch v-model="form.enable" color="primary" :label="statusLabel"></v-switch>
            </div>
          </v-card>
        </div>
      </div>
    </v-form>
    <div class="flex justify-between mt-8 border-t border-solid border-gray-300 pt-4">
      <div class="flex-none mr-4">
        <v-btn variant="outlined" @click="$router.go(-1)"> Discard </v-btn>
      </div>
      <div class="flex-none mr-4">
        <v-btn color="primary" @click="onSave">SAVE</v-btn>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useDiscountStore } from '@/stores/discount'
import PageHeader from '@/components/PageHeader/index.vue'
import { computed } from 'vue';
import { useRoute } from 'vue-router'
const query = useRoute().query

const form = ref({
  title: '',
  customerTag: '',
  appliesTo: 'entire_store',
  flatRate: 0,
  enable: true,
  isMinAmountLimit: false,
  isMinimumQuantityLimit: false,
  minPurchaseAmount: 0,
  minOrderQuantity: 0,
  shippingRateType: 'store',
  totalAmountCondition: 'gt',
  totalWeightCondition: 'gt',
  conditionTotalAmount: 0,
  conditionTotalWeight: 0
})
const titleRules = [value => {
  if (value) return true
  return 'Title is required.'
}]
const customerTagRules = [value => {
  if (value) return true
  return 'Customer tag is required.'
}]
const conditionList = [{ title: 'greater than', value: 'gt' }, { title: 'less than', value: 'lt' }]

const statusLabel = computed(() => {
  return form.value.enable ? 'Enabled' : 'Disabled'
})
const discountStore = useDiscountStore()
const refForm = ref(null)

const onSave = () => {
  refForm.value.validate().then((res) => {
    const { valid } = res
    if (valid) {
      if (query.id) {
        discountStore.updateDiscountGroupById(form.value).then((res) => {
          console.log('res---res', res)
        })
      } else {

        discountStore.createDiscountGroup(form.value).then((res) => {
          console.log('res---res', res)
        })
      }
    }

  })

}

watchEffect(() => {
  if (query.id) {
    discountStore.getDiscountGroupById(query.id).then((res) => {
      if (res.success) {
        form.value = res.data
      }

    })
  }
})
</script>

<style lang="scss" scoped></style>
