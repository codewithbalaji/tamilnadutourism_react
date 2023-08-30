import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import cardImg1 from '../../assets/gallery/yercaud1.jpeg';
import cardImg2 from '../../assets/gallery/yercaud2.jpeg';
import cardImg3 from '../../assets/gallery/yercaud3.jpeg';

const YarcaudCard = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleShow}>
        Save Changes
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        backdrop="static"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="mt-3 text-center ">
            <h3 className="text-center mx-5" style={{ width: '220px' }}>
              Best Time To visit In Yercaud{' '}
            </h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6 className="fw-bold">Yercaud in Summer (March - June)</h6>
          <p
            style={{
              linespacing: '2px',
              textIndent: '6rem',
              textAlign: 'justify',
            }}
          >
            With temperatures that hardly move out of the range between 24
            degree Celsius and 28 degree Celsius, Yercaud experiences mild
            summers during March to June. The best places to visit during this
            season are the enchanting Emerald Lake, Killiyur Falls, Silk Farm,
            and Lady?s Seat. Apart from these attractions, one particular
            festival which allures tourists from every nook of the world is the
            Yercaud Summer Festival. Held in May, it is an annual festival which
            keeps everyone on their toes until its arrival. Usually taking place
            for five days, the enrapturing summer event is as grand as it gets!
            From sophisticated folk dances to bewitching musical concerts, from
            captivating cultural competitions to horse riding tournaments, this
            event is a treasure trove of a smorgasbord of wonderful activities.{' '}
          </p>
          <h6 className="fw-bold">Yercaud in Winter (November - February) </h6>
          <p
            style={{
              linespacing: '2px',
              textIndent: '6rem',
              textAlign: 'justify',
            }}
          >
            Yercaud experiences a delightful climate from October to February.
            The average temperature which stays between a pleasant 10 degree
            Celsius and 15 degree Celsius is ideal for leisurely nature walks as
            well as adventure activities. Do not miss out on the Bear?s Cave,
            Pagoda Point Shevaroy Temple, and Anna Park, if you plan to visit
            this beautiful place during winter.{' '}
          </p>
          <h6 className="fw-bold">Yercaud in Monsoon (July - September) </h6>
          <p
            style={{
              linespacing: '2px',
              textIndent: '6rem',
              textAlign: 'justify',
            }}
          >
            Yercaud experiences a hot and humid monsoon with temperatures that
            range between 20 degree Celsius and 25 degree Celsius from June to
            September. At this time, the coffee plantations look ethereal after
            being washed by the rain. The Botanical Garden, Raja Rajeshwari
            Temple, and the Sri Chakra Mahameru Temple are some of the places
            you should visit during this time.{' '}
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

function Yarcaud() {
  return (
    <div>
      <h3 style={{ marginTop: '150px' }}>08. Yercaud </h3>
      <div className="d-flex">
        <div style={{ marginLeft: '0px', marginTop: '10px' }}>
          <div
            className="modal show"
            style={{
              display: 'block',
              position: 'initial',
            }}
          >
            <Modal.Dialog
              style={{ width: '600px', height: '500px' }}
              className="ms-4"
            >
              <Modal.Header closeButton>
                <Modal.Title className="text-center me-3 fw-bolder">
                  More About Best Time To Travel To Yercaud
                </Modal.Title>
              </Modal.Header>

              <Modal.Body className="row  ">
                <div className="row pe-5">
                  <div className="col text-center">
                    <img
                      style={{ width: '80%' }}
                      height={'160px'}
                      src={cardImg1}
                      alt=""
                    />
                    <p>
                      Easemytrip
                      <br />
                      Source
                    </p>
                  </div>

                  <div className="col text-center">
                    <img
                      style={{ width: '80%' }}
                      height={'160px'}
                      src={cardImg2}
                      alt=""
                    />
                    <p>
                      Oyorooms <br></br>Source
                    </p>
                  </div>

                  <div className="col text-center">
                    <img
                      style={{ width: '80%' }}
                      height={'160px'}
                      src={cardImg3}
                      alt=""
                    />
                    <p>
                      Hiveminer <br></br> Source
                    </p>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <YarcaudCard></YarcaudCard>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        </div>
        <div style={{ width: '629px', marginLeft: '40px' }}>
          <h5 className="mt-5">What is the best time to visit:</h5>
          <p style={{ textIndent: '18rem', textAlign: 'justify' }}>
            What is the best time to visit : October to June is the best time to
            visit Yercaud because the weather is dry and cool. However, Yercaud
            offers breathtaking views and a tranquil ambience throughout the
            year. During the month of May, a seven-day Summer Festival is
            conducted which includes flower shows, dog shows, boating races and
            village fairs. Monsoons (July -September) could be avoided as rains
            might hamper your sightseeing plans, but the rains make this place
            extra beautiful and you might not want to miss that either.
          </p>
          <p
            style={{
              textIndent: '18rem',
              marginTop: '50px',
              textAlign: 'justify',
            }}
          >
            Yercaud celebrates seasonal festivals that are in tune with the
            changing climatic conditions and showcase the nativity and culture
            of the hill town. If you are planning a weekend getaway or a long
            vacation, choose the best of the seasons so you can enjoy your trip
            to the finest. The best period to visit Yercaud is from October to
            June, when the weather is at its best.{' '}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Yarcaud;
