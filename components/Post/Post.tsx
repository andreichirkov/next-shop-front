function Post({ id, title, body }) {
  return (
    <div>
      <div>
        <h1 className='text-4xl'>{title}</h1>
        <h2>Айди: {id}</h2>
      </div>
      <p>Текст Боди: {body}</p>
      <button className='border border-emerald-600 p-2'>Like</button>
    </div>
  )
}

export default Post
