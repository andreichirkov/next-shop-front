import cn from "classnames"
import { MenuItem } from "../../../inferfaces/menu.interface"

interface HeaderLeftMenu {
  menuState: MenuItem[]
  openMenuBySlug: (slug: string) => void
}

export const HeaderLeftMenu = ({
  menuState,
  openMenuBySlug
}: HeaderLeftMenu) => {
  return (
    <ul className="flex justify-self-start" data-section="Left">
      {menuState.map((menuItem, i) => (
        <li key={menuItem.slug} data-component="HeaderMenuItem">
          <a
            href={"#"}
            onMouseOver={() => openMenuBySlug(menuItem.slug)}
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
