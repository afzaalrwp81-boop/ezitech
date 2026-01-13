import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Review.css"
import ReviewSlider from './ReviewSlider';
import { motion } from "framer-motion";
const Review = () => {
  return (
    <div>
    <div className='container-fluid'>
     <div className='row'>
    <div className='col-12 col-lg-12 '>
      <motion.h1 className='text-center p-3 alumni'
       initial={{y:30, opacity:0 }}
       whileInView={{y:0, opacity:1 }}
       viewport={{once:false, amount:0.5}}
       transition={{duration:1 }}>
        Alumni😍</motion.h1>
      <motion.p className='Our'
      initial={{y:30, opacity:0}}
      whileInView={{y:0, opacity:1}}
      viewport={{once:false, amount:0.5}}
      transition={{duration:1}}>
        Our interns consistently share positive experiences, highlighting the practical skills and professional growth they achieve with us</motion.p>
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