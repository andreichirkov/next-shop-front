import { useQuery } from "react-query"
import { getPost } from "../../api/posts"

export const usePost = id => {
  return useQuery(["post", id], () => getPost(id))
}
