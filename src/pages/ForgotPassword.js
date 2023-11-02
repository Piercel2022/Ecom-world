import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const ForgotPassword = () => {
  return (
    <>
    <Meta title={"forgot password"} />
    <Header />
    <BreadCrumb title = "Forgot Password" />
    <div className="login-wrapper home-wrapper-2 py-3">
      <div className="row">
        <div className="col-12">
          <div className="auth-card">
            <h3 className='text-center mb-3'>Reset Your Password</h3>
            <p className="text-center">
              We will send you an email to reset your password
            </p>
            <form action="" className='d-flex flex-column gap-30'>
              <div>
                <input type="email" name="email" placeholder='Email' className="form-control" />
              </div>
        
              <div>
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
              <div className='d-flex justify-content-center align-items-center gap-15'>
                <button className='button border-0'>Login</button>
                <Link className='button signup'>Signup</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default ForgotPassword