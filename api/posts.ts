import { $host } from "../lib/axios"
import { Post } from "../inferfaces/post.interface"

export const getPost = async id => {
  const { data } = await $host.get<Post>("posts/" + id)
  console.warn(`Axios native: POST ${id} FETCHED`)
  return data
}

export const getPosts = async () => {
  const { data } = await $host.get<Post[]>("posts?_limit=15")
  console.warn(`Axios native: FETCHED POSTS => limit 15 [hardcode]`)
  return data
}
