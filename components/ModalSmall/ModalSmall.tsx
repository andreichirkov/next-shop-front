import cn from "classnames"
import {ReactNode, useState} from "react"

interface ModalSmallProps {
  title: string
  options: string[]
}

const ModalSmall = ({ title, options }: ModalSmallProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div
      className="relative flex items-center h-10 border-amber-500 border"
      onMouseOver={() => setIsOpen(true)}
      data-component="ModalSmall">
      <span>{title}</span>
      <div
        onMouseLeave={() => setIsOpen(false)}
        className={cn(
          "absolute z-1 top-full right-0 flex flex-col bg-green-300",
          {
            ["hidden"]: !isOpen
          }
        )}>
        {options.map(o => (
          <span className="whitespace-nowrap" key={o}>{o}</span>
        ))}

      </div>
    </div>
  )
}

export default ModalSmall
