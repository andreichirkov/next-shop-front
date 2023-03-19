import { useQuery } from "react-query"
import { fetchPost, fetchPosts } from "../../api/posts"

export const usePostsQuery = () => {
  return useQuery("posts", fetchPosts, {
    onSuccess: data => {
      console.log("onSuccess in usePostsQuery -->", data)
    }
  })
}

export const usePostQuery = id => {
  return useQuery(["post", id], () => fetchPost(id), {
    onSuccess: data => {
      console.log("onSuccess in usePostQuery -->", data)
    }
  })
}
