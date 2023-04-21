import { Product } from "../../inferfaces/product.interface"
import ProductCard from "../ProductCard/ProductCard"

interface ProductsListProps {
  products: Product[]
  title: string
}

function ProductsList({ products, title, ...props }: ProductsListProps): JSX.Element {
  return (
    <section
      data-component="ProductsList"
      className="container px-4"
      {...props}>
      <div className="px-container flex-center-between mb-8 mt-20">
        <h3 className="uppercase font-medium">{title}</h3>
        <a href="#" className="link-primary">
          Смотреть все {">"}
        </a>
      </div>
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
