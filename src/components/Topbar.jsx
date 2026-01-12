import React from 'react'
import "./Topbar.css"
const TopBar = () => {
  return (
   
    <div className="top-bar">
      <div className="container p-3">
        <div className="row align-items-center">
          <div className="col-md-9 col-sm-12 d-flex flex-wrap align-items-center text-white">
            <span  className="me-4   text-uppercase">
             <i className="fa-solid fa-phone me-2"></i>  +923455555396
            </span>
            <span className="me-4 text-uppercase">
             <i className="fa-solid fa-envelope me-2"></i> info@ezitech.org
            </span>
            <span className=" text-uppercase">
             <i className="fa-solid fa-location-dot me-2"></i>  Westridge 1, Office #304-G Peshawar Road, Rawalpindi, Pakistan
            </span>
          </div>
          <div className="col-md-3 col-sm-12 text-md-end text-start mt-2 mt-md-0">
            <span><a className='text-white m-2 fs-5' href="https://web.facebook.com/ezitech?_rdc=1&_rdr#"><i className="fa-brands fa-facebook-f"></i></a></span>
            <span><a className='text-white m-2 fs-5' href="https://www.instagram.com/ezitechpk/"><i className="fa-brands fa-instagram"></i></a></span>
            <span><a className='text-white m-2 fs-5' href="https://www.behance.net/ezitech"><i className="fa-brands fa-behance"></i></a></span>
            <span><a className='text-white m-2 fs-5' href="https://pk.linkedin.com/company/ezitechpk"><i className="fa-brands fa-linkedin-in"></i></a></span>
            <span><a className='text-white m-2 fs-5' href=""><i className="fa-brands fa-youtube"></i></a></span>
          </div>

        </div>
      </div>
    </div>
    
  )
}
export default TopBar;