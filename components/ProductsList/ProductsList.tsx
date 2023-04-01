import { Product } from "../../inferfaces/product.interface"
import ProductCard from "../ProductCard/ProductCard"

interface ProductsListProps {
  products: Product[]
}

function ProductsList({ products, ...props }: ProductsListProps): JSX.Element {
  return (
    <section {...props}>
      <ul className="flex">
        {products &&
          products.map(product => (
            <ProductCard product={product} key={product.id} />
          ))}
      </ul>
    </section>
  )
}

export default ProductsList
