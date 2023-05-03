import { $localDBHost } from "../lib/axios"
import { Product } from "../inferfaces/product.interface"
import { number } from "prop-types"

export const fetchProductsByCategory = async (
  category: string
): Promise<Product[]> => {
  try {
    await new Promise(_ => setTimeout(_, 1500))
    //Пример: http://localhost:4444/clothing (В url можно не писать baseUrl)
    const { data } = await $localDBHost.get<Product[]>("/api", {
      params: {
        category
      }
    })

    //ПОТОМ ИЗМЕНИТЬ БЭК => Вручную выкидываю Ошибку для SSR Category Page
    if (data.length === 0) {
      const axiosErrorMessage = `Axios error => Продуктов с ${category} категорией нет`
      console.log("\x1b[41m%s\x1b[0m", axiosErrorMessage) //Красный цвет
      await Promise.reject(Error(axiosErrorMessage))
    }

    return data
  } catch (error) {
    const axiosErrorMessage = "Axios error => " + (error as Error).message
    console.log("\x1b[41m%s\x1b[0m", axiosErrorMessage) //Красный цвет
    throw new Error(axiosErrorMessage)
  }
}

export const fetchProductBySlug = async (slug: string): Promise<Product> => {
  try {
    await new Promise(_ => setTimeout(_, 1500))

    //Тут будет всегда 1 элемент, тк slug уникален
    const { data } = await $localDBHost.get<Product[]>("api/", {
      params: {
        slug
      }
    })

    //ПОТОМ ИЗМЕНИТЬ БЭК => Вручную выкидываю Ошибку для SSR Product Page
    if (data.length === 0) {
      const axiosErrorMessage = `Axios error => продукта со ${slug} нет`
      console.log("\x1b[41m%s\x1b[0m", axiosErrorMessage) //Красный цвет
      await Promise.reject(Error(axiosErrorMessage))
    }

    return data[0]
  } catch (error) {
    const axiosErrorMessage = "Axios error => " + (error as Error).message
    console.log("\x1b[41m%s\x1b[0m", axiosErrorMessage) //Красный цвет
    throw new Error(axiosErrorMessage)
  }
}
