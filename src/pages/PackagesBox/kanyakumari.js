import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import kodaikanalImg from '../../assets/pictures/Kodaikanal1.jpeg';
import kumbakonamImg from '../../assets/pictures/Kumbakonam3.jpeg';
import maduraiImg from '../../assets/pictures/Madurai3.jpeg';
import yercaudImg from '../../assets/pictures/Yercaud1.jpeg';
import theniImg from '../../assets/pictures/Theni3.jpeg';
import hogenakkalImg from '../../assets/pictures/Hogenakkal2.jpeg';
import rameshwaramImg from '../../assets/pictures/Rameshwaram1.jpeg';
import chennaiImg from '../../assets/pictures/Chennai2.jpeg';
import ootyImg from '../../assets/pictures/Ooty2.jpeg';

const kaniyakumari = () => {
  return (
    <>
      <div>
        <h2>05. Kanyakumari To All District</h2>
      </div>
      <Carousel>
        <Carousel.Item>
          <Row>
            {/* 1st row */}
            <Col style={{ margin: '30px' }} lg={3}>
              <Card
                style={{
                  height: '550px',
                  width: '350px',
                  boxShadow: '10px 10px 5px #aaaaaa',
                  margin: '30px',
                }}
                className="cardPck  ms-5 "
              >
                <Card.Img
                  style={{ height: '200px' }}
                  variant="top"
                  className="d-block w-100"
                  src={rameshwaramImg}
                  alt="Kanyakumari to Rameswaram"
                />

                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold">
                        Kanyakumari to Rameswaram
                      </span>
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      Enjoy a 2-night/3-day getaway with all meals and beverages
                      included, indulging in a hassle-free vacation filled with
                      relaxation and culinary delights.
                    </p>
                    <h5 className="fw-bold">Price: ₹2500</h5>
                  </Card.Text>

                  <div
                    style={{ marginTop: '20px' }}
                    className="  w-100 btn-group"
                  >
                    <Button variant="primary">Book Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            {/* 2nd card */}
            <Col style={{ margin: '30px' }} lg={3} className="">
              <Card
                style={{
                  height: '550px',
                  width: '350px',
                  boxShadow: '10px 10px 5px #aaaaaa',
                  margin: '30px',
                }}
                className="cardPck  ms-5 "
              >
                <Card.Img
                  style={{ height: '200px' }}
                  variant="top"
                  className="d-block w-100"
                  src={kodaikanalImg}
                  alt="Kanyakumari to Kodaikanal"
                />

                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold">
                        Kanyakumari to Kodaikanal
                      </span>
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      Enjoy a 4-night/5-day getaway with all meals and beverage
                      included, indulging in a hassle-free vacation filled with
                      relaxation and culinary delights.
                    </p>
                    <h5 className="fw-bold">Price: ₹3000</h5>
                  </Card.Text>
                  <div
                    style={{ marginTop: '20px' }}
                    className="  w-100 btn-group"
                  >
                    <Button variant="primary">Book Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* 3rd box */}
            <Col style={{ margin: '30px' }} lg={3} className="">
              <Card
                style={{
                  height: '550px',
                  width: '350px',
                  boxShadow: '10px 10px 5px #aaaaaa',
                  margin: '30px',
                }}
                className="cardPck  ms-5 "
              >
                <Card.Img
                  style={{ height: '200px' }}
                  variant="top"
                  className="d-block w-100"
                  src={ootyImg}
                  alt="Kanyakumari to Ooty"
                />

                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold"> Kanyakumari to Ooty </span>
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      Enjoy a 2-night/3-day getaway with all meals and beverages
                      included, indulging in a hassle-free vacation filled with
                      relaxation and culinary delights.
                    </p>
                    <h5 className="fw-bold">Price: ₹3500</h5>
                  </Card.Text>

                  <div
                    style={{ marginTop: '20px' }}
                    className="  w-100 btn-group"
                  >
                    <Button variant="primary">Book Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row>
            <Col style={{ margin: '30px' }} lg={3} className="">
              <Card
                style={{
                  height: '550px',
                  width: '350px',
                  boxShadow: '10px 10px 5px #aaaaaa',
                  margin: '30px',
                }}
                className="cardPck  ms-5 "
              >
                <Card.Img
                  style={{ height: '200px' }}
                  variant="top"
                  className="d-block w-100"
                  src={chennaiImg}
                  alt="Kanyakumari to chennai"
                />

                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold"> Kanyakumari to Chennai </span>
                    </p>
                  </Card.Title>

                  <Card.Text>
                    <p>
                      Enjoy a 2-night/3-day getaway with all meals and beverages
                      included, indulging in a hassle-free vacation filled with
                      relaxation and culinary delights.
                    </p>
                    <h5 className="fw-bold">Price:₹3200</h5>
                  </Card.Text>
                  <div
                    style={{ marginTop: '20px' }}
                    className="  w-100 btn-group"
                  >
                    <Button variant="primary">Book Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col style={{ margin: '30px' }} lg={3} className="">
              <Card
                style={{
                  height: '550px',
                  width: '350px',
                  boxShadow: '10px 10px 5px #aaaaaa',
                  margin: '30px',
                }}
                className="cardPck  ms-5 "
              >
                <Card.Img
                  style={{ height: '200px' }}
                  variant="top"
                  className="d-block w-100"
                  src={kumbakonamImg}
                  alt="Kanyakumari to Kumbakonam"
                />

                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold">
                        Kanyakumari to Kumbakonam{' '}
                      </span>
                    </p>
                  </Card.Title>

                  <Card.Text>
                    <p>
                      Enjoy a 2-night/3-day getaway with all meals and beverages
                      included, indulging in a hassle-free vacation filled with
                      relaxation and culinary delights.
                    </p>
                    <h5 className="fw-bold">Price: ₹3200</h5>
                  </Card.Text>
                  <div
                    style={{ marginTop: '20px' }}
                    className=" w-100 btn-group"
                  >
                    <Button variant="primary">Book Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ margin: '30px' }} lg={3} className="">
              <Card
                style={{
                  height: '550px',
                  width: '350px',
                  boxShadow: '10px 10px 5px #aaaaaa',
                  margin: '30px',
                }}
                className="cardPck  ms-5 "
              >
                <Card.Img
                  style={{ height: '200px' }}
                  variant="top"
                  className="d-block w-100"
                  src={maduraiImg}
                  alt="Kanyakumari to Madurai"
                />

                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold"> Kanyakumari to Madurai </span>
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      Enjoy a 4-night/5-day getaway with all meals and beverages
                      included, indulging in a hassle-free vacation filled with
                      relaxation and culinary delights.
                    </p>
                    <h5 className="fw-bold">Price:₹2200</h5>
                  </Card.Text>

                  <div
                    style={{ marginTop: '20px' }}
                    className="  w-100 btn-group"
                  >
                    <Button variant="primary">Book Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col style={{ margin: '30px' }} lg={3} className="">
              <Card
                style={{
                  height: '550px',
                  width: '350px',
                  boxShadow: '10px 10px 5px #aaaaaa',
                  margin: '30px',
                }}
                className="cardPck  ms-5 "
              >
                <Card.Img
                  style={{ height: '200px' }}
                  variant="top"
                  className="d-block w-100"
                  src={yercaudImg}
                  alt="Kanyakumari to Yercaud"
                />

                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold"> Kanyakumari to Yercaud</span>
                    </p>
                  </Card.Title>

                  <Card.Text>
                    <p>
                      Enjoy a 3-night/4-day getaway with all meals and beverages
                      included, indulging in a hassle-free vacation filled with
                      relaxation and culinary delights.
                    </p>
                    <h5 className="fw-bold">Price:₹2800</h5>
                  </Card.Text>

                  <div
                    style={{ marginTop: '20px' }}
                    className=" w-100 btn-group"
                  >
                    <Button variant="primary">Book Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col style={{ margin: '30px' }} lg={3} className="">
              <Card
                style={{
                  height: '550px',
                  width: '350px',
                  boxShadow: '10px 10px 5px #aaaaaa',
                  margin: '30px',
                }}
                className="cardPck  ms-5 "
              >
                <Card.Img
                  style={{ height: '200px' }}
                  variant="top"
                  className="d-block w-100"
                  src={theniImg}
                  alt="Kanyakumari to Theni"
                />

                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold"> Kanyakumari to Theni</span>
                    </p>
                  </Card.Title>

                  <Card.Text>
                    <p>
                      Enjoy a 1-night/2-day getaway with all meals and beverages
                      included, indulging in a hassle-free vacation filled with
                      relaxation and culinary delights.
                    </p>
                    <h5 className="fw-bold">Price:₹2500</h5>
                  </Card.Text>

                  <div
                    style={{ marginTop: '20px' }}
                    className=" w-100 btn-group"
                  >
                    <Button variant="primary">Book Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ margin: '30px' }} lg={3} className="">
              <Card
                style={{
                  height: '550px',
                  width: '350px',
                  boxShadow: '10px 10px 5px #aaaaaa',
                  margin: '30px',
                }}
                className="cardPck  ms-5 "
              >
                <Card.Img
                  style={{ height: '200px' }}
                  variant="top"
                  className="d-block w-100"
                  src={hogenakkalImg}
                  alt="Kanyakumari to Hogenakkal"
                />

                <Card.Body>
                  <Card.Title>
                    <p>
                      <span to Hogenakkal className=" fw-bold">
                        Kanyakumari to Hogenakkal
                      </span>
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      Enjoy a 5-night/6-day getaway with all meals and beverages
                      included, indulging in a hassle-free vacation filled with
                      relaxation and culinary delights.
                    </p>
                    <h5 className="fw-bold">Price:₹4500</h5>
                  </Card.Text>

                  <div
                    style={{ marginTop: '20px' }}
                    className="  w-100 btn-group"
                  >
                    <Button variant="primary">Book Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default kaniyakumari;
