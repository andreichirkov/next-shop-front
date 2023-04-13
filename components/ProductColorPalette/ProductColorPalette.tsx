import cn from "classnames"

interface ProductColorPaletteProps {
  colors: string[]
}

function ProductColorPalette({ colors, ...props }: ProductColorPaletteProps) {
  // console.log(colors)

  return (
    <ul className="flex flex-wrap gap-0.5" {...props}>
      {colors.map(color => (
        <li
          className={cn("w-4 h-4 rounded-sm relative group cursor-pointer", {
            ["bg-black"]: color === "Чёрный",
            ["bg-white border border-black"]: color === "Белый",
            ["bg-green-900"]: color === "Зеленый",
            ["bg-red-900"]: color === "Красный"
          })} key={color}>
          <div className="absolute hidden top-full bg-white px-1 rounded-sm group-hover:flex">
            {color}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ProductColorPalette
