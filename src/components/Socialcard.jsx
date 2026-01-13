import React from "react";
import "./Socialcard.css";

const Socialcard = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        
        <div className="col-lg-3 col-md-3 col-sm-6 text-center boc"  onClick={() => window.open("https://www.linkedin.com/company/ezitechpk/", "_blank")}>
          <i className="fa-brands fa-linkedin card-icon"></i>
          <h6 className="card-title">Follow us on Linkedin</h6>
          <p className="card-text1">Latest news and updates</p>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-6 text-center boc"  onClick={() => window.open("https://www.youtube.com/@ezitechpk", "_blank")}>
          <i className="fa-brands fa-youtube card-icon"></i>
          <h6 className="card-title">Follow us on Youtube</h6>
          <p className="card-text1">Latest news and updates</p>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-6 text-center boc " onClick={() => window.open("https://web.facebook.com/ezitech?_rdc=1&_rdr#", "_blank")}>
          <i className="fa-brands fa-square-facebook card-icon"></i>
          <h6 className="card-title">Follow us on Facebook</h6>
          <p className="card-text1">Latest news and updates</p>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-6 text-center boc1" onClick={() => window.open("https://www.whatsapp.com/channel/0029VamDrzGJpe8ZLcablR16", "_blank")}>
          <i className="fa-brands fa-whatsapp card-icon"></i>
          <h6 className="card-title">Whatsapp Channel</h6>
          <p className="card-text1">Join the Community</p>
        </div>

      </div>
    </div>
  );
};

export default Socialcard;
