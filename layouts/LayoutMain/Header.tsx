import { DetailedHTMLProps, HTMLAttributes, useState } from "react"
import LogoMain from "../../components/LogoMain/LogoMain"
import { motion, MotionConfig, Variants } from "framer-motion"
import { HeaderRightMenu } from "../../components/HeaderModule/HeaderRightMenu/HeaderRightMenu"
import { HeaderLeftMenu } from "../../components/HeaderModule/HeaderLeftMenu/HeaderLeftMenu"
import { ResizableBlock } from "../../components/ResizableBlock/ResizableBlock"
import { HeaderResizableMenu } from "../../components/HeaderModule/HeaderResizableMenu/HeaderResizableMenu"
import { MenuItem } from "../../inferfaces/menu.interface"

const DURATION = 0.5

const backgroundVariants: Variants = {
  expanded: {
    backdropFilter: "saturate(0) blur(0)",
    backgroundColor: "rgba(22, 22, 23, 1)"
  },

  collapsed: {
    backdropFilter: "saturate(180%) blur(20px)",
    backgroundColor: "rgba(22, 22, 23, .8)"
  }
}

const opacityVariants: Variants = {
  expanded: {
    opacity: 1,
    transition: { duration: DURATION / 2, delay: DURATION / 2 }
  },
  collapsed: {
    opacity: 0,
    transition: { duration: DURATION / 2 }
  }
}

export interface HeaderProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  console.log("Render Header.jsx")

  //Сделать: получили меню с Бэкенда на Стороне Сервера, без флагов открытия
  const menuFromBack: MenuItem[] = [
    {
      slug: "latest",
      name: "Поступления",
      table: [
        {
          heading: { name: "Поступившие дропы", link: "#" },
          body: [
            { name: "На этой неделе", link: "#" },
            { name: "В этом месяце", link: "#" }
          ]
        },
        {
          heading: { name: "Ожидаемые дропы", link: "#" },
          body: [
            { name: "В этом месяце", link: "#" },
            { name: "В ближайшие месяца", link: "#" }
          ]
        }
      ]
    },
    {
      slug: "brands",
      name: "Бренды",
      table: [
        {
          heading: { name: "Все бренды", link: "#" },
          body: [
            { name: "Найк", link: "#" },
            { name: "Адик", link: "#" }
          ]
        },
        {
          body: [
            { name: "Гучи (колонка 2)", link: "#" },
            { name: "Пума (колонка 2)", link: "#" }
          ]
        },
        {
          body: [
            { name: "Хуючи (колонка 3)", link: "#" },
            { name: "Кек (колонка 3)", link: "#" }
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
            { name: "Туфли", link: "#" }
          ]
        },
        {
          heading: { name: "Одежда", link: "#" },
          body: [
            { name: "Футболки", link: "#" },
            { name: "Блузки", link: "#" },
            { name: "Бла", link: "#" },
            { name: "Бла2", link: "#" }
          ]
        }
      ]
    }
  ]

  //Добавили на Фронтенда недостоющий флаг (открыто/нет меню)
  const menuFront: MenuItem[] = menuFromBack.map(item => {
    return { ...item, isOpened: false }
  })

  //Делаем Локальный Стейт с Меню, имеющим доп. ключи
  const [menuState, setMenuState] = useState<MenuItem[]>(menuFront)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  //Увеличение Хедера по высоте и открытия категории меню по Слагу
  const openMenuBySlug = (categorySlug: string): void => {
    setIsOpen(true)
    setMenuState(
      menuState.map(m => ({ ...m, isOpened: m.slug === categorySlug }))
    )
  }

  //Уменьшение Хедера к исходным размерам и закрыть вообще все категории
  const closeResizableMenu = (): void => {
    setIsOpen(false)
    setMenuState(menuState.map(m => ({ ...m, isOpened: false })))
  }

  return (
    <MotionConfig transition={{ duration: DURATION }}>
      <header
        data-component="Header"
        className="fixed z-1 w-full"
        onMouseLeave={() => closeResizableMenu()}
        {...props}>
        <motion.nav
          data-component="Nav->GlobalMenuAndResizableMenu"
          className=" w-full "
          variants={backgroundVariants}
          initial={"collapsed"}
          animate={isOpen ? "expanded" : "collapsed"}>
          {/*Глобальный блок навигации*/}
          <div
            data-component="Nav->GlobalMenu"
            className="container px-container h-10 grid items-center grid-cols-[1fr_220px_1fr]">
            <HeaderLeftMenu
              menuState={menuState}
              openMenuBySlug={slug => openMenuBySlug(slug)}
            />
            <a href={"#"} className="flex justify-center" data-section="Center">
              <LogoMain />
            </a>
            <HeaderRightMenu />
          </div>

          {/*Меню с изменяющейся высотой*/}
          <ResizableBlock
            variants={opacityVariants}
            isOpen={isOpen}
            DURATION={DURATION}>
            {menuState.map(
              menuItem =>
                menuItem.isOpened && (
                  <HeaderResizableMenu
                    menuItem={menuItem}
                    key={menuItem.slug}
                  />
                )
            )}
          </ResizableBlock>
        </motion.nav>
      </header>
    </MotionConfig>
  )
}
