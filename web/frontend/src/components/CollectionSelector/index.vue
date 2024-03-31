<template>
  <v-dialog v-model="show" max-width="600">
    <v-card title="Add collections">
      <v-card-text>hello world</v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { computed, onMounted, getCurrentInstance } from 'vue'
import { useDiscountStore } from '@/stores/discount';
const vm = getCurrentInstance().proxy
const store = useDiscountStore()
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:visible'])
const show = computed({
  get() {
    return props.visible
  },
  set(val) {
    emit('update:visible', val)
  }
})
onMounted(async () => {
  console.log('%c 🍼️ getCollectionList: ', 'font-size:12px;background-color: #E41A6A;color:#fff;', store.getCollectionList);
  console.log('%c 🥓 vm: ', 'font-size:12px;background-color: #B03734;color:#fff;', vm);
  store.getCollectionList().then((res)=>{
    console.log('%c 🍝 res: ', 'font-size:12px;background-color: #EA7E5C;color:#fff;', res);

  })
})
</script>

<style lang="scss" scoped></style>
