import Banner from '@/components/Banner'
import PopularProducts from '@/components/popularProduct/PopularProduct'
import RecommendedProducts from '@/components/recomendedProduct/RecommendedProduct'

export default function Home() {
  return (
    <>
      <Banner />
      <PopularProducts />
      <RecommendedProducts />
    </>
  )
}
