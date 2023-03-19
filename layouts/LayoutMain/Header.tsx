import { HeaderProps } from "./Header.props"

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <header {...props} className="bg-pink-100" data-component="Header">
      <div className="container flex items-center justify-between bg-neutral-700 h-10 ">
        <ul className="flex" data-section="Left">
          <li className="flex cursor-pointer items-center text-white px-2 h-8 hover:bg-neutral-600 hover:rounded-lg">
            Поступления
          </li>
          <div>Мужское</div>
          <div>Женское</div>
          <div>Бренды</div>
          <div>Дом</div>
        </ul>
        <div className="flex" data-section="Center">
          LOGO
        </div>
        <div className="flex" data-section="Left">
          <div>Поиск</div>
          <div>Избранное | 0</div>
          <div>Аккаунт</div>
          <div>Корзина | 0</div>
          <div>Бренды</div>
          <div>Дом</div>
        </div>
      </div>
    </header>
  )
}
