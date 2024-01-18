import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaCube, FaShapes, FaIndustry } from "react-icons/fa";
import { DiMatlab } from "react-icons/di";
import { GiMechanicalArm, GiConveyorBelt } from "react-icons/gi";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Design & Modeling Icons */}
      <Col xs={4} md={2} className="tech-icons">
        <FaCube />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaShapes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiMechanicalArm />
      </Col>

      {/* Analysis & Simulation Icons */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMatlab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaIndustry />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiConveyorBelt />
      </Col>
    </Row>
  );
}

export default Techstack;
