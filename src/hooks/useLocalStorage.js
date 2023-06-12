import { useState, useEffect } from 'react'
import getStorageItems from '../utils/getStorageItems'

export const useLocalStorage = (key, value) => {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return value
}
