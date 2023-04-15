import { Product } from "../../inferfaces/product.interface"
import ProductCard from "../ProductCard/ProductCard"

interface ProductsListProps {
  products: Product[]
}

function ProductsList({ products, ...props }: ProductsListProps): JSX.Element {
  return (
    <section data-component='ProductsList' className='container px-4' {...props}>
      <ul className="grid grid-cols-4 gap-x-8 gap-y-11">
        {products &&
          products.map(product => (
            <ProductCard product={product} key={product.id} />
          ))}
      </ul>
    </section>
  )
}

export default ProductsList
