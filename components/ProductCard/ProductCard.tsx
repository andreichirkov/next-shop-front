import React from "react"
import Image from "next/image"
import { Product, Sizes } from "../../inferfaces/product.interface"
import styles from "./ProductCard.module.scss"
import ProductColorPalette from "../ProductColorPalette/ProductColorPalette"

const coverImage = require("../../images/cover.jpg")

interface ProductCardProps {
  product: Product
}

function ProductCard({ product, ...props }: ProductCardProps) {
  const getDiscountInPercentages = (
    currentPrice: number,
    oldPrice: number
  ): number => {
    return Math.floor((100 * (oldPrice - currentPrice)) / oldPrice)
  }

  return (
    <li
      data-component="ProductCard"
      className="flex flex-col cursor-pointer group/product_card"
      {...props}>

      <Image
        src={coverImage}
        quality={100}
        className="w-full object-cover aspect-square rounded-md"
        alt="Cover"
      />

      <div
        data-component="ProductDescription"
        className="relative mt-2 grow grid grid-rows-1 auto-rows-max gap-1 rounded-md ">
        <div className="text-sm">
          <div className="font-medium">{product.brand}&nbsp;</div>
          <div>{product.title}</div>
        </div>
        <ProductColorPalette colors={product.colors} />
        <div className="mt-1 ">
          <span className='font-medium'>
            {product.price.currentValue}
            {product.price.currency}&nbsp;
          </span>
          {product.price.oldValue && (
            <span className=" text-insta-red line-through">
              {product.price.oldValue}
              {product.price.currency}
            </span>
          )}
          {product.price.oldValue && (
            <span className="absolute -top-[2.1rem] left-1.5 px-2 bg-insta-red text-white text-sm rounded-md">
              {getDiscountInPercentages(
                product.price.currentValue,
                product.price.oldValue
              )}%
            </span>
          )}
        </div>
        <ul className="absolute hidden top-full flex-wrap gap-1 rounded-md group-hover/product_card:flex">
          {product.sizes.map((size: Sizes) => (
            <li className="px-0 py-0 z-1 text-xs uppercase" key={size.value}>
              {size.value}
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default ProductCard
