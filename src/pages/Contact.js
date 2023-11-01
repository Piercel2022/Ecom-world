
import React from 'react'
import Header from '../components/Header'
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
                <input type="text" className="form-control" />
                </div>
                <div>
                <input type="text" className="form-control" />
                </div>
                <div>
                <input type="text" className="form-control" />
                </div>
                <div>
                <textarea name="" className="w-100 form-control" id="" cols="30" rows="10" />
                </div>
                
              </form>
            </div>
            <div>
              <h3 className="contact-title mb-4">Get In Touch With Us</h3>
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