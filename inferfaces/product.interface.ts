export interface Sizes {
  value: number | string,
  quantity: number
}

export interface Price {
  oldValue?: number
  currentValue: number
  currency: '₽' | '$'
}

export interface Product {
  id: number
  brand: string
  title: string
  sizes: Sizes[]
  colors: string[]
  price: Price
}
