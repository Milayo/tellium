import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Button } from "react-bootstrap";
import { Animated } from "react-animated-css";
import HomePageImage from "./../../assets/homepage.svg";
import "./homepage.component.scss";

const HomeComponent = () => {
  return (
    <Container className="home-component">
      <Row>
        <Col lg={6}>
          <Animated animationIn="fadeInLeft" isVisible={true}>
            <div className="home-component-col">
              <h1>The Ultimate communication platform. </h1>

              <p>
                {" "}
                Keep in touch with your family, friends and loved ones with
                Tellium. Made for easy communication, files sharing, and fast
                messaging.{" "}
              </p>
            </div>
          </Animated>
          <Animated animationIn="fadeInUp" isVisible={true}>
            <Link to="/signup">
            <Button className="coll-button" size="lg">
              Try Now
            </Button>
            </Link>
          </Animated>
        </Col>
        <Col lg={6}>
          <Animated animationIn="fadeInRight" isVisible={true}>
            <img alt="homepage-img" src={HomePageImage}></img>
          </Animated>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeComponent;
