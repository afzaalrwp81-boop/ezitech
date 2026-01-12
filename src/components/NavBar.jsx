import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./NavBar.css"
import TopBar from './TopBar';

const NavBar = () => {
  return (
    <div>
     
     

      <section className="hero-section" >
        <div className="hero-overlay"></div>
        
        <TopBar/>

        
        <nav className="navbar navbar-expand-lg bg-light p-3 text-center rounded-4 container mb-3 position-relative z-2">
          <img className='navbar-brand imgedit ' src="./ezitechlogo.png" alt="" />

          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav mx-auto gap-4">
              <li className="nav-item"><a className="nav-link fs-6 fw-semibold text-dark text-uppercase" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link fs-6 fw-semibold text-dark text-uppercase" href="https://ezitech.org/about-us/">About</a></li>
              <li className="nav-item"><a className="nav-link fs-6 fw-semibold text-dark text-uppercase" href="#">Internships</a></li>
              <li className="nav-item"><a className="nav-link fs-6 fw-semibold text-dark text-uppercase" href="#">Courses</a></li>
              <li className="nav-item"><a className="nav-link fs-6 fw-semibold text-dark text-uppercase" href="#">Careers</a></li>
              <li className="nav-item"><a className="nav-link fs-6 fw-semibold text-dark text-uppercase" href="https://ezitech.org/tech-blogs/">TechBlogs</a></li>
            </ul>
<a className="btn btn-primary rounded-pill px-4" href="https://interns.ezitech.org/?_gl=1*1ewnm3b*_ga*NzQ0OTYwMDU1LjE3Njc5ODQ0NDI.*_ga_3RZFV4KVYG*czE3NjgwMTcwMzQkbzIkZzEkdDE3NjgwMTg5NzYkajYwJGwwJGgw" target='-blank'>Intern Registration</a>
          </div>
        </nav>

     
        <div className="container d-flex align-items-center justify-content-center mt-5 position-relative z-2">
          <div className="text-center text-white p-3">
            <h1 className='contanier Learn'>Learn the fundamentals with our Experts in <span style={{color:"skyblue"}}>Programming</span></h1>
            <p className="Utilize">Utilize Effective Learning to Reach Your Potential!</p>

            <input
              className="form-control form-control-lg rounded-pill mt-4 mx-auto"
              style={{ maxWidth: "450px", height:"60px" }}
              placeholder="Search Internships..."
            />
          </div>
          
        </div>
       <p className="text-white text-center position-relative fs-5 z-2 mt-3">
         Explore our more useful products 🤍
       </p>
       <div className="container position-relative d-flex z-2 mt-4">
  <div className="row justify-content-center align-items-center text-center d-flex imagesdown g-4">

    <div className="col-sm-3 col-md-3 col-lg-3">
      <img
        className="img-fluid"
        src="./EZIBLOGS-DG-1024x222-1.png"
        alt=""
      />
    </div>

    <div className=" col-sm-3 col-md-3 col-lg-3">
      <img
      style={{maxHeight:"40px"}}
        className="img-fluid"
        src="./white-ezipos-1024x223-1.png"
        alt=""
      />
    </div>

    <div className=" col-sm-3 col-md-3 col-lg-3">
      <img
      
        className="img-fluid"
        src="./white-lgooo-01-1024x501-1 (1).png"
        alt=""
      />
    </div>

  </div>
</div>

      </section>
 </div>
    
  )
}

export default NavBar;