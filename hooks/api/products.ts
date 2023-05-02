import { useQuery } from "react-query"
import { fetchProductBySlug, fetchProductsByCategory } from "../../api/products"

//Функции атоматически затипизированны

export const useProductsQuery = (category: string) => {
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

export const useProductQuery = (slug: string) => {
  return useQuery({
    queryKey: [slug],
    queryFn: () => fetchProductBySlug(slug),
    // only prefetch if older than 10 seconds
    staleTime: 10 * 1000,
    onSuccess: data => {
      console.log("\x1b[32m%s\x1b[0m", "onSuccess useProductsQuery =>", data)
    }
  })
}
