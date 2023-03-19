import PostLink from "./PostLink/PostLink"
import { usePostsQuery } from "../../hooks/api/posts"
import { Post } from "../../inferfaces/post.interface"
import { useFavoritePostsStore } from "../../store/favoritePosts"

export default function Posts() {
  //Почему то TS не работает на получении постов
  const { data: posts, isLoading } = usePostsQuery()

  const { favoriteIds } = useFavoritePostsStore()
  // console.log("favoriteIds", favoriteIds)

  //Функции достаются отдельно, чтобы не было Ре-Рендера
  const addToFavorite = useFavoritePostsStore(state => state.addToFavorite)
  const removeFromFavorite = useFavoritePostsStore(
    state => state.removeFromFavorite
  )

  const isFavorite = id => favoriteIds.includes(id)

  const toggleFavorite = id => {
    if (isFavorite(id)) {
      removeFromFavorite(id)
      return
    }

    addToFavorite(id)
  }

  if (isLoading) return <h1 className="text-9xl">Загрузка !!!</h1>

  return (
    <div className="Posts.tsx flex justify-between flex-wrap px-40">
      {posts?.map(post => (
        <div key={post.id} className="flex flex-col">
          <PostLink post={post} />
          <button onClick={() => {toggleFavorite(post.id)}}>
            {isFavorite(post.id) ? "Dis" : "Like"}
          </button>
        </div>
      ))}
    </div>
  )
}
