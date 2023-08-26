import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import placesData from '../data/placesData';

const PlaceComponent = () => {
  return (
    <div>
      {placesData.map((place, index) => {
        return (
          <div key={place.id} id={place.id}>
            <Container>
              <br />
              <h3>{place.title}</h3>
              <div className="card mb-3 border-0">
                <div className="row g-0">
                  <div className="col-md-4 d-flex align-items-center">
                    <img
                      src={place.image}
                      className="img-fluid rounded-start"
                      alt={place.title}
                      style={{ maxWidth: 'auto', height: 'auto' }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{place.cardTitle}</h5>
                      <p
                        style={{
                          textIndent: '50px',
                          textAlign: 'justify',
                          fontWeight: '400',
                        }}
                        className="card-text"
                      >
                        {place.cardText1}
                      </p>
                      <p
                        style={{
                          textIndent: '50px',
                          textAlign: 'justify',
                          fontWeight: '400',
                        }}
                        className="card-text"
                      >
                        {place.cardText2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </Container>
            <h3 className="text-center mb-5">
              Must Visit Place In {place.title.slice(3)}
            </h3>
            <Container>
              <div className="row cards row align-items-center gap-xxl-5 ">
                {[1, 2, 3, 4].map(num => (
                  <div className="col" key={num}>
                    <Card style={{ width: '270px' }}>
                      <Card.Img variant="top" src={place[`cardImage${num}`]} />
                      <Card.Body>
                        <Card.Title>{place[`Title${num}`]}</Card.Title>
                        <Card.Text>{place[`Text${num}`]}</Card.Text>
                        <Button variant="primary">Read More</Button>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        );
      })}
    </div>
  );
};

export default PlaceComponent;
