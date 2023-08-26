import React from 'react';
import placeVisitCompData from '../data/placeVisitCompData';

const PlaceVisitComponent = () => {
  return (
    <div className="mt-5">
      {placeVisitCompData.map(place => (
        <div key={place.image} style={{ marginTop: '20px' }}>
          <div className="text-center">
            <h3>{place.location}</h3>
            <h3>{place.title}</h3>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            {place.id % 2 === 1 && (
              <div className="me-3">
                <img
                  style={{
                    width: '200px',
                    height: '242px',
                    objectFit: 'cover',
                  }}
                  src={place.image}
                  alt=""
                />
              </div>
            )}
            <div style={{ width: '998px', marginTop: '10px' }}>
              <h6 className="fw-bolder">{place.name}</h6>
              <p
                style={{
                  textIndent: '5rem',
                  textAlign: 'justify',
                  wordWrap: 'break-word',
                }}
              >
                {place.cardText1}
              </p>
              <p
                style={{
                  textIndent: '5rem',
                  textAlign: 'justify',
                  wordWrap: 'break-word',
                }}
              >
                {place.cardText2}
              </p>
            </div>
            {place.id % 2 === 0 && (
              <div className="me-3" style={{ marginLeft: '10px' }}>
                <img
                  style={{
                    width: '200px',
                    height: '242px',
                    objectFit: 'cover',
                  }}
                  src={place.image}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlaceVisitComponent;
