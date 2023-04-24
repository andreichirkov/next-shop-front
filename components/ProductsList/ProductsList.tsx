import { Product } from "../../inferfaces/product.interface"
import ProductCard from "../ProductCard/ProductCard"
import LinkText from "../LinkText/LinkText"

interface ProductsListProps {
  products: Product[]
  title?: string
  url?: string
  urlText?: string
}

function ProductsList({
  products,
  title,
  url,
  urlText,
  ...props
}: ProductsListProps): JSX.Element {
  return (
    <section
      data-component="ProductsList"
      className="container px-4"
      {...props}>
      {title && (
        <div className="px-container flex-center-between mb-8 mt-20">
          <h3 className="uppercase font-medium">{title}</h3>
          {/*<a href="#" className="link-primary">*/}
          {/*  Смотреть все {">"}*/}
          {/*</a>*/}

          {url && urlText && <LinkText url={url} urlText={urlText} />}
        </div>
      )}

      <ul className="grid grid-cols-4 gap-x-8 gap-y-11">
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ul>
    </section>
  )
}

export default ProductsList
