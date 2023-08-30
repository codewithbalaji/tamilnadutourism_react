import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import cardImg1 from '../../assets/gallery/kumbakonam1.jpeg';
import cardImg2 from '../../assets/gallery/kumbakonam2.jpeg';
import cardImg3 from '../../assets/gallery/kumbakonam3.jpeg';

const KumbakonamCard = () => {
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
              Best Time To visit In Kumbakonam
            </h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6 className="fw-bold">
            Kumbakonam in Winter (October - February){' '}
          </h6>
          <p
            style={{
              linespacing: '2px',
              textIndent: '6rem',
              textAlign: 'justify',
            }}
          >
            The winters in Kumbakonam are pleasantly cold, with light sweaters
            helping you to survive the cold. The temperature ranges from 15 to
            25 degrees Celcius, and the diurnal range of temperature isn't more
            than a maximum of 10 degrees Celcius. This season is most preferred
            by tourists to visit Kumbakonam, as exploring the city in this
            weather becomes comfortable and the temperature is pleasing most of
            the time during winter months.{' '}
          </p>
          <h6 className="fw-bold">Kumbakonam in Monsoon (June - August) </h6>
          <p
            style={{
              linespacing: '2px',
              textIndent: '6rem',
              textAlign: 'justify',
            }}
          >
            The monsoon is associated with frequent and untimely shower spells
            in the region. The temperature drops down considerably after the
            scorching summers and the place witness a waste stretch of greenery
            as the rains give life to the flora of the region. The rains can
            though be problematic at times and can interfere with your
            exploration plans, but overall this season can also be preferred by
            tourists to pay a visit to Kumbakonam.{' '}
          </p>
          <h6 className="fw-bold">Kumbakonam in Summer (March - May) </h6>
          <p
            style={{
              linespacing: '2px',
              textIndent: '6rem',
              textAlign: 'justify',
            }}
          >
            Summers in the Deccan region of the country is undeniable hot, and
            the scorching sun might be an unpleasant experience. The summers are
            usually arid and heated up, and the temperature goes up to 40
            degrees Celcius during the day. The season is majody avoided by
            tourists to plan a visit to Kumbakonam because of the overall
            weather conditions.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

function Kumbakonam() {
  return (
    <div>
      <h3 style={{ marginTop: '150px' }}>06. Kumbakonam </h3>
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
                  More About Best Time To Travel To Kumbakonam
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
                      Dawn
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
                      Steemit<br></br>Source
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
                      Holydham<br></br> Source
                    </p>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <KumbakonamCard></KumbakonamCard>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        </div>
        <div style={{ width: '629px', marginLeft: '40px' }}>
          <h5 className="mt-5">What is the best time to visit:</h5>
          <p style={{ textIndent: '18rem', textAlign: 'justify' }}>
            Located in the tropical area and the Deccan region of the country,
            Kumbakonam has the typical tropical climate, with pleasant winters
            and hot and dry summers. The monsoons are accompanied with moderate
            rains and erratic shower spells, thus making the time one of the
            suitable time to pay a visit. The summers are hot and largely
            uncomfortable for one to visit the place.{' '}
          </p>
          <p
            style={{
              textIndent: '18rem',
              marginTop: '50px',
              textAlign: 'justify',
            }}
          >
            Kumbakonam has a typical tropical climate. Regions around the
            Cauvery Delta are rather hot, but Kumbakonam has moderate weather
            throughout the year and summers are said to be far better than in
            hot coastal cities like Chennai. All said, there are numerous places
            to visit in Kumbakonam and it were better you choose the most ideal
            time for a visit. The monsoons are accompanied with moderate rains
            and erratic shower spells, thus making the time one of the suitable
            time to pay a visit.{' '}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Kumbakonam;
