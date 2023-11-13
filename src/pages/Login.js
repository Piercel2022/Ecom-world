import React from 'react'
import { Link} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Container from './Container'
import CustomInput from '../components/CustomInput'

const Login = () => {

  return (
    <>
    <Meta title={"login"} />
    <Header />
    <BreadCrumb title = "login" />
    <Container class1="login-wrapper home-wrapper-2 py-3">
      <div className="row">
        <div className="col-12">
          <div className="auth-card">
            <h3 className='text-center mb-3'>Login</h3>
            <form action="" className='d-flex flex-column align-items-center gap-30'>
            <CustomInput type="email" name="name" placeholder="Email" />
            <CustomInput className='mt-1' type="password" name="password" placeholder="Password" />
              
              <div>
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
              <div className='d-flex justify-content-center align-items-center gap-15'>
                <button className='button border-0' type='submit'>Login</button>
                <Link to='/signup' className='button signup'>Signup</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      </Container>
    <Footer />
    </>
  )
}

export default Login