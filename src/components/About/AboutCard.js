import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is <span className="purple">Jaia Foster</span>, and I'm passionate about teamwork and automation.

            <br /> I'm completing my senior year at Rennselear Polytechnic Institute (RPI), where I'm majoring in Mechanical Engineering and minoring in Economics.
            <br />
            I've always loved the act of creation, and this act has expanded into many different forms since enrolling at RPI. From dabbling in programming to designing workflows and being a team leader, I've learned that creation needs not always result in a physical object.
            <br />
            <br />
            Here are some other activities I love!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking 
            </li>
            <li className="about-activity">
              <ImPointRight /> Rock Climbing
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing board games with friends 
            </li>
            <li className="about-activity">
              <ImPointRight /> Consuming literary content of all kinds
            </li>
          </ul>

        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
