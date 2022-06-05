import { MetaTags, useMutation } from '@redwoodjs/web'
import { MutationcreateCommentArgs } from 'types/graphql'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useAuth } from '@redwoodjs/auth'

import NewComment from 'src/components/Comment/NewCommentForm/NewCommentForm'
import PostCell, { QUERY as PostCellQuery } from 'src/components/Home/PostCell'

const CREATE_COMMENT = gql`
  mutation CreateCommentMutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
    }
  }
`

interface Props {
  id: number
}
const PostDetails = ({ id }: Props) => {
  const [create] = useMutation<any, MutationcreateCommentArgs>(CREATE_COMMENT, {
    refetchQueries: [{ query: PostCellQuery, variables: { id } }],
  })
  const { currentUser } = useAuth()

  const onCommentAdded = async (values: string) => {
    try {
      await create({
        variables: {
          input: {
            postId: id,
            body: values,
            authorId: currentUser.id,
          },
        },
      })

      toast('Comment Added Successfully!')
    } catch (e) {
      toast.error(e.message)
    }
  }

  return (
    <div>
      <PostCell id={id} />

      <div className="mt-4">
        <NewComment onSubmit={onCommentAdded} />
      </div>
    </div>
  )
}

export default PostDetails
