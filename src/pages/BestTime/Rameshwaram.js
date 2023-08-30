import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import cardImg1 from '../../assets/gallery/rameshwaram1.jpeg';
import cardImg2 from '../../assets/gallery/rameshwaram2.jpeg';
import cardImg3 from '../../assets/gallery/rameshwaram3.jpeg';

function RameshwaramCard() {
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
              Best Time To visit In Rameshwaram{' '}
            </h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6 className="fw-bold">
            Rameshwaram in Winter (December - February)
          </h6>
          <p
            style={{
              linespacing: '2px',
              textIndent: '6rem',
              textAlign: 'justify',
            }}
          >
            Winters in Rameshwaram, which last from October all the way to
            March, is said to be the peak season for visiting Rameshwaram if you
            are visiting the place as a tourist and not a pilgrim. The
            temperature during these months drops considerably than the other
            two seasons, with it ranging from 20 degree Celsius to 30 degree
            Celsius. The town is also blessed with chilly winds which make the
            atmosphere even more amicable. This season, therefore, makes for the
            best time for tourists to take part in a plethora of outdoor
            activities and enjoy their stay. During December, Rameshwaram also
            hosts the festival of Arudhra Darshanam which is essentially a
            festival that celebrates an aspect of Lord Shiva. This is said to be
            one of the most celebrated festivals amongst all the ones celebrated
            in Rameshwaram.{' '}
          </p>
          <h6 className="fw-bold">Rameshwaram in Monsoon (July - October)</h6>
          <p
            style={{
              linespacing: '2px',
              textIndent: '6rem',
              textAlign: 'justify',
            }}
          >
            The monsoons in Rameshwaram experience temperatures ranging from 28
            degree Celsius to 35 degree Celsius. These temperatures are similar
            to those during the summers, as is the climate except the small
            relief of humidity received due to short but effective downpours.
            Though monsoons are humid, August-October offers a good climate to
            explore Rameswaram as temperatures drop down during this time
          </p>
          <h6 className="fw-bold">Rameshwaram in Summer(March - June)</h6>
          <p
            style={{
              linespacing: '2px',
              textIndent: '6rem',
              textAlign: 'justify',
            }}
          >
            The summers in Rameshwaram last from April to July and the average
            temperatures during this time range from 27 degree Celsius to 40
            degree Celsius. Summers are also called the pilgrim season in
            Rameshwaram, meaning the town may be exceptionally crowded with
            chances of various processions and chants throughout the area. The
            climate in the summers stays hot, as is usual for most Tamil Nadu
            towns, with the afternoons Being exceptionally sunny. However, the
            rest of the day is said to clear up, and the heat may not
            bother you as much
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Rameshwaram() {
  return (
    <div>
      <h3 style={{ marginTop: '150px' }}>02. Rameshwaram</h3>
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
                  More About Best Time To Travel To Rameshwaram
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
                      Railway
                      <br />
                      Bridge
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
                      Lighthouse<br></br>Source
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
                      Pilgrims<br></br>Temple<br></br> Source
                    </p>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <RameshwaramCard></RameshwaramCard>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        </div>
        <div style={{ width: '629px', marginLeft: '40px' }}>
          <h5 className="mt-5">What is the best time to visit:</h5>
          <p style={{ textIndent: '18rem', textAlign: 'justify' }}>
            What is the best time to visit : The best time to visit Rameshwaram
            is from October to April. However, as far as the weather goes,
            Rameshwaram experiences tropical climate which means the though the
            seasons greatly vary, the temperatures may not. This makes
            Rameshwaram a destination which can be visited all year round.
            Winters (November to February) are cool and temperature comes down
            to 17 degrees Celcius. This is the most pleasant season for
            sightseeing and visiting neighbourhoods. The Monsoons (July to
            September) are humid with average rainfalls, but, the scenic view of
            the coastal region during these months is enjoyable.
          </p>
          <p
            style={{
              textIndent: '18rem',
              marginTop: '50px',
              textAlign: 'justify',
            }}
          >
            Dotted with temples along the seashore and located on a beautiful
            island, rumour has it that this is where Lord Rama built the bridge
            across the ocean to reach Sri Lanka. One of the holiest places in
            the country, pilgrims flocks to this town to pay their respects and
            worship Lord Shiva. With a tropical climate throughout the year,
            this hamlet can pretty much be visited at any time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Rameshwaram;
