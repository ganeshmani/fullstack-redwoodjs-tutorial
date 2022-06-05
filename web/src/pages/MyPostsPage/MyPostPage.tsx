import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'

import MyPostCell from 'src/components/Home/MyPostCell'
const MyPostPage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <MyPostCell id={currentUser.id} />
    </>
  )
}

export default MyPostPage
