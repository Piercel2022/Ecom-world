import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
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
             <li className="breadcrumb-item">
              <Link className='text-dark' to="/cart">Cart</Link>
              </li>
             &nbsp; /
             <li className="breadcrumb-item">
              <Link className='text-dark' to="/cart">Information</Link>
              </li>
             &nbsp; /
             <li className="breadcrumb-item">
              <Link className='text-dark' to="/cart">Payment</Link>
              </li>
              &nbsp; /
             <li className="breadcrumb-item">
              <Link className='text-dark' to="/cart">Shipping</Link>
            </li>
              </ol>
                        </nav>
                        <h4 className="title">Contact Information</h4>
                        <p className="user-details total">
                          Navdeep Pambolo (manulo-sekada@gmail.com)
                        </p>
                        <h4>Shipping Address</h4>
                        <form 
                        action="" 
                        className="d-flex flex-wrap justify-content-between gap-15"
                        >
                          <div className='w-100' >
                            <select className='options' 
                            >
                              <option value="" selected disabled>Select Country</option>
                            </select>
                          </div>
                          <div className='flex-grow-1'>
                            <input placeholder="First Name" type="text" className="form-control" />
                          </div>
                          
                          <div className='flex-grow-1'>
                            <input placeholder="Last Name" type="text" className="form-control" />
                          </div>
                          
                          <div className='w-100'>
                          <input placeholder="Address" type="text" className="form-control" />
                          </div>
                          
                          <div className='w-100'>
                          <input placeholder="Apartment, Suite" type="text" className="form-control" />
                          </div>
                          <div className='flex-grow-1'>
                         <input placeholder="City" type="text" className="form-control" />
                         </div>
                         <div className='flex-grow-1'>
                         <select
                         name=""
                         placeholder="State"
                         className='form-control form-select'
                         id="">
                         <option value="" selected disabled>Select State</option>
                         </select>
                         </div>
                         
                         <div className='flex-grow-1'>
                         <input placeholder="Zipcode" type="text" className="form-control" />
                         </div>
                         <div className="w-100">
                          <div className="d-flex justify-content-between align-items-center">
                            <Link to='/cart' className='text-dark'>
                            <BiArrowBack className='me-2' /> Return To Cart</Link>
                            <Link to='/payment' className='button'>Continue To Payment</Link>
                          </div>
                         </div>
                          </form>
                    </div>
                </div>
                <div className="col-5">
                  
                  <div className='border-bottom py-4'>
                    <div className='w-75 d-flex gap-10'>
                      <div className='w-25 position-relative'>
                        <span 
                        className='badge bg-secondary text-white rounded-circle'
                        style={{top:"-10px", right: "2px"}}>
                        1</span> 
                        <img className='img-fluid checkout-image' src="images/airpods-max.png" alt="" />
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className='border-bottom py-4'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <h4 className='total'>Subtotal</h4>
                    <h6 className='total-price'>$ 1500</h6>
                  </div>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='mb-0'>Shipping</p>
                    <p className='mb-0'>$ 90</p>
                  </div>
                  </div>
                  <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                    <h4 className='total'>Total</h4>
                    <h6 className='total-price'>$ 1590</h6>
                  </div>
                </div>
            </div>
        </div>
      </div>
    <Footer />
    </>
  )
}

export default Checkout
