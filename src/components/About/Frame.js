import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaIndustry, FaFlask, FaTools, FaCogs } from "react-icons/fa";
import { GiMechanicalArm, GiConveyorBelt } from "react-icons/gi";

function ManufacturingLab() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Manufacturing and Fabrication Icons */}
      <Col xs={4} md={2} className="tech-icons">
        <FaIndustry />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiConveyorBelt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCogs />
      </Col>

      {/* Lab Skills Icons */}
      <Col xs={4} md={2} className="tech-icons">
        <FaFlask />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiMechanicalArm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaTools />
      </Col>
    </Row>
  );
}

export default ManufacturingLab;
