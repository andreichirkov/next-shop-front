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

export interface MenuItem {
  slug: string
  name: string
  isOpened?: boolean
  table: TableMenuItem[]
}