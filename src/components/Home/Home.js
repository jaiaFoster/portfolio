import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headshot from "../../Assets/jaiaheadshot.jpg";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home" style={{ zIndex: 2 }}>
        
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello, I'm Jaia
              </h1>

              <h1 className="heading-name">
                A Passionate <strong className="main-name">Mechanical Engineer</strong>
              </h1>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={headshot}
                alt="home pic"
                className="img-home"
                style={{ maxHeight: "300px", width: "auto" }}
              />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="home-about-section">
            <Col md={12} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple">INTRODUCE</span> MYSELF
              </h1>
              <p className="home-about-body">
                My engineering journey began in high school with the founding of Ellipse 6814 for the FIRST Robotics Competition. This ignited my passion for technical education, teamwork, and the intricacies of automation and design efficiency. As a senior at RPI set to graduate in May, I am eager to bring my academic learnings and hands-on experience to the engineering industry in 2024.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
