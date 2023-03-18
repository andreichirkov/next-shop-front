import Link from "next/link"
import { Post } from "../../../inferfaces/post.interface"

interface PostLinkProps {
  post: Post
}

const PostLink = ({ post }: PostLinkProps) => {
  // console.log('post', post)

  /* this shallow routing has no effect */
  return (
    <Link
      className="p-4 border-2 border-amber-500"
      href={"posts/" + post.id}
      shallow={true}>
      {post.id}
    </Link>
  )
}

export default PostLink
