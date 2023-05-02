import { withCSR } from "../HOC/with-CSR"
import { withLayoutMain } from "../layouts/LayoutMain/LayoutMain"

export const getServerSideProps = async ctx => {
  await new Promise(r => setTimeout(r, 3000))

  return {
    props: {
      foo: "bar"
    }
  }
}

const CategoryPage = (props): JSX.Element => {
  return (
    <div
      data-component="LayoutContentBody"
      data-page="CategoryPage"
      className="pt-10">
      <div className="bg-pink-200 h-[110px] flex flex-col items-center justify-center tempGradient">
        <div className="  font-semibold uppercase">check</div>
      </div>
    </div>
  )
}

export default withLayoutMain(CategoryPage)
