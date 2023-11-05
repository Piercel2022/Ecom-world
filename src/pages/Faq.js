import React from 'react'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Header from '../components/Header'

const Faq = () => {
  return (
    <div>
    <Meta title={"faq"} />
    <Header />
    <BreadCrumb title = "Faq" />
    <Footer />
    </div>
  )
}

export default Faq
