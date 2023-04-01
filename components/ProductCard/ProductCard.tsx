import React from "react"
import Image from "next/image"
import { Product } from "../../inferfaces/product.interface"

const coverImage = require("../../images/cover.jpg")

interface ProductCardProps {
  product: Product
}

function ProductCard({ product, ...props }: ProductCardProps) {
  return (
    <li className="" {...props}>
      <Image
        src={coverImage}
        quality={100}
        className="w-32 h-32 object-cover"
        alt="Cover"
      />

      <div>{product.title}</div>
    </li>
  )
}

export default ProductCard
