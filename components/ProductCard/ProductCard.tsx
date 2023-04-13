import React from "react"
import Image from "next/image"
import { Product } from "../../inferfaces/product.interface"
import styles from './ProductCard.module.scss'
import ProductColorPalette from "../ProductColorPalette/ProductColorPalette";

const coverImage = require("../../images/cover.jpg")

interface ProductCardProps {
  product: Product
}

function ProductCard({ product, ...props }: ProductCardProps) {
  return (
    <li data-component="ProductCard" className="flex flex-col" {...props}>
      <Image
        src={coverImage}
        quality={100}
        className="w-full object-cover aspect-square"
        alt="Cover"
      />

      <div data-component="ProductDescription" className="grow grid grid-rows-1 auto-rows-max">
        <div className="bg-pink-400">
          <span>{product.brand}&nbsp;</span>
          <span>{product.title}</span>
        </div>
        <ProductColorPalette colors={product.colors} />
        <ul className="bg-amber-700 flex ">
          <li>{product.sizes.xs}</li>

        </ul>
      </div>
    </li>
  )
}

export default ProductCard
