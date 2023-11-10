import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from './Container'

const Payment = () => {
  return (
    <>
    <Meta title={"payment"} />
    <Header />
    <BreadCrumb title = "Your Payment" />
    <Container class1="payment-wrapper home-wrapper-2 py-5">
        <div className="row">
        <nav style={{'--bs-breadcrumb-divider': '>'}} aria-label="breadcrumb">
             <ol className="breadcrumb">
             <li className="breadcrumb-item">
              <Link className='text-dark total-price' to="/cart">Cart</Link>
              </li>
             &nbsp; /&nbsp;
             <li className="breadcrumb-item">
              <Link className='text-dark total-price' to="/cart">Information</Link>
              </li>
             &nbsp; /
             <li className="breadcrumb-item">
              <Link className='text-dark total-price' to="/cart">Payment</Link>
              </li>
              &nbsp; /
             <li className="breadcrumb-item">
              <Link className='text-dark total-price' to="/cart">Shipping</Link>
            </li>
              </ol>
              </nav>
        
        </div>
      </Container>

    <Footer />
    </>
  )
}

export default Payment
