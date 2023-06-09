import { NextRouter, useRouter } from "next/router"
import { withLayoutMain } from "../../layouts/LayoutMain/LayoutMain"
import { dehydrate, DehydratedState, QueryClient } from "react-query"
import { config } from "../../lib/react-query-config"
import { fetchProductBySlug } from "../../api/products"
import { useProductQuery } from "../../hooks/api/products"
import Error from "../../components/Error/Error"
import Head from "next/head"
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType
} from "next"

interface SSRProps extends Record<string, unknown> {
  isError: boolean
  dehydratedState: DehydratedState
}

//Страница продукта без Лоадеров, withCSR не подходит
//Для SEO такая страница сразу придет с данными
export const getServerSideProps: GetServerSideProps<SSRProps> = async ({
  params,
  res
}: GetServerSidePropsContext) => {
  const slug = params?.slug as string
  console.log("Product Page SSR slug =>", slug)

  let isError: boolean = false
  const queryClient = new QueryClient(config)

  try {
    //Здесь будет prefetchQuery по категории,
    //чтобы потом в глубине компонентов использовать useQuery по queryKey категории
    //Если в RQDevTools нет запроса, значит где то ошибка, которую тяжело найти на SSR
    await queryClient.fetchQuery({
      queryKey: [slug],
      queryFn: () => fetchProductBySlug(slug),
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
    //res.statusCode = bla
  }

  return {
    props: {
      isError,
      dehydratedState: dehydrate(queryClient)
    }
  }
}

function ProductPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
): JSX.Element {
  console.log("ProductPage props =>", props)

  const router: NextRouter = useRouter()
  const slug = router.query.slug as string
  const headTitle: string = `Страница товара: ${slug}`
  console.log("query-slug", slug)

  //Пока queryKey и queryFn совпадает в fetchQuery и useQuery,
  //то isLoading никогда не произойдет
  //isError тоже, ошибка будет сразу в getServerSideProps
  const { data: product } = useProductQuery(slug)

  // Если ошибка в базовом запроссе из getServerSideProps
  if (props.isError) return <Error />

  // Если ошибки нет данные Фетчатся на этот запрос и лежат в RQ кэше
  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="pt-10"
        data-component="LayoutContentBody"
        data-page="ProductPage">
        <div className="h-12 bg-green-300"></div>
        <pre>{JSON.stringify(product, null, 2)}</pre>
      </div>
    </>
  )
}

export default withLayoutMain(ProductPage)
