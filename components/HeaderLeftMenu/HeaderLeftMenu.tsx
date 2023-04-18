import cn from "classnames"
import { MenuItem } from "../../inferfaces/menu.interface"

interface HeaderLeftMenu {
  menuState: MenuItem[]
  openMenuItem2: (slug: string) => void
}

export const HeaderLeftMenu = ({
  menuState,
  openMenuItem2
}: HeaderLeftMenu) => {
  return (
    <ul className="flex justify-self-start" data-section="Left">
      {menuState.map((menuItem, i) => (
        <li
          className="relative"
          key={menuItem.slug}
          data-component="HeaderMenuItem">
          <a
            href={"#"}
            onMouseOver={() => openMenuItem2(menuItem.slug)}
            className={cn("flex items-center text-white px-4 h-8 rounded-md", {
              ["bg-white/[.1]"]: menuItem.isOpened
            })}>
            {menuItem.name}
          </a>
        </li>
      ))}
    </ul>
  )
}
