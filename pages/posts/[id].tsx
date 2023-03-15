import { dehydrate, QueryClient } from "react-query"
import Error from "../../components/Error/Error"
import PostPage from "../../components/PostPage/PostPage"
import { getPost } from "../../api/posts"
import { withCSR } from "../../HOC/with-CSR"
import { withLayoutMain } from "../../layouts/LayoutMain/LayoutMain"
import Link from "next/link"

const Page = props => {
  if (props.isError) return <Error />

  return (
    <>
      <Link href={"/"}>На главную</Link>
      <PostPage />
    </>
  )
}

export const getServerSideProps = withCSR(async ctx => {
  console.log("getServerSideProps => ctx =>", ctx)

  const { id } = ctx.params

  const queryClient = new QueryClient()

  let isError = false

  try {
    await queryClient.fetchQuery(["post", id], () => getPost(id))
  } catch (error) {
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

export default withLayoutMain(Page)
