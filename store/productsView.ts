import { create } from "zustand"
import { persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"
import { devtools } from "zustand/middleware"

type ItemsPerLine = 4 | 3

export interface ProductsView {
  itemsPerLine: ItemsPerLine
  setItemsPerLine: (itemsPerLine: ItemsPerLine) => void
}

export const useProductsView = create<ProductsView>()(
  persist(
    devtools(
      immer(set => ({
        itemsPerLine: 4,
        setItemsPerLine: (itemsPerLine: ItemsPerLine) =>
          set(state => {
            state.itemsPerLine = itemsPerLine
          })
      }))
    ),
    {
      name: "ProductsViewStore"
    }
  )
)
