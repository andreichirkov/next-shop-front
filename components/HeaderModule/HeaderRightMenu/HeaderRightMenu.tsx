import HeaderButton from "../HeaderButton/HeaderButton"
import HeaderLink from "../HeaderLink/HeaderLink"

export const HeaderRightMenu = () => {
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
