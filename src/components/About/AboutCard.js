import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is <span className="purple">Broderick Boucher</span>, but most people call me <span className="purple">Brody</span>.

            <br /> I am completing my senior year at Rennselear Polytechnic Institute, where I am majoring in Computer Science and minoring in Economics.
            <br />
            I recently completed my second internship with <span className="purple">Softedge Technologies</span> as a Full Stack Developer Intern, where I worked on a team developing tax software.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Mountain Biking
            </li>
            <li className="about-activity">
              <ImPointRight /> Snowboarding
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading 
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
