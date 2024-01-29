// Portfolio.js
import sticky from "../../Assets/sticky-notes.jpeg";
import React from 'react';

const Portfolio = () => {
  return (
    
    <div>
        <h1 style={{ fontSize: "2.1em", paddingTop: "100px", paddingBottom: "20px" }}>
        <strong className="purple"> Portfolio</strong>
        </h1>
        <h2 style={{ fontSize: '24px', marginTop: '0', color: 'white', textAlign: "left"}}>
          Project 01: Thermocouple Welding Machine
        </h2>
            <h3 style = {{ fontSize: '12px', textAlign: "left", color: 'white', paddingTop: '10px'}}>
            Dynamic Systems Inc. or DSI contracted our capstone team at Rensselaer Polytechnic Institute (RPI) with a project: to revitalize and redesign their 40 year old Thermocouple Welding Machine.

            </h3>
  
      
      <div style={{ flex: 1 }}>
        <img src={sticky} alt="Sticky Notes" style={{ maxWidth: "100%" }} />
      
    </div>

    </div>
    
  );
}

export default Portfolio;
