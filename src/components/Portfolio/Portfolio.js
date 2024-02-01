import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Gallery from 'react-photo-gallery-react17'; // Make sure this matches the package you've installed
import sticky from "../../Assets/sticky-notes.jpeg";
import HoldingSketch from "../../Assets/HoldingSketch.png";
import CustomvsCOTS from "../../Assets/CustomvsCOTS.png";
import HoldingSketch2 from "../../Assets/Holdingsketch2.png";
import WholeSketch from "../../Assets/Wholesketch.png";
import HoldingSketch3 from "../../Assets/Holdingsketch3.png";
import WeldingSketch2 from "../../Assets/Weldingsketch2.png";
import CAD from "../../Assets/CAD.png";
import WeldingSketch from "../../Assets/Weldingsketch.png";

// Define a custom render for gallery items to include text
const renderImage = ({ index, left, top, key, photo }) => (
  <div key={key} style={{ margin: '2px', position: 'absolute', left, top }}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={photo.src} />
      <Card.Body>
        <Card.Text>
          {photo.description}
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);

const photos = [
  { src: sticky, width: 4, height: 3, description: "Phase 1: Ideation and Brainstorming" },
  { src: HoldingSketch, width: 4, height: 3, description: "Phase 2: Initial Design Concepts" },
  { src: CustomvsCOTS, width: 4, height: 3, description: "Phase 3: Custom vs. COTS Components" },
  { src: HoldingSketch2, width: 4, height: 3, description: "Phase 4: Design Iteration 1" },
  { src: WeldingSketch, width: 4, height: 3, description: "Phase 5: Design Iteration 2" },
  { src: HoldingSketch3, width: 4, height: 3, description: "Phase 6: Final Design Iteration" },
  { src: WholeSketch, width: 4, height: 3, description: "Phase 7: Complete System Overview" },
  { src: CAD, width: 4, height: 3, description: "Phase 8: CAD Modeling and Finalization" },
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
      <Row>
        <Col>
          <h3 style={{ color: '#fff' }}>Design Process Flow</h3>
          <Gallery photos={photos} renderImage={renderImage} />
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
