
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import speakers from '../home-speakers.jpg'
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom'
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
                <p>Color: Black</p>
                <p>Size: L</p>
              </div>
            </div>
            <div className='cart-col-2'>
              <h5 className="price">$ 500</h5>
              </div>
            <div className='cart-col-3 d-flex align-items-center gap-15'>
              <div>
                <input 
                type="number" 
                className='form-control' 
                min={1}
                max={10}
                name="" id="" />
              </div>
              <div>
              <AiFillDelete className='fs-5 text-danger' />
              </div>
            </div>
            <div className='cart-col-4'>$ 500</div>
          </div>
        </div>
        <div className="col-12 py-2 mt-4">
          <div className='d-flex justify-content-between'>
          <Link to='/product/' className='button'>Continue Shopping</Link>
          <div className='d-flex flex-column justify-content-end'>
            <h4>Subtotal: $ 500</h4>
            <p>Taxes and shipping calculated at checkout</p>
            <Link to='/checkout' className='button'>Checkout</Link>
          </div>
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
