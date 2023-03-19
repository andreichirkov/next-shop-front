import { create } from "zustand"
import { persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"
import { devtools } from "zustand/middleware"

export interface FavoritePostsIds {
  favoriteIds: number[]
  addToFavorite: (id: number) => void
  removeFromFavorite: (id: number) => void
}

export const useFavoritePostsStore = create<FavoritePostsIds>()(
  persist(
    devtools(
      immer(set => ({
        favoriteIds: [],
        addToFavorite: (id: number) =>
          set(state => {
            state.favoriteIds.push(id)
          }),
        removeFromFavorite: (id: number) =>
          set(state => ({
            favoriteIds: state.favoriteIds.filter(postId => postId !== id)
          }))
      }))
    ),
    {
      name: "FavoritePostsStore"
    }
  )
)
