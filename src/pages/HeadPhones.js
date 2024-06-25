import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
const HeadPhones = () => {
  return (
    <>
    <Meta title={"headphones"} />
    <Header />
    <BreadCrumb title = "Headphones" />
    <Container class1='headphone-wrapper home-wrapper-2 py-5'>
    <div className="col-12 d-flex">
      <div className='row'>
        
      </div>
    </div>
    </Container>
    <Footer />
    </>
  )
}

export default HeadPhones
