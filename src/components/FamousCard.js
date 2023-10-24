
import React from 'react'
import Image1  from '../images/famous.jpg';
import Image2  from '../images/famous-2.jpeg';

const FamousCard = () => {
  return (
    <>
    <div className=' gap-10'>
          <div className="famous-card position-relative d-flex gap-10">
          <div className='famous-image'>
              <img src={Image1} alt="famous-1" />
            </div>
            
             <div className="famous-content position-absolute">
            <h5>Big Screen</h5>
            <h6>Smart Watches Series 7</h6>
            <p>From $399.99 or $16.45/mo. for 24 mo.</p>
             </div>
        </div>

    </div>

    </>
  )
}

export default FamousCard