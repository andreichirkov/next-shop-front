import { HeaderProps } from "./Header.props"
import HeaderButton from "../../components/HeaderButton/HeaderButton"
import HeaderLink from "../../components/HeaderLink/HeaderLink"
import { useState } from "react"
import cn from "classnames"

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  interface HeadingItem {
    name: string
    link: string
  }

  interface BodyItem {
    name: string
    link: string
  }

  interface TableMenuItem {
    heading: HeadingItem
    body: BodyItem[]
  }

  interface MenuItem {
    slug: string
    name: string
    table: TableMenuItem[]
  }

  const menuFromBack: MenuItem[] = [
    {
      slug: "latest",
      name: "Поступления",
      table: [
        {
          heading: { name: "Все новинки", link: "#" },
          body: [
            { name: "Эта неделя", link: "#" },
            { name: "Этот месяц", link: "#" }
          ]
        }
      ]
    },
    {
      slug: "men",
      name: "Мужское",
      table: [
        {
          heading: { name: "Обувь", link: "#" },
          body: [
            { name: "Кроссовки", link: "#" },
            { name: "Тапочки", link: "#" }
          ]
        },
        {
          heading: { name: "Одежда", link: "#" },
          body: [
            { name: "Футболки", link: "#" },
            { name: "Рубашки", link: "#" }
          ]
        }
      ]
    },
    {
      slug: "women",
      name: "Женское",
      table: [
        {
          heading: { name: "Обувь", link: "#" },
          body: [
            { name: "Кроссовки", link: "#" },
            { name: "Тапочки", link: "#" }
          ]
        },
        {
          heading: { name: "Одежда", link: "#" },
          body: [
            { name: "Футболки", link: "#" },
            { name: "Рубашки", link: "#" }
          ]
        }
      ]
    }
  ]
  const menuFront = menuFromBack.map(item => {
    return { ...item, isOpened: false }
  })

  const [menuState, setMenuState] = useState(menuFront)

  const openMenuItem = categorySlug => {
    setMenuState &&
      setMenuState(
        menuState.map(m => ({ ...m, isOpened: m.slug === categorySlug }))
      )
  }

  const closeAllMenu = () => {
    setMenuState &&
      setMenuState(menuState.map(m => ({ ...m, isOpened: false })))
  }

  return (
    <header
      data-component="Header"
      className="bg-neutral-700 relative"
      onMouseLeave={() => closeAllMenu()}
      {...props}>
      <div
        className="absolute top-0 left-0 w-full h-11"
        data-component="BGForMouseLeaveHeader"></div>
      <nav className="container px-container flex items-center justify-between h-10  ">
        <ul className="flex" data-section="Left">
          {menuState.map((item, i) => (
            <li className="relative" key={i} data-component="HeaderMenuItem">
              <a
                href={"#"}
                onMouseOver={() => openMenuItem(item.slug)}
                className="flex items-center text-white px-2 h-8 rounded-lg hover:bg-neutral-600">
                {item.name}
              </a>
              <div
                data-component="ModalMenuItem"
                className={cn(
                  "flex absolute top-[calc(100%+0.5rem)] bg-neutral-600 p-2 rounded-lg",
                  {
                    ["hidden"]: !item.isOpened
                  }
                )}>
                {item.table.map((column, n) => (
                  <div className="" key={n} data-component="ColumnMenuItem">
                    <a
                      data-component="ColumnMenuHeading"
                      className="block text-white underline underline-offset-4"
                      href={column.heading.link}>
                      {column.heading.name}
                    </a>
                    <ul className="2" data-component="ColumnMenuList">
                      {column.body.map((cell, j) => (
                        <li key={j}>
                          <a className="block text-white" href={cell.link}>
                            {cell.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
        <div className="flex" data-section="Center">
          LOGO
        </div>
        <ul className="flex" data-section="Right">
          <li className="flex cursor-pointer items-center text-white px-2 h-8 hover:bg-neutral-600 hover:rounded-lg">
            <HeaderButton>Поиск</HeaderButton>
          </li>
          <li className="flex cursor-pointer items-center text-white px-2 h-8 hover:bg-neutral-600 hover:rounded-lg">
            <HeaderLink>Избранное | 0</HeaderLink>
          </li>
          <li className="flex cursor-pointer items-center text-white px-2 h-8 hover:bg-neutral-600 hover:rounded-lg">
            <HeaderLink>Аккаунт</HeaderLink>
          </li>
          <li className="flex cursor-pointer items-center text-white px-2 h-8 hover:bg-neutral-600 hover:rounded-lg">
            <HeaderButton>Корзина | 0</HeaderButton>
          </li>
        </ul>
      </nav>
    </header>
  )
}
