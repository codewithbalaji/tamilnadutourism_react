import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import cardImg1 from '../../assets/gallery/theni1.jpeg';
import cardImg2 from '../../assets/gallery/theni2.jpeg';
import cardImg3 from '../../assets/gallery/theni3.jpeg';

const TheniCard = () => {
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

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="mt-3 text-center ">
            <h3 className="text-center mx-5" style={{ width: '220px' }}>
              Best Time To visit In Theni
            </h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6 className="fw-bold">Theni in Summer</h6>
          <p
            style={{
              linespacing: '2px',
              textIndent: '6rem',
              textAlign: 'justify',
            }}
          >
            The summer season in Theni starts from the month of March and
            continues till May. The months are generally hot and not favourable
            to visit Theni. Temperature during these months ranges between 24°C
            and 42°C.
          </p>
          <h6 className="fw-bold">Theni in Winter</h6>
          <p style={{ textIndent: '6rem', textAlign: 'justify' }}>
            Monsoon in Theni strikes in the month of June and lasts until
            September. The town experiences a heavy rainfall during this time
            that fills the town with zest. Despite being at peak of its beauty,
            the town of Theni is not best to visit during monsoon.
          </p>
          <h6 className="fw-bold">Theni in Monsoon</h6>
          <p style={{ textIndent: '6rem', textAlign: 'justify' }}>
            December marks the beginning of winter season in Theni which ends in
            the month of February. The temperature during these months varies
            from 22°C to 32°C, and thus, the town witnesses a pleasant weather
            and make the season best to visit Theni.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

function Theni() {
  return (
    <div>
      <div className="d-flex" style={{ marginTop: '150px' }}>
        <div style={{ width: '629px' }}>
          <h3 className="mt-5">09. Theni</h3>
          <h5 className="mt-5">What is the best time to visit:</h5>
          <p
            style={{
              textIndent: '18rem',
              textAlign: 'justify',
              linespacing: '10px',
            }}
          >
            More About Best Time To Travel To Theni In order to spend your
            vacation in the lap of nature in south India, no place would be
            better than the town of Cardamom - Theni. The best season to visit
            Theni is winter when the weather remains all pleasant and favourable
            for tourism. On the other hand, summer remains hot and monsoon
            receives a heavy rainfall which makes the two seasons not suitable
            for touring.{' '}
          </p>
          <p
            style={{
              textIndent: '18rem',
              textAlign: 'justify',
              marginTop: '50px',
            }}
          >
            Theni is known for having a salubrious climate throughout the year.
            The average temperature ranges between 15 degrees Celsius to 40
            degrees Celsius. The best months to visit are from the month of
            December to February since the weather is pleasant and allows you to
            indulge in a number of outdoor activities.{' '}
          </p>
        </div>
        <div style={{ marginLeft: '40px', marginTop: '10px' }}>
          <div
            className="modal show"
            style={{
              display: 'block',
              position: 'relative',
            }}
          >
            <Modal.Dialog style={{ width: '1000px' }} className="ms-4">
              <Modal.Header closeButton>
                <Modal.Title className="text-center me-3 fw-bolder">
                  More About Best Time To Travel To Theni
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
                  </div>

                  <div className="col text-center">
                    <img
                      style={{ width: '80%' }}
                      height={'160px'}
                      src={cardImg2}
                      alt=""
                    />
                  </div>
                  <div className="col text-center">
                    <img
                      style={{ width: '80%' }}
                      height={'160px'}
                      src={cardImg3}
                      alt=""
                    />
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <TheniCard></TheniCard>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Theni;
