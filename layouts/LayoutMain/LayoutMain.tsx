import { FunctionComponent } from "react"
import { LayoutMainProps } from "./LayoutMain.props"
import { Header } from "./Header"
import { Footer } from "./Footer"

const LayoutMain = ({ children }: LayoutMainProps): JSX.Element => {
  return (
    <div className="layoutMain">
      <Header />
      <div className={"Content"}>{children}</div>
      <Footer />
    </div>
  )
}

export const withLayoutMain = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  //Сюда попадают пропсы из Хоум, тк он обернут ЭТИМ компонентом
  //Далее они передаются в контекст
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <LayoutMain>
        <Component {...props} />
      </LayoutMain>
    )
  }
}
