import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Gallery from 'react-photo-gallery-react17'; // Updated import
import sticky from "../../Assets/sticky-notes.jpeg";
import HoldingSketch from "../../Assets/HoldingSketch.png";
import CustomvsCOTS from "../../Assets/CustomvsCOTS.png";
import HoldingSketch2 from "../../Assets/Holdingsketch2.png";
import WholeSketch from "../../Assets/Wholesketch.png";
import HoldingSketch3 from "../../Assets/Holdingsketch3.png";
import WeldingSketch2 from "../../Assets/Weldingsketch2.png";
import CAD from "../../Assets/CAD.png";
import WeldingSketch from "../../Assets/Weldingsketch.png";

const photos = [
  { src: HoldingSketch, width: 4, height: 3 },
  { src: CustomvsCOTS, width: 4, height: 3 },
  { src: HoldingSketch2, width: 4, height: 3 },
  { src: WeldingSketch, width: 4, height: 3 },
  { src: HoldingSketch3, width: 4, height: 3 },
  { src: WeldingSketch2, width: 4, height: 3 },
  { src: WholeSketch, width: 4, height: 3 },
  { src: CAD, width: 4, height: 3 },
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
          <Card className="mb-4">
            <Card.Img variant="top" src={sticky} alt="Sticky Notes" />
            <Card.Body>
              <Card.Text>
                Initial brainstorming with sticky notes to outline our design approach.
              </Card.Text>
            </Card.Body>
          </Card>
          <p style={{ color: '#fff' }}>
            This process started with a deep dive into the existing machine, understanding its limitations, and ideating on potential improvements. We moved through various phases of design, constantly iterating based on feedback and new insights.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 style={{ color: '#fff' }}>Design Process Flow</h3>
          <Gallery photos={photos} />
          <p style={{ color: '#fff', marginTop: '20px' }}>
            Our design process was iterative and collaborative. Starting with initial sketches, we debated the merits of custom versus off-the-shelf components, refined our concepts through multiple iterations, and finally, detailed our designs in CAD. This gallery captures the essence of our creative journey.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
