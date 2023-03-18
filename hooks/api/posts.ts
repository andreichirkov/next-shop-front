import { useQuery } from "react-query"
import { getPost, getPosts } from "../../api/posts"

export const usePostQuery = id => {
  return useQuery(["post", id], () => getPost(id), {
    onSuccess: data => {
      console.log("onSuccess in usePostQuery -->", data)
    }
  })
}

export const usePostsQuery = () => {
  return useQuery("list_of_posts", getPosts, {
    onSuccess: data => {
      console.log("onSuccess in usePostsQuery -->", data)
    }
  })
}
