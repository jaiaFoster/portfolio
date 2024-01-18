import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaRulerCombined, FaDraftingCompass, FaHammer, FaMicroscope } from "react-icons/fa";
import { GiWrench } from "react-icons/gi";
import CncMachine from "../../Assets/cnc.png";

function AnalysisSimulation() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Manufacturing & Lab Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <FaRulerCombined />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDraftingCompass />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CncMachine />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHammer />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiWrench />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaMicroscope />
      </Col>
    </Row>
  );
}

export default AnalysisSimulation;
