import cn from "classnames"
import { useState } from "react"
import { useProductsView } from "../../store/productsView"
import CaretDownIcon from "./caretDown.svg"

const ProductsView = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { itemsPerLine, setItemsPerLine } = useProductsView()

  return (
    <div
      className="relative flex items-center h-10"
      data-component="ProductsView">
      <button className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
        <span className="text-sm">Кол-во в строку</span>
        <CaretDownIcon style={{ width: 12, height: 12, marginLeft: 8 }} />
      </button>
      <div
        onMouseLeave={() => setIsOpen(false)}
        className={cn(
          "absolute z-1 top-full right-0 flex flex-col bg-white py-1 rounded-md border border-black",
          {
            ["hidden"]: !isOpen
          }
        )}>
        <button
          className={cn("whitespace-nowrap button:modal-small", {
            ["bg-insta-red text-white"]: itemsPerLine === 3
          })}
          onClick={() => {
            setItemsPerLine(3)
            setIsOpen(false)
          }}>
          3 в ряд
        </button>
        <button
          className={cn("whitespace-nowrap button:modal-small", {
            ["bg-insta-red text-white"]: itemsPerLine === 4
          })}
          onClick={() => {
            setItemsPerLine(4)
            setIsOpen(false)
          }}>
          4 в ряд
        </button>
      </div>
    </div>
  )
}

export default ProductsView
