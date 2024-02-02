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
  { 
    src: sticky, 
    title: "Phase 1: Ideation and Brainstorming", 
    description: "Dynamic Systems Inc. (DSI) contracted our capstone team at Rensselaer Polytechnic Institute (RPI) to revitalize and redesign their 40-year-old Thermocouple Welding Machine. Our journey began with brainstorming sessions, leading to a series of design iterations." 
  },
  { 
    src: HoldingSketch, 
    title: "Phase 2: Initial Design Concepts", 
    description: "This image unveils our first design, centered around a detachable welding apparatus with a unique combination of a screw for stability, a precision ruler mechanism, and spring clips for easy attachment, laying the groundwork for our innovative approach." 
  },
  { 
    src: CustomvsCOTS, 
    title: "Phase 3: Custom vs. COTS Components", 
    description: "In this depiction, we elaborate on the ruler mechanism from our initial concept, showing its integration under a controlled platform and the adaptability of our welding mechanism with a detailed visualization of the rack and pinion system." 
  },
  { 
    src: HoldingSketch2, 
    title: "Phase 4: Design Iteration 1", 
    description: "This design iteration introduces a lock pin screw for quicker setup, integrating grooves for precise wire placement and a guiding slot for enhanced user experience, reflecting our commitment to efficiency and ease of use." 
  },
  { 
    src: WeldingSketch, 
    title: "Phase 5: Design Iteration 2", 
    description: "This image captures the refinement of the Z-axis movement to solely vertical adjustments, with a focus on precision and reduced complexity, featuring a friction brake lever for control and a carriage designed for the welding apparatus." 
  },
  { 
    src: WeldingSketch2, 
    title: "Phase 6: Advanced Welding Concepts", 
    description: "Showcasing the evolution of our design, this concept integrates a linear solenoid for controlled motion and a bracket connection to the Z-axis, emphasizing functionality and ease of use, while addressing the complexities of centering the TCW." 
  },
  { 
    src: HoldingSketch3, 
    title: "Phase 7: Final Design Iteration", 
    description: "The prototype highlighted here demonstrates the culmination of our design efforts, featuring a robust bolt for durability and a design optimized for 3D printing, showcasing the practicality and simplicity of our welding mechanism." 
  },
  { 
    src: WholeSketch, 
    title: "Phase 8: Complete System Overview", 
    description: "This design concept illustrates our first take on the sample holding mechanism, designed for versatility with a 4-jaw chuck and precise positioning capabilities, ensuring adaptability for various sample shapes and sizes." 
  },
  { 
    src: CAD, 
    title: "Phase 9: CAD Modeling and Finalization", 
    description: "Reenvisioned with a 2-jaw chuck and custom blocks for secure sample holding, this concept emphasizes customization and precision, with visual indicators for sample insertion, enhancing the user experience and accuracy in welding processes." 
  },
];


const Portfolio = () => {
  return (
    <section>
      <Container fluid className="home-section" style={{ zIndex: 2 }}>
        
        <Container className="home-content">
          <Row>
            <Col md={12} className="portfolio-header">
              <h1 style={{ paddingBottom: 15, paddingTop: 10 }} className="heading">
                Project 01: <strong className="main-name">The Thermocouple Welding Machine</strong>
              </h1>
            </Col>
          </Row>

          <Row>
            {phases.map((phase, index) => (
              <Col xs={12} md={4} key={index} className="mb-4 d-flex justify-content-center">
                <Card className="bg-dark text-white" style={{ width: 'auto', maxWidth: '300px' }}>
                  <Card.Img variant="top" src={phase.src} style={{ objectFit: 'contain', borderRadius: '10px', height: '250px' }} />
                  <Card.Body>
                    <Card.Title>{phase.title}</Card.Title>
                    <Card.Text>{phase.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Portfolio;
