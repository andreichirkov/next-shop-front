import {NextRouter, useRouter} from "next/router"
import { withLayoutMain } from "../../layouts/LayoutMain/LayoutMain"
import {withCSR} from "../../HOC/with-CSR";
import {dehydrate, QueryClient} from "react-query";
import {config} from "../../lib/react-query-config";
import {fetchProductById, fetchProductsByCategory} from "../../api/products";
import {useProductQuery, useProductsQuery} from "../../hooks/api/products";
import Error from "../../components/Error/Error";

export const getServerSideProps = withCSR(async ctx => {
  // console.log('CategoryPage getServerSideProps => ctx =>', ctx)

  const slug: string = ctx.params.slug
  // console.log('category via ctx.params', category)

  let isError: boolean = false
  const queryClient = new QueryClient(config)

  try {
    //Здесь будет prefetchQuery по категории,
    //чтобы потом в глубине компонентов использовать useQuery по КЛЮЧУ категории
    //Если в RQDevTools нет запроса, значит где то ошибка, которую тяжело найти на SSR
    await queryClient.fetchQuery({
      queryKey: [slug],
      queryFn: () => fetchProductById(slug),
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

function ProductPage(props) {
  console.log("ProductPage props =>", props)



  const router: NextRouter = useRouter()
  const slug = router.query.slug as string
  console.log("query-slug", slug)

  //Пока queryKey и queryFn совпадает в fetchQuery и useQuery,
  //то isLoading никогда не произойдет
  const { data: product, isLoading } = useProductQuery(slug)

  // Если ошибка в базовом запроссе из getServerSideProps
  if (props.isError) return <Error />

  // Если ошибки нет данные ФЕТЧАСТСЯ на этот запрос и лежат в RQ кэше

  return (
    <div
      className="pt-10"
      data-component="LayoutContentBody"
      data-page="ProductPage">

    </div>
  )
}

export default withLayoutMain(ProductPage)
