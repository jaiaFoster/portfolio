import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DesignModeling from "./DesignModeling"; // Renamed Techstack to DesignModeling
import Aboutcard from "./AboutCard";
import fampic from "../../Assets/fampic.JPG";
import AnalysisSimulation from "./AnalysisSimulation"; // Renamed Toolstack to AnalysisSimulation
import ManufacturingLab from "./ManufacturingLab"; // Renamed Frame to ManufacturingLab

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple"> Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={4}
            style={{ paddingTop: "30px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={fampic} alt="about" className="img-fluid" style={{ borderRadius: "20px" }} />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Design & Modeling </strong>
        </h1>
        <DesignModeling />

        <h1 className="project-heading">
          <strong className="purple">Analysis & Simulation</strong>
        </h1>
        <AnalysisSimulation />

        <h1 className="project-heading">
          <strong className="purple">Manufacturing & Lab Skills</strong>
        </h1>
        <ManufacturingLab />

      </Container>
    </Container>
  );
}

export default About;
