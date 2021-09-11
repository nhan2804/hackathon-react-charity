import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const NotFound = () => {
  return (
    <>
      <div className="not-found parallax">
        <div className="sky-bg"></div>
        <div className="wave-7"></div>
        <div className="wave-6"></div>
        <Link className="wave-island" to="/project"> <img
            src="http://res.cloudinary.com/andrewhani/image/upload/v1524501929/404/island.svg"
            alt="Island"
          /></Link>
      
        <div className="wave-5"></div>
        <div className="wave-lost wrp">
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </div>
        <div className="wave-4"></div>
        <div className="wave-boat">
          <img
            className="boat"
            src="http://res.cloudinary.com/andrewhani/image/upload/v1524501894/404/boat.svg"
            alt="Boat"
          />
        </div>
        <div className="wave-3"></div>
        <div className="wave-2"></div>
        <div className="wave-1"></div>
        <div className="wave-message">
          <p>Page not found</p>
          <p><Link to="/project">Quay về trang chủ</Link></p>
        </div>
      </div>
      
    </>
  );
};

export default NotFound;
