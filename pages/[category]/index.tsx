import { withLayoutMain } from "../../layouts/LayoutMain/LayoutMain"
import Head from "next/head"
import { withCSR } from "../../HOC/with-CSR"
import { dehydrate, QueryClient, useQuery, useQueryClient } from "react-query"
import { config } from "../../lib/react-query-config"
import { fetchProductsByCategory } from "../../api/products"
import Error from "../../components/Error/Error"
import { NextRouter, useRouter } from "next/router"
import { useProductsQuery } from "../../hooks/api/products"
import ProductsList from "../../components/ProductsList/ProductsList"

export const getServerSideProps = withCSR(async ctx => {
  // console.log('CategoryPage getServerSideProps => ctx =>', ctx)

  const category: string = ctx.params.category
  // console.log('category via ctx.params', category)

  let isError: boolean = false
  const queryClient = new QueryClient(config)

  try {
    //Здесь будет prefetchQuery по категории,
    //чтобы потом в глубине компонентов использовать useQuery по КЛЮЧУ категории
    //Если в RQDevTools нет запроса, значит где то ошибка, которую тяжело найти на SSR
    await queryClient.fetchQuery({
      queryKey: [category],
      queryFn: () => fetchProductsByCategory(category),
      // only prefetch if older than 10 seconds
      staleTime: 10 * 1000
    })
  } catch (axiosErrorMessage) {
    //Желтый цвет
    console.error(
      "\x1b[43m%s\x1b[0m",
      "Catch SSR CategoryPage => " + axiosErrorMessage
    )
    isError = true

    //Это понадобится для простой стр 404
    // ctx.res.statusCode = result
  }

  return {
    props: {
      isError,
      dehydratedState: dehydrate(queryClient)
    }
  }
})

const CategoryPage = (props): JSX.Element => {
  console.log("CategoryPage props =>", props)

  const router: NextRouter = useRouter()
  const category = router.query.category as string
  console.log("query-category", category)

  //Пока queryKey и queryFn совпадает в fetchQuery и useQuery,
  //то isLoading никогда не произойдет
  const { data: products, isLoading } = useProductsQuery(category)

  // Если ошибка в базовом запроссе из getServerSideProps
  if (props.isError) return <Error />

  // Если ошибки нет данные ФЕТЧАСТСЯ на этот запрос и лежат в RQ кэше
  return (
    <>
      <Head>
        <title>Тайтл магазина</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        data-component="LayoutContentBody"
        data-page="Category"
        className="pt-10">
        <div className="bg-pink-200 h-[110px] flex flex-col items-center justify-center tempGradient">
          <div className='  font-semibold uppercase'>Одежда</div>
        </div>
        <div></div>
        <div className="container px-container grid grid-cols-[320px_1fr] gap-7">
          <aside className='bg-green-300'>Фильтры</aside>
          <main>{products && <ProductsList products={products} />}</main>
        </div>
      </div>
    </>
  )
}

export default withLayoutMain(CategoryPage)
