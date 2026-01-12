import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Cards.css"
const Cards = () => {
  return (
    <div className='container wholecard'>
        <div className='row'>
        <div className='col-12 col-lg-4 col-sm-10 col-md-12 ' >
         <div className='card card1'>
           <img  className='card-img-top' src="./app-development.png" alt="" />
           <div className='card-body'>
           <h5 className='card-tittle fw-bold'>App Development <span className="arrow">→</span></h5>
           <p className='card-text'>We offer hands-on exp to develop cross-platform and native apps for iOS, Android, Windows, and Mac, using the latest tools. Learn to store data in the cloud or on-premises and implement custom backend logic</p>
             <div className="explore"> EXPLORE LANDING <span>→</span></div>
           </div>
         </div>
        </div>
        <div className='col-12 col-lg-4 col-sm-10 col-md-12 mt-5'>
         <div className='card card2'>
           <img  className='card-img-top ' src="./thinking.png" alt="" />
           <div className='card-body'>
           <h5 className='card-tittle fw-bold'>Artificial Intelligence <span className="arrow">→</span></h5>
           <p className='card-text'>We offer hands-on exp to develop cross-platform and native apps for iOS, Android, Windows, and Mac, using the latest tools. Learn to store data in the cloud or on-premises and implement custom backend logic</p>
            <div className="explore"> EXPLORE LANDING <span>→</span></div>
           </div>
         </div>
        </div>
        <div className='col-12 col-lg-4 col-sm-10 col-md-12'>
         <div className='card card3'>
           <img  className='card-img-top ' src="./programming.png" alt="" />
           <div className='card-body'>
           <h5 className='card-tittle fw-bold'>Web Development <span className="arrow">→</span></h5>
           <p className='card-text'>We offer hands-on exp to develop cross-platform and native apps for iOS, Android, Windows, and Mac, using the latest tools. Learn to store data in the cloud or on-premises and implement custom backend logic</p>
            <div className="explore"> EXPLORE LANDING <span>→</span></div>
           </div>
         </div>
        </div>
        
        <div className='col-12 col-lg-4 col-sm-10 col-md-12  mt-5'>
         <div className='card card4'  >
           <img  className='card-img-top ' src="./pen-tool.png" alt="" />
           <div className='card-body'>
           <h5 className='card-tittle fw-bold'>Graphic Design <span className="arrow">→</span></h5>
           <p className='card-text'>We offer hands-on exp to develop cross-platform and native apps for iOS, Android, Windows, and Mac, using the latest tools. Learn to store data in the cloud or on-premises and implement custom backend logic</p>
            <div className="explore"> EXPLORE LANDING <span>→</span></div>
           </div>
         </div>
        </div>
        <div className='col-12 col-lg-4 col-sm-10 col-md-12 mt-5'>
         <div className='card  card5'  >
           <img  className='card-img-top ' src="./architecture.png" alt="" />
           <div className='card-body'>
           <h5 className='card-tittle fw-bold'>2d/3d Architecture <span className="arrow">→</span></h5>
           <p className='card-text'>We offer hands-on exp to develop cross-platform and native apps for iOS, Android, Windows, and Mac, using the latest tools. Learn to store data in the cloud or on-premises and implement custom backend logic</p>
            <div className="explore"> EXPLORE LANDING <span>→</span></div>
           </div>
         </div>
        </div>
        <div className='col-12 col-lg-4 col-sm-10 col-md-12 mt-5'>
         <div className='card card6'>
           <img  className='card-img-top ' src="./content-1.png" alt="" />
           <div className='card-body'>
           <h5 className='card-tittle fw-bold'>Digital Marketing <span className="arrow">→</span></h5>
           <p className='card-text'>We offer hands-on exp to develop cross-platform and native apps for iOS, Android, Windows, and Mac, using the latest tools. Learn to store data in the cloud or on-premises and implement custom backend logic</p>
            <div className="explore"> EXPLORE LANDING <span>→</span></div>
         
           </div>
         </div>
        </div>
        </div>
    </div>

  )
}

export default Cards;