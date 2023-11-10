
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb'
import Container from './Container';

const Iphone = () => {
  return (
    <>
    <Meta title={"iphones"} />
    <Header />
    <BreadCrumb title = "Iphones" />
    <Container class1='iphone-wrapper home-wrapper-2 py-5'>

    </Container>
     <Footer />
    </>
  )
}

export default Iphone