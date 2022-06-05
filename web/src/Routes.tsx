// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'
import NavbarLayout from 'src/layouts/Navbar/Navbar'
import ContainerLayout from 'src/layouts/Container/Container'
import SidebarLayout from 'src/layouts/Sidebar/Sidebar'
import PostDetails from './pages/PostDetailsPage/PostDetails'

const Routes = () => {
  return (
    <Router>
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="login">
        <Set wrap={NavbarLayout}>
          <Set wrap={ContainerLayout}>
            <Route path="/new" page={NewpostPage} name="newpost" />
            <Set wrap={SidebarLayout}>
              <Route path="/" page={HomePage} name="home" />
              <Route path="/my-posts" page={MyPostsPage} name="myposts" />
              <Route path="/posts/{id:Int}" page={PostDetails} name="postdetails" />
            </Set>
          </Set>
        </Set>
      </Private>
      <Route path="/login" page={LoginPage} name="login" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
