
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Container from './Container'
const Cart = () => {

  return (
    <>
    <Meta title={"cart"} />
    <Header />
    <BreadCrumb title = "Your Shopping Cart" />
    <Container class1="cart-wrapper home-wrapper-2 py-5">
      <div className="row">
      <nav  aria-label="breadcrumb">
             <ol className="nav nav-pills">
             <li className="nav-item">
              <Link className='nav-link text-dark total-price' to="/cart">Cart</Link>
              </li>
             &nbsp; /&nbsp;
             <li className="nav-item">
              <Link className='nav-link text-dark total-price' to="/checkout">Information</Link>
              </li>
             &nbsp; /
             <li className="nav-item">
              <Link className='nav-link text-dark total-price' to="/payment">Payment</Link>
              </li>
              &nbsp; /
             <li className="nav-item">
              <Link className='nav-link text-dark total-price' to="/shipping">Shipping</Link>
            </li>
              </ol>
              </nav>
        <div className="col-12">
          <div className="cart-header d-flex justify-content-between align-items-center">
            <h4 className='cart-col-1'>PRODUCT</h4>
            <h4 className='cart-col-2'>PRICE</h4>
            <h4 className='cart-col-3'>QUANTITY</h4>
            <h4 className='cart-col-4'>TOTAL</h4>
          </div>
          <div className="cart-data d-flex justify-content-between align-items-center">
            <div className='cart-col-1 gap-15 d-flex align-items-center'>
              <div className='w-50 align-items-center'>
              <img className='w-50 checkout-image' src="images/airpods-max.png" alt="" />
              </div>
              <div className='w-75'>
                <h5 className="title">Airpod Max 2023</h5>
                <p>Color: White</p>
                <p>Size: </p>
                <p>price:$ 1500 </p>
              </div>
            </div>
            <div className='cart-col-2'>
              <h5 className="price">$ 1500</h5>
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
            <div className='cart-col-4'>$ 1500</div>
          </div>
        </div>
        <div>
      </div>
        <div className="col-12 py-2 mt-4">
          <div className='d-flex justify-content-baseline  align-items-center w-100'>
          <Link to='/product' className='shopping-button button'> Shopping</Link>
          <div className='d-flex justify-content-end  w-100'>
             <div className='d-flex flex-column justify-content-end'>
             <h4>Subtotal: $ 1500 </h4>
            <p>Taxes and shipping calculated at checkout</p>
            <Link to='/checkout' className='button checkout-button'>Checkout</Link>
            </div>
            
            
          </div>
          </div>
        </div>
      </div>
    </Container>
      
    <Footer />
    </>
  )
}

export default Cart
