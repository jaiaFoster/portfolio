import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headshot from "../../Assets/babybean.jpg";



function Home() {
  return (
    <section>

      <Container fluid className="home-section" id="home" style={{ zIndex: 2}}>
        
        <Container className="home-content" >
          <Row >
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Broderick Boucher</strong>
              </h1>

              <h1 className="heading-name">
              A Software Developer
              </h1>

            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={headshot}
                alt="home pic"
                className="img-home"
                style={{ maxHeight: "100%", width: "100%", maxWidth: "450px"}}
              />
            </Col>
            
          </Row>
        </Container>

        <Container>
        <Row className="home-about-section" >
          <Col md={8} className="home-about-description" style={{ width: "100%"}}>
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I was first exposed to programming in high school and since then, I've been hooked.
              <br />
              <br />My journey as a developer began like many programmers before me, with a simple <b className="purple">Java</b> program that printed
                <b className="purple"> "Hello World" </b> 
              <br />
              <br />
              I am current a college student at RPI studying Computer Science and I have had the opportunity to use a variety of languages and technologies from
              <b className="purple"> MIPS </b>  to <b className="purple"> React </b> 
              <br />
              <br />
              I am looking forward to applying the knowledge I have gained through my education, internships, and projects to tackle real world problems.


            </p>
          </Col>
        </Row>
      </Container>
      </Container>


    </section>
  );
}

export default Home;
