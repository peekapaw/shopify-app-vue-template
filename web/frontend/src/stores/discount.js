
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
  const getDiscountGroups = async (params) => {
    try {
      const queryString = new URLSearchParams(params).toString()
      const response = await fetch(`/api/discount-groups/list?${queryString}`)
      if (!response.ok) {
        throw new Error(`Failed to fetch discount groups: ${response.status}`)
      }
      const data = await response.json()
      return data
    } catch (error) {
      console.log(`Failed to fetch discount groups: ${error.message}`)
    }
  }

  const getDiscountGroupById = async (id) => {
    try {
      const response = await fetch(`/api/discount-groups/detail/${id}`)
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
    try {
      const response = await fetch(`/api/discount-groups/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      })
      const data = await response.json()
      return data
    } catch (error) {
      console.log(`Failed to update discount groups: ${error.message}`)
    }
  }
  const deleteDiscountGroup = async (id) => {
    try {
      const response = await fetch('/api/discount-groups/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      })
      const data = await response.json()
      return data
    } catch (error) {
      console.log(`Failed to delete discount groups: ${error.message}`)
    }
  }
  const getCollectionList = async () => {
    try {
      const response = await fetch(`/api/discount-groups/collection`)
      if (!response.ok) {
        throw new Error(`Failed to fetch collection: ${response.status}`)
      }
      const data = await response.json()
      return data
    } catch (error) {
      console.log(`Failed to fetch collection: ${error.message}`)
    }

  }

  return { createDiscountGroup, getDiscountGroups, updateDiscountGroupById, deleteDiscountGroup, getDiscountGroupById, getCollectionList }
})
