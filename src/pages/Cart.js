
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Meta from './Meta'
import BreadCrumb from './BreadCrumb'
const Cart = () => {
  return (
    <>
    <Meta title={"cart"} />
    <Header />
    <BreadCrumb title = "Cart" />
      
    <Footer />
    </>
  )
}

export default Cart
