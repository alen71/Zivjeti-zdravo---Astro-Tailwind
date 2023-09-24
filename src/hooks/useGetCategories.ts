import { getCategories } from '@/lib/categories'
import React, { useCallback, useEffect, useState } from 'react'

const useGetCategories = () => {
  const [categories, setCategories] = useState<ICategory[]>([])

  const getAllCategories = useCallback(async () => {
    const categories = await getCategories(
      'https://wp.zivjetizdravo.com/wp-json/wp/v2/categories?parent=0'
    )

    if (categories) setCategories(categories)
  }, [])

  useEffect(() => {
    getAllCategories()
  }, [])

  return categories
}

export default useGetCategories
