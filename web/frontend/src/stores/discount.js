import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useAuthenticatedFetch } from '../helpers/useAuthenticatedFetch'

export const useDiscountStore = defineStore('discountStore', () => {
  const fetch = useAuthenticatedFetch()


  const createDiscountGroup = async () => {
    try {
      const response = await fetch('/api/discount-groups/create')
      if (!response.ok) {
        throw new Error(`Failed to create products: ${response.status}`)
      }
      const data = await response.json()
      if (!data.success) {
        throw new Error(`Failed to create products: ${data.error}`)
      }
      return data
    } catch (error) {
      console.log(`Failed to create products: ${error.message}`)
    }
  }

  return { createDiscountGroup }
})
