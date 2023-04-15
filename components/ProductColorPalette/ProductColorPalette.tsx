import cn from "classnames"

interface ProductColorPaletteProps {
  colors: string[]
}

function ProductColorPalette({ colors, ...props }: ProductColorPaletteProps) {
  // console.log(colors)

  return (
    <ul className="relative flex flex-wrap gap-0.5" {...props}>
      {colors.map(color => (
        <li
          className={cn("w-4 h-4 rounded-sm cursor-pointer group/color_square", {
            ["bg-black"]: color === "Черный",
            ["bg-white border border-black"]: color === "Белый",
            ["bg-green-900"]: color === "Зеленый",
            ["bg-red-900"]: color === "Красный"
          })} key={color}>
          <div className="absolute hidden top-full mt-1 left-0 bg-white px-0 py-1 w-full rounded-sm group-hover/color_square:flex">
            {color}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ProductColorPalette
