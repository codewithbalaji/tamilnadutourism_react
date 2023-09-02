import React from 'react';
import placesVisitData from '../data/placeVisitData';
import { Container } from 'react-bootstrap';
import PlaceVisitComponent from '../components/PlaceVisitComponent';

const PlaceToVisit = () => {
  return (
    <div>
      {placesVisitData.map((place, index) => {
        return (
          <div key={place.id} id={place.id}>
            <Container>
              <h3 style={{ marginTop: '100px' }}>{place.title}</h3>
              <div className="card mb-3 border-0">
                <div className="row g-0">
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
                        {place.text1}
                      </p>
                      <p
                        style={{
                          textIndent: '50px',
                          textAlign: 'justify',
                          fontWeight: '400',
                        }}
                        className="card-text"
                      >
                        {place.text2}
                      </p>
                      <p
                        style={{
                          textIndent: '50px',
                          textAlign: 'justify',
                          fontWeight: '400',
                        }}
                        className="card-text"
                      >
                        {place.text3}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex flex-column align-items-center">
                    <img
                      src={place.image}
                      className="img-fluid"
                      alt={place.title}
                      style={{ maxWidth: '100%', height: '100%' }}
                    />
                    <p style={{ textAlign: 'center', marginTop: '10px' }}>
                      {place.title}
                    </p>
                  </div>
                </div>
              </div>
              <p
                style={{
                  textIndent: '50px',
                  textAlign: 'justify',
                  fontWeight: '400',
                }}
                className="card-text"
              >
                {place.text4}
              </p>
              <br />
              <PlaceVisitComponent />
            </Container>
          </div>
        );
      })}
    </div>
  );
};

export default PlaceToVisit;
