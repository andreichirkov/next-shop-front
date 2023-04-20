import cn from "classnames"
import { MenuItem } from "../../../inferfaces/menu.interface"

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
          key={menuItem.slug}
          data-component="HeaderMenuItem">
          <a
            href={"#"}
            onMouseOver={() => openMenuItem2(menuItem.slug)}
            className={cn("button:header-menu", {
              ["bg-white/[.1]"]: menuItem.isOpened
            })}>
            {menuItem.name}
          </a>
        </li>
      ))}
    </ul>
  )
}
