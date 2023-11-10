import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import CustomInput from '../components/CustomInput'

const Signup = () => {
  return (
    <>
    <Meta title={"signup"} />
    <Header />
    <BreadCrumb title = "Create An Account" />
    <div className="login-wrapper home-wrapper-2 py-3">
      <div className="row">
        <div className="col-12">
          <div className="container-xxl">
          <div className="auth-card">
            <h3 className='text-center mb-3'>Sign Up</h3>
            <form action="" className='d-flex flex-column align-items-center gap-30'>
            <CustomInput type="text" name="name" placeholder="Name" />
            <CustomInput type="email" name="name" placeholder="Email" />
            <CustomInput type="tel" name="mobile" placeholder="Mobile Number" />
            <CustomInput className='mt-1' type="password" name="password" placeholder="Password" />
              
              <div className='d-flex justify-content-center align-items-center gap-15'>
                <button className='button border-0'>Create</button>
              </div>
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
    </>
  )
}

export default Signup