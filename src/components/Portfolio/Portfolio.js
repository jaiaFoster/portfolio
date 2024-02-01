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
  { src: sticky, title: "Phase 1: Ideation and Brainstorming", description: "Dynamic Systems Inc. (DSI) contracted our capstone team at Rensselaer Polytechnic Institute (RPI) to revitalize and redesign their 40-year-old Thermocouple Welding Machine. Our journey began with brainstorming sessions, leading to a series of design iterations." },
  { src: HoldingSketch, title: "Phase 2: Initial Design Concepts", description: "Placeholder text about thought process for Phase 2." },
  { src: CustomvsCOTS, title: "Phase 3: Custom vs. COTS Components", description: "Placeholder text about thought process for Phase 3." },
  { src: HoldingSketch2, title: "Phase 4: Design Iteration 1", description: "Placeholder text about thought process for Phase 4." },
  { src: WeldingSketch, title: "Phase 5: Design Iteration 2", description: "Placeholder text about thought process for Phase 5." },
  { src: WeldingSketch2, title: "Phase 6: Advanced Welding Concepts", description: "Placeholder text about thought process for Phase 6." },
  { src: HoldingSketch3, title: "Phase 7: Final Design Iteration", description: "Placeholder text about thought process for Phase 7." },
  { src: WholeSketch, title: "Phase 8: Complete System Overview", description: "Placeholder text about thought process for Phase 8." },
  { src: CAD, title: "Phase 9: CAD Modeling and Finalization", description: "Placeholder text about thought process for Phase 9." },
];

const Portfolio = () => {
  return (
    <Container fluid style={{ paddingTop: '100px', color: '#fff' }}> {/* Ensure text color is set to white */}
      <Row className="mb-5">
        <Col>
          <h1 style={{ fontSize: "2.1em" }} className="purple"><strong>Portfolio</strong></h1>
          <h2 style={{ fontSize: '24px' }}>Project 01: Thermocouple Welding Machine</h2>
        </Col>
      </Row>
      {phases.map((phase, index) => (
        <Row key={index} className="mb-4">
          <Col md={6}>
            <Card className="bg-dark text-white"> {/* Ensure Card background is dark and text is white */}
              <Card.Img variant="top" src={phase.src} />
            </Card>
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>{phase.title}</Card.Title>
              <Card.Text>{phase.description}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Portfolio;
