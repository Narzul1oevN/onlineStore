import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import SignUp from './pages/register'
import SingleProduct from './pages/singleProduct'
import logIn from './pages/logIn';
import Form from './pages/logIn'
import CartPage from './pages/cartPage'
import AllProduct from './pages/allProduct'
import WishlistPage from './pages/wishlistPage'



const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "contact",
          element: <Contact/>
        },
        {
          path: "aboutus",
          element: <About/>
        },
        {
          path: "signUp",
          element: <SignUp/>
        },
        {
          path: "allProduct",
          element: <AllProduct/>
        },
        {
          path: "allProduct/:id",
          element: <AllProduct/>
        },
        {
          path: "user/:id",
          element: <SingleProduct/>
        },
        {
          path: "logIn",
          element: <Form/>
        },
        {
          path: "cart",
          element: <CartPage/>
        },
        {
          path: "wishlist",
          element: <WishlistPage/>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
