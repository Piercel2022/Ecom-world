import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const Login = () => {
  return (
    <>
    <Meta title={"login"} />
    <Header />
    <BreadCrumb title = "login" />
    <div className="login-wrapper home-wrapper-2 py-3">
      <div className="row">
        <div className="col-12">
          <div className="auth-card">
            <h3 className='text-center mb-3'>Login</h3>
            <form action="" className='d-flex flex-column gap-30'>
              <div>
                <input type="email" name="email" placeholder='Email' className="form-control" />
              </div>
              <div>
                <input type="password" name="password" placeholder='Password' className="form-control" />
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

export default Login