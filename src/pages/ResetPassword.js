import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Container from './Container'
import CustomInput from '../components/CustomInput'

const ResetPassword = () => {
  return (
    <>
    <Meta title={"reset password"} />
    <Header />
    <BreadCrumb title = "Reset Password" />
    <Container class1="reset-password-wrapper home-wrapper-2">
    <div className="auth-card">
            <h3 className='text-center mb-3'>Reset Password</h3>
            <form action="" className='d-flex flex-column align-items-center gap-30'>
             
            <CustomInput className='' type="password" name="password" placeholder="Password" />
            <CustomInput className='mt-1' type="password" name="password" placeholder="Confirm Password" />
              
              <div className='d-flex justify-content-center align-items-center gap-15'>
                <button className='button border-0'>Ok</button>
              </div>
            </form>
    </div>
    </Container>

    <Footer />
    </>
  )
}

export default ResetPassword