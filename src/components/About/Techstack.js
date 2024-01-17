import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaCube, FaShapes, FaFileWord, FaFileExcel, FaFilePowerpoint, FaIndustry, FaPython, FaCode } from "react-icons/fa";
import { DiMatlab, DiCode, DiTerminal } from "react-icons/di";
import { GiGearStickPattern } from "react-icons/gi";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Solid Modeling Icons */}
      <Col xs={4} md={2} className="tech-icons">
        <FaCube />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaShapes />
      </Col>

      {/* Technologies Icons */}
      <Col xs={4} md={2} className="tech-icons">
        <FaFileWord />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFileExcel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFilePowerpoint />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiTerminal />
      </Col>

      {/* Lab Skills Icons */}
      <Col xs={4} md={2} className="tech-icons">
        <FaIndustry />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMatlab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiGearStickPattern />
      </Col>

      {/* Programming Icons */}
      <Col xs={4} md={2} className="tech-icons">
        <FaPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCode />
      </Col>
    </Row>
  );
}

export default Techstack;
