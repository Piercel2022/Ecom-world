
import React from 'react'
import Header from '../components/Header'
import {AiTwotoneHome, AiFillInfoCircle, AiFillMail} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const Contact = () => {
  return (
    <>
    <Meta title={"Contact"} />
    <Header />
    <BreadCrumb title = "Contact Us" />
    <div className="contact-wrapper home-wrapper2 py-5">
     <div className="container-xxl">
      <div className="row">
        <div className="col-12">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10556.512067513686!2d7.706893372301644!3d48.588247640745735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796b7daff8249a5%3A0x60708f93d1f5c2e9!2sRue%20Marguerite%20Yourcenar%2C%2067200%20Strasbourg!5e0!3m2!1sfr!2sfr!4v1698852649022!5m2!1sfr!2sfr"
         width="600" height="450"
         className="border-0 w-100"
         title="myFrame"
         allowFullScreen=""
         loading="lazy" referrerPolicy="no-referrer-when-downgrade">
       </iframe>
        </div>
        <div className="col-12 mt-12">
          <div className="contact-inner-wrapper d-flex justify-content-between">
            <div>
              <h3 className="contact-title mb-4">Contact</h3>
              <form action="" className='d-flex flex-column gap-15'>
                <div>
                <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div>
                <input type="text" className="form-control" placeholder="Email" />
                </div>
                <div>
                <input type="tel" className="form-control" placeholder="Mobile Number" />
                </div>
                <div>
                <textarea name="" className="w-100 form-control" placeholder="Message" id="" cols="30" rows="10" />
                </div>
                <div>
                  <button className="button border-0">Submit</button>
                </div>
                
              </form>
            </div>
            <div>
              <h3 className="contact-title mb-4">Get In Touch With Us</h3>
              <div>
                <ul className='ps-0'>
                  <li className='mb-3 d-flex align-items-center gap-15'>
                    <AiTwotoneHome className='fs-5' />
                    <address className='mb-0'>Hno: 55 Marguerite Youcenar 67200 Strasbourg</address>
                  </li>
                  <li className='mb-3 d-flex align-items-center gap-15'>
                    <BsFillTelephoneFill className='fs-5' />
                    <a href="tel:+33 005765361">+33 005765361</a>
                    </li>
                  <li className='mb-3 d-flex align-items-center gap-15'>
                    <AiFillMail className='fs-5'/>
                    <a href="mailto:piercel.coder2022@gmail.com">piercel.coder2022@gmail.com</a>
                    </li>
                  <li className='mb-3 d-flex align-items-center gap-15'>
                    <AiFillInfoCircle className='fs-5'/>
                    <p className='mb-0'>Monday - Friday : 10 am to 8 pm</p>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </div>
     </div>
    </div>
    <Footer />
    </>
  )
}

export default Contact