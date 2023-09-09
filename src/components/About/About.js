import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import fampic from "../../Assets/fampic.JPG";
import Toolstack from "./Toolstack";
import Frame from "./Frame";

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
            style={{ paddingTop: "30px", paddingBottom: "50px"}}
            className="about-img"
          >
            <img src={fampic} alt="about" className="img-fluid" style={{ borderRadius: "20px"}} />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Languages </strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Frameworks</strong>
        </h1>
        <Frame />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong>
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
