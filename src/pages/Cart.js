
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
const Cart = () => {
  return (
    <>
    <Meta title={"cart"} />
    <Header />
    <BreadCrumb title = "Your Shopping Cart" />
    <section className="cart-wrapper">
      
    </section>
      
    <Footer />
    </>
  )
}

export default Cart
