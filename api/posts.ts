import { $host } from "../lib/axios"

export const getPost = async id => {
  const { data } = await $host.get("posts/" + id)
  console.warn(`Axios native: POST ${id} FETCHED`)
  return data
}
