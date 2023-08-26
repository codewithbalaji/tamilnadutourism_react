import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Col, Container, Row } from 'react-bootstrap';
import '../../src/slider.css';

const Banner = () => {
  return (
    <Container className="mx-auto">
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item interval={2000}>
              <div className="image-wrapper">
                <img
                  className="d-block w-100"
                  src={require('../assets/banner/image1.jpg')}
                  alt="First slide"
                />
                /
              </div>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <div className="image-wrapper">
                <img
                  className="d-block w-100"
                  src={require('../assets/banner/image2.jpeg')}
                  alt="First slide"
                />
                /
              </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <div className="image-wrapper">
                <img
                  className="d-block w-100"
                  src={require('../assets/banner/image3.jpeg')}
                  alt="First slide"
                />
                /
              </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <div className="image-wrapper">
                <img
                  className="d-block w-100"
                  src={require('../assets/banner/image4.jpeg')}
                  alt="First slide"
                />
                /
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
