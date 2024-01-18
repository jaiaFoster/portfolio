gimport React from "react";
import { Col, Row } from "react-bootstrap";
import { FaCube, FaShapes, FaIndustry } from "react-icons/fa";
import { MdConveyorBelt } from "react-icons/md";
import { GiMechanicalArm } from "react-icons/gi";
import matlabImage from "../../Assets/matlab.png"; // Ensure the path is correct

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Design & Modeling Icons */}
      <Col xs={4} md={2} className="tech-icons">
        <FaCube />
        <p>3D Modeling</p> {/* Descriptive title */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaShapes />
        <p>CAD Design</p> {/* Descriptive title */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiMechanicalArm />
        <p>Robotic Design</p> {/* Descriptive title */}
      </Col>

      {/* Analysis & Simulation Icons */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={matlabImage} alt="MATLAB" style={{ width: '60px', height: '60px' }} />
        <p>MATLAB</p> {/* Descriptive title */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaIndustry />
        <p>Industrial Processes</p> {/* Descriptive title */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdConveyorBelt />
        <p>Conveyor Systems</p> {/* Descriptive title */}
      </Col>
    </Row>
  );
}

export default Techstack;
