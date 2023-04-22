import { $localDBHost } from "../lib/axios"
import { Post } from "../inferfaces/post.interface"
import { Product } from "../inferfaces/product.interface"

export const fetchProductsByCategory = async category => {
  try {
    await new Promise(r => setTimeout(r, 500))
    const { data } = await $localDBHost.get<Product[]>(category)
    return data
  } catch (error) {
    const axiosErrorMessage = "Axios error => " + (error as Error).message
    console.log("\x1b[41m%s\x1b[0m", axiosErrorMessage) //Красный цвет
    throw new Error(axiosErrorMessage)
  }
}

export const fetchProductById = async id => {
  await new Promise(r => setTimeout(r, 500))
  const { data } = await $localDBHost.get<Post>("posts/" + id)
  console.warn(`Axios native: POST ${id} FETCHED`)
  return data
}
