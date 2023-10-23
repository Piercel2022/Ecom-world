
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'
const Layout = () => {
  return (
    <>
      <Header/>
       <Outlet/>
       <Footer/>
    </>
  )
}

export default Layout
