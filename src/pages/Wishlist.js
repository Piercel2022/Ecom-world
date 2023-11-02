
import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Wishlist = () => {
  return (
    <>
    <Meta title={"wishlist"} />
    <Header />
    <BreadCrumb title = "wishlist" />
      <div className="wishlist-wrapper">
        
      </div>
    <Footer />
    </>
  )
}

export default Wishlist