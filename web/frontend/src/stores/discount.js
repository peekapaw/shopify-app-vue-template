
import { defineStore } from 'pinia'
import { useAuthenticatedFetch } from '../helpers/useAuthenticatedFetch'

export const useDiscountStore = defineStore('discountStore', () => {
  const fetch = useAuthenticatedFetch()
  const createDiscountGroup = async (payload) => {
    try {
      const response = await fetch('/api/discount-groups/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      const data = await response.json()
      return data
    } catch (error) {
      console.log(`Failed to create discount groups: ${error.message}`)
    }
  }
  // 获取集合
  const getDiscountGroups = async () => {
    try {
      const response = await fetch('/api/discount-groups/list')
      if (!response.ok) {
        throw new Error(`Failed to fetch discount groups: ${response.status}`)
      }
      const data = await response.json()
      return data
    } catch (error) {
      console.log(`Failed to fetch discount groups: ${error.message}`)
    }
  }

  // update collection
  const updateDiscountGroupById = async (params) => {
    const payload = Object.fromEntries(params)
    delete payload.id
    try {
      const response = await fetch(`/api/discount-groups/update/${params.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      const data = await response.json()
      return data
    } catch (error) {
      console.log(`Failed to update discount groups: ${error.message}`)
    }


  }

  return { createDiscountGroup, getDiscountGroups, updateDiscountGroupById }
})
