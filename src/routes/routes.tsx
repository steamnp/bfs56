import { createBrowserRouter, Outlet } from 'react-router-dom'
import Home from '../pages/home'
import Contact from '../pages/contact'
import Service from '../pages/service'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Error from '../components/error'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <NavBar />
        <Outlet />
        <Footer />
      </>
    ),
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/service',
        element: <Service />,
      },
    ],
  },
])
