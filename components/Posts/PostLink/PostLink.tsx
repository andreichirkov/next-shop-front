import Link from 'next/link';

const PostLink = ({ id }) => {
    /* this shallow routing has no effect */
    return (
        <Link className='p-4 border-2 border-amber-500' href={'posts/' + id} shallow={true}>
            {id}
        </Link>
    )
}

export default PostLink;