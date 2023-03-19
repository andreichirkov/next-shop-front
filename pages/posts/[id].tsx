import { dehydrate, QueryClient } from "react-query"
import Error from "../../components/Error/Error"
import PostPage from "../../components/PostPage/PostPage"
import { withCSR } from "../../HOC/with-CSR"
import { withLayoutMain } from "../../layouts/LayoutMain/LayoutMain"
import Link from "next/link"
import { fetchPost } from "../../api/posts"

export const getServerSideProps = withCSR(async ctx => {
  console.log("getServerSideProps => ctx =>", ctx)

  const { id } = ctx.params
  const queryClient = new QueryClient()
  let isError = false

  try {
    // ❤ Делает запрос и кэширует query ❤
    // Если запрос существует и данные не признаны недействительными
    // или старше заданного staleTime, то будут возвращены данные из кеша.
    // В противном случае он попытается получить последние данные.
    await queryClient.prefetchQuery(["post", id], () => fetchPost(id))
  } catch (error) {
    // Если ошибка на уровне страницы с id-постом то показываем компонент Error
    // fetchQuery выкинул throw with the error (из документации)
    isError = true
    // @ts-ignore
    ctx.res.statusCode = error.response.status
  }

  return {
    props: {
      //also passing down isError state to show a custom error component.
      isError,
      dehydratedState: dehydrate(queryClient)
    }
  }
})

const Page = props => {
  // Если ошибка в базовом запроссе из getServerSideProps
  if (props.isError) return <Error />

  // Если ошибки нет данные ПРЕФЕТЧАСТСЯ на этот запрос
  return (
    <>
      <Link href={"/"}>На главную</Link>
      <PostPage />
    </>
  )
}

export default withLayoutMain(Page)
