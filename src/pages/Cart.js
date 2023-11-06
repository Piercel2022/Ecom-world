
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import speakers from '../home-speakers.jpg'
const Cart = () => {
  return (
    <>
    <Meta title={"cart"} />
    <Header />
    <BreadCrumb title = "Your Shopping Cart" />
    <section className="cart-wrapper home-wrapper-2 py-2">
     <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <div className="cart-header d-flex justify-content-between align-items-center">
            <h4 className='cart-col-1'>PRODUCT</h4>
            <h4 className='cart-col-2'>PRICE</h4>
            <h4 className='cart-col-3'>QUANTITY</h4>
            <h4 className='cart-col-4'>TOTAL</h4>
          </div>
          <div className="cart-data d-flex justify-content-between align-items-center">
            <div className='cart-col-1 gap-15 d-flex align-items-center'>
              <div className='w-25'>
                <img src={speakers} className='img-fluid' alt="speaker" />
              </div>
              <div className='w-75'>
                <h5 className="title">Home Speakers</h5>
                <p className="color">Black</p>
                <p className="size">L</p>
              </div>
            </div>
            <div className='cart-col-2'>
              <h5 className="price">$ 500</h5>
              </div>
            <div className='cart-col-3'>
              <div>
                <input type="number" className='form-control' name="" id="" />
              </div>
              <div></div>
            </div>
            <div className='cart-col-4'>$ 500</div>
          </div>
        </div>
      </div>
     </div>
    </section>
      
    <Footer />
    </>
  )
}

export default Cart
