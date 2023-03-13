import { HeaderProps } from "@/layouts/LayoutMain/Header.props"

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return <header {...props}>Хедер</header>
}
