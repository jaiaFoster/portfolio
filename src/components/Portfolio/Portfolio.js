import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import sticky from "../../Assets/sticky-notes.jpeg";
import HoldingSketch from "../../Assets/HoldingSketch.png";
import CustomvsCOTS from "../../Assets/CustomvsCOTS.png";
import HoldingSketch2 from "../../Assets/Holdingsketch2.png";
import WholeSketch from "../../Assets/Wholesketch.png";
import HoldingSketch3 from "../../Assets/Holdingsketch3.png";
import WeldingSketch2 from "../../Assets/Weldingsketch2.png";
import CAD from "../../Assets/CAD.png";
import WeldingSketch from "../../Assets/Weldingsketch.png";

const phases = [
  { src: sticky, description: "Phase 1: Ideation and Brainstorming" },
  { src: HoldingSketch, description: "Phase 2: Initial Design Concepts" },
  { src: CustomvsCOTS, description: "Phase 3: Custom vs. COTS Components" },
  { src: HoldingSketch2, description: "Phase 4: Design Iteration 1" },
  { src: WeldingSketch, description: "Phase 5: Design Iteration 2" },
  { src: WeldingSketch2, description: "Phase 6: Advanced Welding Concepts" },
  { src: HoldingSketch3, description: "Phase 7: Final Design Iteration" },
  { src: WholeSketch, description: "Phase 8: Complete System Overview" },
  { src: CAD, description: "Phase 9: CAD Modeling and Finalization" },
];

const Portfolio = () => {
  return (
    <Container fluid style={{ paddingTop: '100px' }}>
      <Row className="mb-5">
        <Col>
          <h1 style={{ fontSize: "2.1em" }} className="purple"><strong>Portfolio</strong></h1>
          <h2 style={{ fontSize: '24px', color: '#fff' }}>Project 01: Thermocouple Welding Machine</h2>
          <p style={{ color: '#fff' }}>
            Dynamic Systems Inc. (DSI) contracted our capstone team at Rensselaer Polytechnic Institute (RPI)
            to revitalize and redesign their 40-year-old Thermocouple Welding Machine. Our journey began with brainstorming sessions, leading to a series of design iterations.
          </p>
        </Col>
      </Row>
      {phases.map((phase, index) => (
        <Row key={index} className="mb-4">
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src={phase.src} />
            </Card>
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>{phase.description}</Card.Title>
            </Card.Body>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Portfolio;
