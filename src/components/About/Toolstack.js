import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiLinux,
  SiAndroidstudio,
  SiApachenetbeanside,
  SiJupyter,
  SiPhpmyadmin,
  SiVisualstudio,
  SiAzuredevops
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://ubuntu.com/" target="_blank" rel="noopener noreferrer" >
        <SiLinux />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" >
        <SiVisualstudiocode />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer" >
        <SiPostman />
        </a>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwig1oD66qWDAxXspGYCHZaOBJQYABAAGgJzbQ&ase=2&gclid=CjwKCAiAp5qsBhAPEiwAP0qeJrkzEkbEvgHDjYGaOvoR_-sBqnfvT27yXUETUIr6-m_qdK_AnaSM5RoCutwQAvD_BwE&ohost=www.google.com&cid=CAESV-D2_bj1i_6450WCca1oVIosKj_hicu6R7qCSLiQFRLRBf3MDvMJIv4MPfb8qSyOyzGUlyu1aa7n4P3gQNbm2aWaBFLLH8dD2NXoADFt425j8r7mzbC1mQ&sig=AOD64_3JWxaCQ2XAx42-C9BP8I_4EMuIdg&q&nis=4&adurl&ved=2ahUKEwijn_v56qWDAxWryzgGHVkYBVoQ0Qx6BAgFEAE" target="_blank" rel="noopener noreferrer" >
        <SiAndroidstudio />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://netbeans.apache.org/front/main/" target="_blank" rel="noopener noreferrer" >
        <SiApachenetbeanside />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://jupyter.org/" target="_blank" rel="noopener noreferrer" >
        <SiJupyter />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://www.phpmyadmin.net/" target="_blank" rel="noopener noreferrer" >
        <SiPhpmyadmin />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://visualstudio.microsoft.com/" target="_blank" rel="noopener noreferrer" >
        <SiVisualstudio />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://azure.microsoft.com/en-in/products/devops" target="_blank" rel="noopener noreferrer" >
        <SiAzuredevops />
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;
