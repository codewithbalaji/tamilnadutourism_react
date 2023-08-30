import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import cardImg1 from '../../assets/gallery/ooty1.jpeg';
import cardImg2 from '../../assets/gallery/ooty2.jpeg';
import cardImg3 from '../../assets/gallery/ooty3.jpeg';

const OotyCard = () => {
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
              Best Time To visit In Ooty{' '}
            </h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6 className="fw-bold">Ooty in Summer (March - June) </h6>
          <p
            style={{
              linespacing: '2px',
              textIndent: '6rem',
              textAlign: 'justify',
            }}
          >
            Ooty experiences an average temperature that ranges between 23
            degree Celsius and 31 degree Celsius, which is perfect for you to
            explore the sheer beauty cf th's place it full swing.
          </p>
          <h6 className="fw-bold">Ooty in Winter (October - March) </h6>
          <p
            style={{
              linespacing: '2px',
              textIndent: '6rem',
              textAlign: 'justify',
            }}
          >
            With temperatures that stay below 15 degree Celsius, winters in Ooty
            are perfect to have a gala time. Each year, during January or
            February, Department of Tourism in Tamil Nadu hosts The Tea and
            Tourism Festival for three days. A vast range of tea leaves are
            displayed, and rows of tea stalls are put up for tasting and buying
            a wide variety of tea. In addition to this, these three days are
            packed with cultural shows and performances, which reverberate with
            the heritage of the Nilgiris.{' '}
          </p>
          <h6 className="fw-bold">Ooty in Monsoon (July - September) </h6>
          <p
            style={{
              linespacing: '2px',
              textIndent: '6rem',
              textAlign: 'justify',
            }}
          >
            People who love rainfall and green grass beds laid over mountains
            can pack their bags and head straight to Ooty during the monsoon
            months, which lasts between June and September. Even though you are
            unlikely to experierce the bright warm sunshine, you will have a
            great time nevertheless.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

function Ooty() {
  return (
    <div>
      <h3 style={{ marginTop: '150px' }}>04.Ooty</h3>
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
                  More About Best Time To Travel To Ooty
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
                      Mountain
                      <br />
                      Railway
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
                      Ooty Lake<br></br>Source
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
                      Trekking Oot<br></br> Source
                    </p>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <OotyCard></OotyCard>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        </div>
        <div style={{ width: '629px', marginLeft: '40px' }}>
          <h5 className="mt-5">What is the best time to visit:</h5>
          <p style={{ textIndent: '18rem', textAlign: 'justify' }}>
            The best time to visit Ooty is throughout the year as the weather is
            pleasant and great for sightseeing. The temperature usually ranges
            from 5-15 degrees throughout the year with colder nights. However,
            the peak season is from October to June when the weather is pleasant
            and you can get involved in outdoor activities. Ooty can be visited
            during monsoons (if you don't mind the rain) when the freshly washed
            surroundings give Ooty an ethereal charm. The annual Tea and Tourism
            Festival attracts crowds in huge numbers to visit the place and have
            a great time in this wonderful place.
          </p>
          <p
            style={{
              textIndent: '18rem',
              marginTop: '50px',
              textAlign: 'justify',
            }}
          >
            The poised and elegant 'Queen of Hill Stations' welcomes you to the
            kingdom in the clouds. Individuals travel far and wide to partake in
            the awe-inspiring wonders of one of India's most beloved hill
            stations — Ootacamund or Ooty. Here, history and culture form a
            sweet medley, while nature sings to its own symphony. Colonial
            churches, Hindu temples, tribal museums and libraries brand the
            plains with stories.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ooty;
