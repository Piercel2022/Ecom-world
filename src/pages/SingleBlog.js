import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import {BiArrowBack} from 'react-icons/bi'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'


const SingleBlog = () => {
  return (
    <>
    <Meta title={"dynamic blog name"} />
    <Header />
    <BreadCrumb title = "Dynamic Blog Name" />
    <div className="blog-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to='/blog' className='d-flex align-items-center gap-10'>
                <BiArrowBack />
                Go Back To Blogs</Link>
                <h3 className="title">
                    A Beautiful Sunday Morning Renaissance
                </h3>
                <img src="/images/blog-1.jpg"className="img-fluid w-100 my-4" alt="blog" />
                <p>It is a long established fact that a reader will be distracted by 
                  the readable content of a page when looking at its layout. 
                  The point of using Lorem Ipsum is that it has a more-or-less 
                  normal distribution of letters, as opposed to using 
                  'Content here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors 
                  now use Lorem Ipsum as their default model text, and a search for 
                  'lorem ipsum' will uncover many web sites still in their infancy. 
                  Various versions have evolved</p>
            </div>
          </div>
        </div>
      </div>

    </div>

    <Footer />

    </>
  )
}

export default SingleBlog