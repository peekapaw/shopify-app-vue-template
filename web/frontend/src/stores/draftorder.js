import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useAuthenticatedFetch } from '../helpers/useAuthenticatedFetch'

export const useDraftOrderStore = defineStore('draftOrderStore', () => {
  const fetch = useAuthenticatedFetch()


  const createDraftOrder = async () => {
    try {
      const response = await fetch('/api/draftorder/create')
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

  return { createDraftOrder }
})
