import { Link } from '@redwoodjs/router'
import type { FindPosts } from 'types/graphql'
import type {
  CellSuccessProps,
  CellFailureProps,
  CellLoadingProps,
} from '@redwoodjs/web'

export const QUERY = gql`
  query FindPosts {
    posts {
      id
      title
      body
      comments {
        id
      }
      createdAt
      updatedAt
    }
  }
`

export const Loading: React.FC<CellLoadingProps> = () => <div>Loading...</div>

export const Empty = () => <div>No posts found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div>Error loading posts: {error.message}</div>
)

export const Success = ({ posts }: CellSuccessProps<FindPosts>) => {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {' '}
            <Link to={`/posts/${post.id}`}>
              <div className="shadow rounded-lg p-2 my-2 cursor-pointer">
                <h4 className="text-xl font-medium">{post.title}</h4>

                <p>{post.body}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
