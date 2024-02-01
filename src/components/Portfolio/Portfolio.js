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
    <section>
      <Container fluid className="home-section" style={{ zIndex: 2 }}>
        
        <Container className="home-content">
          <Row>
            <Col md={12} className="home-header">
              <h1 style={{ paddingBottom: 15, paddingTop: 30 }} className="heading">
                Project 01: <strong className="main-name">The Thermocouple Welding Machine</strong>
              </h1>
            </Col>
          </Row>

          <Row>
            {phases.map((phase, index) => (
              <Col xs={12} md={6} key={index} className="mb-4">
                <div className="image-container" style={{ backgroundImage: `url(${phase.src})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '250px', width: '100%' }}>
                  {/* Image is set as background to maintain aspect ratio */}
                </div>
                <Card.Body>
                  <Card.Title>{phase.title}</Card.Title>
                  <Card.Text>{phase.description}</Card.Text>
                </Card.Body>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Portfolio;
