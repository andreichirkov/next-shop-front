import { useQuery } from "react-query"
import { getPost } from "../../api/posts"

export const usePostQuery = id => {
  return useQuery(["post", id], () => getPost(id), {
    onSuccess: data => {
      console.log('onSuccess in usePostQuery -->', data)
    }
  })
}
