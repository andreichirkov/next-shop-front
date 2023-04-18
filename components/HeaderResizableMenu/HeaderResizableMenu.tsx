import { MenuItem } from "../../inferfaces/menu.interface"

interface HeaderResizableMenu {
  menuItem: MenuItem
}

export const HeaderResizableMenu = ({ menuItem, ...props }) => {
  return (
    <div
      className="container px-container text-white flex gap-4 "
      key={menuItem.slug}
      {...props}>
      {menuItem.table.map((column, i) => (
        <div key={i} className="flex flex-col py-8 ">
          <a
            data-component="ColumnMenuHeading"
            className="px-2 py-1 mb-1 block text-white rounded-md hover:bg-white/[.1]"
            href={column.heading.link}>
            {column.heading.name}
          </a>
          <ul className="mt-1 flex flex-col" data-component="ColumnMenuList">
            {column.body.map((cell, j) => (
              <li className="h-10" key={j}>
                <a
                  className="px-2 py-1 block text-sm text-white rounded-md hover:bg-white/[.1]"
                  href={cell.link}>
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
