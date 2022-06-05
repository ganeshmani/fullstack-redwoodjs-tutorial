export const schema = gql`
  type Comment {
    id: Int!
    body: String!
    post: Post!
    postId: Int!
    author: User!
    authorId: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    comments: [Comment!]! @requireAuth
    comment(id: Int!): Comment @requireAuth
  }

  input CreateCommentInput {
    body: String!
    postId: Int!
    authorId: Int!
  }

  input UpdateCommentInput {
    body: String
    postId: Int
    authorId: Int
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment! @requireAuth
    updateComment(id: Int!, input: UpdateCommentInput!): Comment! @requireAuth
    deleteComment(id: Int!): Comment! @requireAuth
  }
`
