'use client'
import Banner from '@/components/Banner'
import PopularProducts from '@/components/popularProduct/PopularProduct'
import RecommendedProducts from '@/components/recomendedProduct/RecommendedProduct'
import { useAppDispatch } from '@/redux/hooks/hooks'
import { useEffect } from 'react'

export default function Home() {
  // redux
  const dispatch = useAppDispatch()

  useEffect(() => {
    (async () => {
      // fetch data from json file
      const res = await fetch("/products.json")
      const data = await res.json()

      // store data in the redux store
      dispatch({ type: 'storeProduct', payload: data.Items })
    })()
  }, [])

  return (
    <>
      <Banner />
      <PopularProducts />
      <RecommendedProducts />
    </>
  )
}
