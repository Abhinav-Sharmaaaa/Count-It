import React from "react";
import homepageImage from './images/homepage1.png';
import './css_files/home_page1.css'; // Ensure the CSS file is correctly named and located

const homepage1 = () => {
    return (
      <div className="page1">
        <div className="leftsec">
          <img 
            src= {homepageImage}
            alt="Inventory" 
          />
        </div>
        <div className="rightsec">
          <div className="welcome pad">
            Welcome to
          </div>
          <div className="dev pad">
            <b>COUNT-IT</b>
          </div>
          <div className="normalInfo pad">
            COUNT-IT is an inventory management system for colleges that simplifies asset tracking, reduces manual work, and provides real-time reports. It enhances resource management, improves efficiency, and supports better decision-making.
          </div>
        </div>
      </div>
    );
  }
export default homepage1;
