
import React from 'react'
import {BsLinkedin, BsGithub, BsYoutube, BsInstagram} from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
    <footer className='py-3'>
    <div className="container-xxl">
    <div className="row">
    <div className="col-7">
      <div className="footer-top-data d-flex">
        <img src="images/newsletter.png" alt="newsletter" />
        <h2 className='mb-0 text-white'>Sign Up For Newsletter</h2>
      </div>

    </div>
    <div className="col-5">
                <div className="input-group">
               <input type="text"
               className="form-control py-2"
               placeholder="Your Email Address..."
               aria-label="Your Email Address..."
               aria-describedby="basic-addon2" />
                <span className="input-group-text p-3" id="basic-addon2">
               Subscribe</span>
               </div>
      </div>
</div>

    </div>
    </footer>

    <footer className='py-3'>
  <div className="container-xxl">
    <div className="row">
      <div className="col-4">
       <h4 className='text-white mb-4'>Contact</h4>
     <div>
      <address className='text-white'>
       Hno: 55 Avenue Marguerite Youcenar <br /> 67200 Strasbourg
      </address>
      <a href="tel:+33 005765361" className="mt-4 text-white d-block mb-3">+33 005765361</a>
      <a href="mailto: piercel.coder2022@gmail.com" className="mt-4 text-white d-block mb-3">piercel.coder2022@gmail.com</a>
      <div className="social_icons d-flex align-items-center gap-30">
        <a className='text-white fs-5' href="https://linkedin.com">
          <BsLinkedin  />
        </a>
        <a className='text-white fs-5' href="https://github.com">
        <BsGithub  />
        </a>
        <a className='text-white fs-5' href="https://youtube.com">
        <BsYoutube  />
        </a>
        <a className='text-white fs-5' href="https://instagram.com">
           <BsInstagram />
        </a>
      </div>
     </div>
      </div>
      <div className="col-3">
      <h4 className='text-white mb-4'>Information</h4>
      <div className='footer-links d-flex flex-column'>
          <Link to='privacy-policy'  className='text-white mb-1 py-2'>Privacy Policy</Link>
          <Link to='refund-policy' className='text-white mb-1 py-2'>Refund Policy</Link>
          <Link to='shipping-policy' className='text-white mb-1 py-2'>Shipping Policy</Link>
          <Link to='terms-conditions' className='text-white mb-1 py-2'>Terms & Conditions</Link>
        </div>

      </div>
        <div className="col-3">
        <h4 className='text-white mb-4'>Account</h4>
        <div className='footer-links d-flex flex-column'>
          <Link to ='/about'className='text-white mb-1 py-2'>About Us</Link>
          <Link to='/faq' className='text-white mb-1 py-2'>Faq</Link>
          <Link to ='/contact' className='text-white mb-1 py-2'>Contact</Link>
        </div>

        </div>
        <div className="col-2">
        <h4 className='text-white mb-4'>Quick Links</h4>
        <div className='footer-links d-flex flex-column'>
          <Link to ='/laptops' className='text-white mb-1 py-2'>Laptops</Link>
          <Link to ='/headphones' className='text-white mb-1 py-2'>Headphones</Link>
          <Link to ='/tablets' className='text-white mb-1 py-2'>Tablets</Link>
          <Link to ='/watches' className='text-white mb-1 py-2'>Watch</Link>
        </div>
        </div>
      
         </div>
  </div>
    </footer>

    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
              <div className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered By Ecom World
              </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer