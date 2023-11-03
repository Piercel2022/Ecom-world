import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const ResetPassword = () => {
  return (
    <>
    <Meta title={"reset password"} />
    <Header />
    <BreadCrumb title = "Reset Password" />
    <div className="container-xxl">
    <div className="auth-card">
            <h3 className='text-center mb-3'>Reset Password</h3>
            <form action="" className='d-flex flex-column gap-30'>
             
              <div>
                <input type="password" name="password" placeholder='Password' className="form-control" />
              </div>
              <div>
                <input type="password" name="password" placeholder='Confirm Password' className="form-control" />
              </div>
              
              <div className='d-flex justify-content-center align-items-center gap-15'>
                <button className='button border-0'>Ok</button>
              </div>
            </form>
    </div>
    </div>

    <Footer />
    </>
  )
}

export default ResetPassword