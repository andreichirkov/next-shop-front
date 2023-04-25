import { MenuItem } from "../../../inferfaces/menu.interface"
import Link from "next/link"

interface HeaderResizableMenuProps {
  menuItem: MenuItem
  closeResizableMenu: () => void
}

export const HeaderResizableMenu = ({
  menuItem,
  closeResizableMenu,
  ...props
}: HeaderResizableMenuProps) => {
  return (
    <div
      className="container px-container text-white flex gap-4 "
      key={menuItem.slug}
      {...props}>
      {menuItem.table.map((column, i) => (
        <div key={i} className="flex flex-col py-8 ">
          {column.heading ? (
            <Link
              data-component="ColumnMenuHeading"
              className="button:header-submenu mb-1 font-bold"
              onClick={closeResizableMenu}
              href={column.heading.link}>
              {column.heading.name}
            </Link>
          ) : (
            <div
              // Блок для правильного отступа и деления на колонки
              data-component="Transparent"
              className="h-10 pointer-events-none"></div>
          )}
          <ul className="mt-1 flex flex-col" data-component="ColumnMenuList">
            {column.body.map((cell, j) => (
              <li className="h-10" key={j}>
                <a className="button:header-submenu" href={cell.link}>
                  {cell.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
