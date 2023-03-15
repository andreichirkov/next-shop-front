import Head from "next/head"
import { withLayoutMain } from "../layouts/LayoutMain/LayoutMain"
import Posts from "../components/Posts/Posts";


function Index() {
  return (
    <>
      <Head>
        <title>Тайтл магазина</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-pink-100 h-screen">
        <div className='text-2xl text-center mb-4'>Home index.tsx</div>
        <Posts />
      </div>
    </>
  )
}

export default withLayoutMain(Index)
