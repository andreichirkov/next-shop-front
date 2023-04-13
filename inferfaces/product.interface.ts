export interface Sizes {
  xs: number | null
  s: number | null
  m: number | null
  l: number | null
  xl: number | null
  xxl: number | null
}

export interface Product {
  id: number
  brand: string
  title: string
  sizes: Sizes
  colors: string[]
}
