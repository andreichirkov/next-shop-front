import { useRouter } from "next/router"
import Post from "../Post/Post"
import { usePostQuery } from "../../hooks/api/posts"

const PostPage = () => {
  const router = useRouter()
  const id = router.query.id

  const { data, isLoading } = usePostQuery(id)
  console.log('time')

  if (isLoading) return <h1 className="text-9xl">Загрузка !!!</h1>

  return (
    <div>
      <Post id={data.id} title={data.title} body={data.body} />
      <div>{/*<Pagination id={id} />*/}</div>
    </div>
  )
}

export default PostPage
