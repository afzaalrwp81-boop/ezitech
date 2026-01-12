import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Review.css"
import ReviewSlider from './ReviewSlider';
const Review = () => {
  return (
    <div>
    <div className='container-fluid'>
     <div className='row'>
    <div className='col-12 col-lg-12 '>
      <h1 className='text-center p-3 alumni'>Alumni😍</h1>
      <p className='Our'>Our interns consistently share positive experiences, highlighting the practical skills and professional growth they achieve with us</p>
    </div>
     </div>
     <div className='conatiner-fluid'>
   
     </div>
    </div>
    <ReviewSlider/>
    </div>
  )
}

export default Review;