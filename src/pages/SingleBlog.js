import React from 'react'
import Header from '../components/Header'
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
                <h3 className="title">
                    A beautiful Sunday Morning Renaissance
                </h3>
                <img src="/images/blog-1.jpg" alt="blog" />
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