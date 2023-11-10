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
            <form action="" className='d-flex flex-column gap-30'>
            <CustomInput type="text" name="name" placeholder="Name" />
              <div>
                <input  className="form-control" />
              </div>
              <div>
                <input type="email" name="email" placeholder='Email' className="form-control" />
              </div>
              <div>
                <input type="tel" name="mobile" placeholder='Phone Number' className="form-control" />
              </div>
              <div>
                <input type="password" name="password" placeholder='Password' className="form-control" />
              </div>
              
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