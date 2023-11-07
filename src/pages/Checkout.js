import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
const Checkout = () => {
  return (
    <>
    <Meta title={"checkout"} />
    <Header />
    <BreadCrumb title = "Your Checkout" />
      <div className="checkout-wrapper home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-7">
                    <div className="checkout-left-data">
                        <h3 className='website-name'>Ecom world</h3>
                        <nav style={{'--bs-breadcrumb-divider': '>'}} aria-label="breadcrumb">
             <ol className="breadcrumb">
             <li className="breadcrumb-item"><a href="/cart">Cart</a></li>
             <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                     </ol>
                        </nav>
                        <h4 className="title">Contact Information</h4>
                        <p className="user-details">
                          Navdeep Pambolo (manulo-sekada@gmail.com)
                        </p>
                        <form action="" className='d-flex justify-content-between gap-15'>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>

                        </form>
                    </div>
                </div>
                <div className="col-5"></div>
            </div>
        </div>
      </div>
    <Footer />
    </>
  )
}

export default Checkout
