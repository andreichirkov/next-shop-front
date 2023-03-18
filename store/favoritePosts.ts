import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface FavoritePostsIds {
  favoriteIds: number[]
  addToFavorite: (id: number) => void
  removeFromFavorite: (id: number) => void
}

export const useFavoritePostsStore = create(
  persist<FavoritePostsIds>(
    set => ({
      favoriteIds: [],
      addToFavorite: (id: number) =>
        set(state => ({
          favoriteIds: [...state.favoriteIds, id]
        })),
      removeFromFavorite: (id: number) =>
        set(state => ({
          favoriteIds: state.favoriteIds.filter(postId => postId !== id)
        }))
    }),
    {
      name: "FavoritePostsStore"
    }
  )
)
