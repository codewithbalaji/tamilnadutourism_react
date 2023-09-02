import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import chennaiImg from '../../assets/pictures/Chennai3.jpeg';
import kodaikanalImg from '../../assets/pictures/Kodaikanal2.jpeg';
import ootyImg from '../../assets/pictures/Ooty2.jpeg';
import kanyaImg from '../../assets/pictures/Kanyakumari3.jpeg';
import kumbakonamImg from '../../assets/pictures/Kumbakonam2.jpeg';
import maduraiImg from '../../assets/pictures/Madurai1.jpeg';
import yercaudImg from '../../assets/pictures/Yercaud2.jpeg';
import theniImg from '../../assets/pictures/Theni2.jpeg';
import hogenakkalImg from '../../assets/pictures/Hogenakkal1.jpeg';

const rameshwaram = () => {
  return (
    <>
      <div>
        <h2>02. Rameshwaram To All District</h2>
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
                  src={chennaiImg}
                  alt="Rameshwaram to Chennai"
                />

                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold">Rameshwaram to Chennai</span>
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
                  alt="Rameshwaram to Kodaikanal"
                />

                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold">
                        Rameshwaram to Kodaikanal
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
                  alt="Rameshwaram to Ooty"
                />

                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold"> Rameshwaram to Ooty </span>
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
                  src={kanyaImg}
                  alt="Rameshwaram to Kanyakumari"
                />

                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold">
                        {' '}
                        Rameshwaram to Kanyakumari{' '}
                      </span>
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
                  alt="Rameshwaram to Kumbakonam"
                />

                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold">
                        Rameshwaram to Kumbakonam{' '}
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
                  alt="Rameshwaram to Madurai"
                />

                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold"> Rameshwaramto Madurai </span>
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
                  alt="Rameshwaram to Yercaud"
                />

                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold"> Rameshwaram to Yercaud</span>
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
                  alt="Rameshwaram to Theni"
                />

                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold"> Rameshwaram to Theni</span>
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
                  alt="Rameswaram to Hogenakkal"
                />

                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold">Rameswaram to Hogenakkal</span>
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

export default rameshwaram;
