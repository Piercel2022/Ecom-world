import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'

const Shipping = () => {
  return (
    <>
    <Meta title={"shipping"} />
    <Header />
    <BreadCrumb title = "Your delivery is on its way" />
    <div className="delivery-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
        <nav style={{'--bs-breadcrumb-divider': '>'}} aria-label="breadcrumb">
             <ol className="breadcrumb">
             <li className="breadcrumb-item">
              <Link className='text-dark total-price' to="/cart">Cart</Link>
              </li>
             &nbsp; /&nbsp;
             <li className="breadcrumb-item">
              <Link className='text-dark total-price' to="/checkout">Information</Link>
              </li>
             &nbsp; /
             <li className="breadcrumb-item">
              <Link className='text-dark total-price' to="/payment">Payment</Link>
              </li>
              &nbsp; /
             <li className="breadcrumb-item">
              <Link className='text-dark total-price' to="/shipping">Shipping</Link>
            </li>
              </ol>
              </nav>
        
        </div>
      </div>

    </div>

    <Footer />
    </>
  )
}

export default Shipping
