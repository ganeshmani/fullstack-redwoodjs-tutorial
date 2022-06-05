import type { FindPosts } from 'types/graphql'
import { format } from 'date-fns'
import { useAuth } from '@redwoodjs/auth'
import type {
  CellSuccessProps,
  CellFailureProps,
  CellLoadingProps,
} from '@redwoodjs/web'

export const QUERY = gql`
  query FindPostDetail($id: Int!) {
    post: post(id: $id) {
      id
      title
      body
      author {
        id
      }
      comments {
        id
        body
        author {
          id
          name
        }
        createdAt
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

export const Success = ({ post }: CellSuccessProps<FindPosts>) => {
  const { currentUser } = useAuth()

  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold">{post.title}</h2>
        <p className="mt-2">{post.body}</p>
      </div>

      <div className="mt-4 ">
        <hr />
        <h3 className="my-4 text-lg font-semibold text-gray-900">Comments</h3>
        {post.comments.map((comment) => (
          <div
            key={comment.id}
            className="flex justify-between sm:px-2 sm:py-2 border rounded-lg"
          >
            <div className="my-4 flex-1  leading-relaxed">
              <strong>{comment.author.name}</strong>{' '}
              <span className="text-xs text-gray-400">
                {format(new Date(comment.createdAt), 'MMM d, yyyy h:mm a')}
              </span>
              <p>{comment.body}</p>
            </div>
            {currentUser && currentUser.id === post.author.id && (
              <div className="m-auto">
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
