import { HeaderProps } from "./Header.props"
import HeaderButton from "../../components/HeaderButton/HeaderButton"
import HeaderLink from "../../components/HeaderLink/HeaderLink"
import { useState } from "react"
import cn from "classnames"
import LogoMain from "../../components/LogoMain/LogoMain"

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  console.log("Render Header.jsx")

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
    isOpened?: boolean
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
  const menuFront: MenuItem[] = menuFromBack.map(item => {
    return { ...item, isOpened: false }
  })

  const [menuState, setMenuState] = useState<MenuItem[]>(menuFront)

  const openMenuItem = (categorySlug: string): void => {
    setMenuState &&
      setMenuState(
        menuState.map(m => ({ ...m, isOpened: m.slug === categorySlug }))
      )
  }

  const closeAllMenu = (): void => {
    setMenuState &&
      setMenuState(menuState.map(m => ({ ...m, isOpened: false })))
  }

  const buildLeftHeaderMenu = () => {
    return (
      <ul className="flex justify-self-start" data-section="Left">
        {menuState.map((menuItem, i) => (
          <li className="relative" key={menuItem.slug} data-component="HeaderMenuItem">
            <a
              href={"#"}
              onMouseOver={() => openMenuItem(menuItem.slug)}
              className={cn('flex items-center text-white px-4 h-8 rounded-md',{
                ["bg-white/[.1]"]: menuItem.isOpened
              })}>
              {menuItem.name}
            </a>
            {buildModalMenuItem(menuItem)}
          </li>
        ))}
      </ul>
    )
  }

  const buildModalMenuItem = (menuItem: MenuItem) => {
    return (
      <div
        data-component="ModalMenuItem"
        className={cn(
          "absolute top-[calc(100%+0.5rem)] flex gap-4 p-2 backdrop-blur-md bg-white/[.1] rounded-md",
          {
            ["hidden"]: !menuItem.isOpened
            // ["hidden"]: false
          }
        )}>
        {menuItem.table.map((column, i) => (
          <div
            className="flex flex-col"
            data-component="ColumnMenuItem"
            key={i}>
            <a
              data-component="ColumnMenuHeading"
              className="px-2 py-1 mb-1 block text-white rounded-md hover:bg-white/[.1]"
              href={column.heading.link}>
              {column.heading.name}
            </a>
            <div className="w-[calc(100%-1rem)] self-center border-b border-white/[.4]"></div>
            <ul className="mt-1 flex flex-col" data-component="ColumnMenuList">
              {column.body.map((cell, j) => (
                <li className="" key={j}>
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

  const buildRightHeaderMenu = () => {
    return (
      <ul className="flex justify-self-end" data-section="Right">
        <li className="flex cursor-pointer items-center text-white px-2 h-8 hover:bg-neutral-600 hover:rounded-md">
          <HeaderButton>Поиск</HeaderButton>
        </li>
        <li className="flex cursor-pointer items-center text-white px-2 h-8 hover:bg-neutral-600 hover:rounded-md">
          <HeaderLink>Избранное | 0</HeaderLink>
        </li>
        <li className="flex cursor-pointer items-center text-white px-2 h-8 hover:bg-neutral-600 hover:rounded-md">
          <HeaderLink>Аккаунт</HeaderLink>
        </li>
        <li className="flex cursor-pointer items-center text-white px-2 h-8 hover:bg-neutral-600 hover:rounded-md">
          <HeaderButton>Корзина | 0</HeaderButton>
        </li>
      </ul>
    )
  }

  return (
    <header
      data-component="Header"
      className="fixed z-1 w-full h-10 pb-0.5"
      onMouseLeave={() => closeAllMenu()}
      {...props}>

      {/*Плашка с Блюром отдельная, иначе Блюр в модалках не будет работать*/}
      <div
        // className="absolute z-[-1] top-0 left-0 w-full h-10 backdrop-blur-md bg-black/[.3]"
        className="absolute z-[-1] top-0 left-0 w-full h-10 backdrop-blur-md bg-apple-black-opacity apple-backdrop-filter"
        data-component="BGForBackdropBlur"></div>

      <nav className="container px-container h-10 grid items-center grid-cols-[1fr_220px_1fr]">
        {buildLeftHeaderMenu()}
        <a href={"#"} className="flex justify-center" data-section="Center">
          <LogoMain />
        </a>
        {buildRightHeaderMenu()}
      </nav>
    </header>
  )
}
