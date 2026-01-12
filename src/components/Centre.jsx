import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Centre.css"
import Cards from './Cards';
import Review from './Review';
import Getstarted from './Getstarted';
const Centre = () => {
  return (
    <div>
    <div className='container'>
      <h1 className='text-center p-3 Shaping'>Shaping Empowering Future IT Talent Through a Seamless Process</h1>
<div className="container py-5">
  <div className="row">

    <div className="col-md-4">
      <div className="step-card" data-step="1">
        <span className="step-label">STEP 1</span>
        <h2>Discover<br />Tech</h2>
        <p>
        Explore internships across various technologies that align with your career goals. Start your journey by selecting a field that excites you.
        </p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="step-card" data-step="2">
        <span className="step-label">STEP 2</span>
        <h2>Evaluate<br />Skill</h2>
        <p>
          Our process includes an interview and a short evaluation task to assess your skills and readiness, helping us match you with the right opportunity.
        </p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="step-card" data-step="3">
        <span className="step-label">STEP 3</span>
        <h2>Track<br />Record</h2>
        <p>
         Once selected, gain access to our iPortal to monitor your internshi progress, track your achievements, and stay on top of your goals.
        </p>
      </div>
    </div>

  </div>
</div>
<div>
  <p className='text-center'>Still have a question? Browse <a href="">documentation</a> or <a href="">submit a ticket</a></p>
</div>
<div className='container mt-5 p-5'>
  <div className='row'>
   <div className='col-12 col-sm-10 col-md-4 col-lg-6'>
    <h1 className='Hundreds'>Hundreds of Successful Internships & Countings</h1>
    <p className='With mt-4 '>With a commitment to quality training and career advancement, we've empowered students from diverse backgrounds. Through structured Internship, hands-on projects, and expert mentorship, Ezitech Institute ensures that every student builds a solid foundation in IT.</p>
   </div>
     <div className="col-lg-6 mt-5">
            <div className="stats-card">
              <div className="row g-0">
                
                <div className="col-lg-6 col-sm-10 stat-box">
                  <h2>37+</h2>
                  <p>Industry MoUs</p>
                </div>

                <div className="col-lg-6 col-sm-10 stat-box">
                  <h2>327</h2>
                  <p>Active Students</p>
                </div>

                <div className="col-lg-6 col-sm-10 stat-box border-top">
                  <h2>98%</h2>
                  <p>Positive Feedback</p>
                </div>

                <div className="col-lg-6 col-sm-10 stat-box border-top">
                  <h2>6,663</h2>
                  <p>Successful Graduates</p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
   <Cards/>
   <Review/>
   <Getstarted/>
  
     </div>
     <hr />
   </div>
  )
}

export default Centre;