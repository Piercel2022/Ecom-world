
import React from 'react'

const BlogCard = () => {
  return (
    <div className='col-3'>
     <div className='blog-card'>
        <div className="card-image">
            <img src="./images/blog-1.jpg"   className='img-fluid' alt="blog" />
        </div>
        <div className="blog-content">
            <p className='date'></p>
            <h5 className="title"></h5>
            <p className="desc"></p>
            <link>Read More</link>
        </div>
     </div>
    </div>
  )
}

export default BlogCard;