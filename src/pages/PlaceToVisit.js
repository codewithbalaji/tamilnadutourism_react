import React from 'react';
import PlaceVisitComponent from '../components/PlaceVisitComponent';

const PlaceToVisit = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center mt-5"
        style={{ paddingTop: '80px' }}
      >
        <div style={{ width: '624px' }}>
          <h4>Tourist Places To Visit In Tamil Nadu</h4>
          <p
            className="mt-4 "
            style={{ textIndent: '4rem', textAlign: 'justify' }}
          >
            Chennai, Ooty, Pondicherry, Kodaikanal, Coimbatore, Yelagiri,
            Masinagudi, Conoor, Madumalai, Yercaud, Madurai, Thanjavur,
            Mahabalipuram, Kanyakumari, Kotagiri, Nilgiri, Krishnagiri,
            Auroville, Theni, Hullathy, Rameshwaram, Kalhatty Ghat and more.
          </p>
          <p style={{ textIndent: '4rem', textAlign: 'justify' }}>
            Enjoy a vacation to remember and cherish some amazing experiences
            while touring the most gorgeous places to visit in Tamil Nadu. With
            many serene beaches, beautiful temples known for Dravidian
            architecture, bustling shopping bazaars and adventurous wildlife
            places, these places offer a splendid mix to help you make superb
            travel itinerary.
          </p>
          <p style={{ textIndent: '4rem', textAlign: 'justify' }}>
            Looking forward to visiting the most stunning places to see in Tamil
            Nadu?Well, then you are in for a great time. From the thriving
            cosmopolitan vibes of Chennai to the emerald tea plantations of Ooty
            and the French style houses of Pondicherry to the scenic beauty of
            Kodaikanal, these places will leave you overwhelmed. There is an
            awesome experience in store, whether you are going for leisure,
            backpacking or looking for an adventure.
          </p>
          <div style={{ width: '1225px' }} className="mt-4 ">
            <p style={{ textIndent: '4rem', textAlign: 'justify' }}>
              The variety of tourist places in Tamil Nadu offers you a glimpse
              of all kinds of sightseeing and adventures. Tourists here can
              choose among many offbeat places like Yelagiri and Yercaud to the
              famous cultural citadels like Mahabalipuram and Madurai. Tamil
              Nadu is also home to the southernmost land of India- Kanyakumari
              and one of the char dhams- Rameshwaram. Whether it is an adventure
              you are looking for or a religious respite in the temples, these
              places are a delight for anyone wishing to escape the hustle and
              bustle of life.
            </p>
          </div>
        </div>
        <div className="ms-4">
          <img
            src={require('../assets/banner/Place.jpeg')}
            alt=""
            style={{ width: '577px', height: '426px' }}
          ></img>
          <p className="text-center">Tourist Places To Visit In Tamil Nadu</p>
        </div>
      </div>
      <PlaceVisitComponent />
    </>
  );
};

export default PlaceToVisit;
