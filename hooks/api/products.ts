import { useQuery } from "react-query"
import { fetchPost, fetchPosts } from "../../api/posts"
import {fetchProductById, fetchProductsByCategory} from "../../api/products"

export const useProductsQuery = category => {
  return useQuery({
    queryKey: [category],
    queryFn: () => fetchProductsByCategory(category),
    // only prefetch if older than 10 seconds
    staleTime: 10 * 1000,
    onSuccess: data => {
      console.log("\x1b[32m%s\x1b[0m", "onSuccess useProductsQuery =>", data)
    }
  })
}

export const useProductQuery = slug => {
  return useQuery({
    queryKey: [slug],
    queryFn: () => fetchProductById(slug),
    // only prefetch if older than 10 seconds
    staleTime: 10 * 1000,
    onSuccess: data => {
      console.log("\x1b[32m%s\x1b[0m", "onSuccess useProductsQuery =>", data)
    }
  })
}
