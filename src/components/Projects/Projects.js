import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Paybuddy from "../../Assets/Projects/Paybuddy.png";
import emotion from "../../Assets/Projects/emotion.png";
import TradeEasy from "../../Assets/Projects/TradeEasy.png";
import RentIT from "../../Assets/Projects/RentIT.png";
import suicide from "../../Assets/Projects/suicide.png";
import Travelbuddy from "../../Assets/Projects/TravelBuddy.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RentIT}
              isBlog={false}
              title="RentIt"
              description="It is a web application which is developed using MERN stack. It is buy and sell website with an easy to use interface.It has Email verfication and OTP verification "
              ghLink="https://github.com/vikrampatel0408/RentIT.git"
              demoLink="https://rent-it-nu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Travelbuddy}
              isBlog={false}
              title="TravelBuddy"
              description="It is an Itinerary Planner which unifies all of the travel-related
              services into a single platform — flights, attractions, things to
              do—and weaves them all together into a single, seamless
              daily schedule. It is deployed on AWS"
              ghLink="https://github.com/travelbuddy015/travelbuddy.git"
            // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TradeEasy}
              isBlog={false}
              title="TradeEasy"
              description="TradeEasy- A stock viewing and stock news website , which
              has a Portfolio to track profit and loss.It is bulit using django
              framework and REST apis."
              ghLink="https://github.com/vikrampatel0408/TradeEasy"
            // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Paybuddy}
              isBlog={false}
              title="Paybuddy"
              description="A Simple Money Mangement Web Application , Which
              manages your day-to-day expenditure. This Application is
              based on PHP backend and Maria DB database"
              ghLink="https://github.com/vikrampatel0408/PayBuddy/tree/main"
              demoLink="https://paybuddy.epizy.com/"
            />
          </Col>



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
