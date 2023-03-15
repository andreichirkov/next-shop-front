import PostLink from "./PostLink/PostLink"

export default function Posts()  {
  const posts = new Array(20).fill(<></>)

  return (
    <div className='flex justify-between px-40'>
      {posts.map((post, index) => (
        <PostLink key={index + 1} id={index + 1} />
      ))}
    </div>
  )
}


