import { HeaderProps } from "./Header.props"
import HeaderButton from "../../components/HeaderButton/HeaderButton"
import HeaderLink from "../../components/HeaderLink/HeaderLink"

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  const menu = [
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

  return (
    <div className="MAIN flex gap-8">
      {menu.map(item => (
        <div>
          <div className='text-2xl'>{item.name}</div>
          <div className='flex'>
            {item.table.map(column => (
              <div className='1'>
                <a className="block text-xl" href={column.heading.link}>
                  {column.heading.name}
                </a>
                <div className='2'>
                  {column.body.map(cell => (
                    <a className="block" href={cell.link}>
                      {cell.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <header {...props} className="bg-neutral-700 " data-component="Header">
      <div className="container px-container flex items-center justify-between h-10  ">
        <ul className="flex" data-section="Left">
          <li className="relative flex cursor-pointer items-center text-white px-2 h-8 hover:bg-neutral-600 rounded-lg">
            <HeaderLink>Поступления</HeaderLink>
            <ul className='absolute top-[calc(100%+0.5rem)] bg-neutral-600 p-2 rounded-lg'>
              <li className=''>Эта неделя</li>
              <li>Этот месяц</li>
            </ul>
          </li>
          <li className="flex cursor-pointer items-center ">
            <HeaderButton>Мужское</HeaderButton>
          </li>
          <li className="flex cursor-pointer items-center ">
            <HeaderButton>Женское</HeaderButton>
          </li>
          <li className="flex cursor-pointer items-center text-white px-2 h-8 hover:bg-neutral-600 hover:rounded-lg">
            <HeaderLink>Бренды</HeaderLink>
          </li>
          <li className="flex cursor-pointer items-center text-white px-2 h-8 hover:bg-neutral-600 hover:rounded-lg">
            <HeaderLink>Дом</HeaderLink>
          </li>
        </ul>
        <div className="flex" data-section="Center">
          LOGO
        </div>
        <ul className="flex" data-section="Left">
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
      </div>
    </header>
  )
}
