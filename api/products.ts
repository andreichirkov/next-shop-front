import { $localDBHost } from "../lib/axios"
import { Post } from "../inferfaces/post.interface"
import { Product } from "../inferfaces/product.interface"

export const fetchProductsByCategory = async category => {
  const { data } = await $localDBHost.get<Product[]>('category')
  // console.warn(`Axios fetchPosts: data => ${data}`)
  return data
}

export const fetchProductById = async id => {
  const { data } = await $localDBHost.get<Post>("posts/" + id)
  console.warn(`Axios native: POST ${id} FETCHED`)
  return data
}
