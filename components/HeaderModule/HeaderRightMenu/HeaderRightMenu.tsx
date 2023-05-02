import Link from "next/link";

interface MenuItemRightOnly {
  name: string
  link: string
}

export const HeaderRightMenu = () => {
  const menu: MenuItemRightOnly[] = [
    { name: "Поиск", link: "#" },
    { name: "Избранное", link: "#" },
    { name: "Аккаунт", link: "#" },
    { name: "Корзина", link: "/check" }
  ]

  return (
    <ul className="flex justify-self-end" data-section="Right">
      {menu.map(m => (
        <li key={m.name}>
          <Link href={m.link} className="button:header-menu hover:bg-white/[.1]">
            {m.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
