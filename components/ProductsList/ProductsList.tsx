import { Product } from "../../inferfaces/product.interface"
import ProductCard from "../ProductCard/ProductCard"
import LinkText from "../LinkText/LinkText"
import ProductsView from "../ProductsView/ProductsView"
import { useProductsView } from "../../store/productsView"
import cn from "classnames"

//title, url и urlText есть, если список продуктов короткий
//и выступает как ПРОМО материал
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
  const { itemsPerLine } = useProductsView()
  console.log("itemsPerLine", itemsPerLine)

  return (
    <section
      data-component="ProductsList"
      //container и px-4 класс по условию должен быть
      className=" "
      {...props}>
      {title && url && urlText ? (
        <div className="px-container flex-center-between mb-8 mt-20">
          <h3 className="uppercase font-medium">{title}</h3>
          <LinkText url={url} urlText={urlText} />
        </div>
      ) : (
        <div className="mb-8 mt-8 flex-center-between">
          <span>{products.length} товаров</span>
          <div>
            <ProductsView />
            {/*Сделать сортировку*/}
          </div>
        </div>
      )}

      <ul
        className={cn("grid gap-x-8 gap-y-11", {
          //itemsPerLine могут быть только 3 или 4
          ["grid-cols-4"]: itemsPerLine === 4,
          ["grid-cols-3"]: itemsPerLine === 3
        })}>
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ul>
    </section>
  )
}

export default ProductsList
