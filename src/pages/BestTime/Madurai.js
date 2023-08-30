import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import cardImg1 from '../../assets/gallery/madurai1.jpeg';
import cardImg2 from '../../assets/gallery/madurai2.jpeg';
import cardImg3 from '../../assets/gallery/madurai3.jpeg';

const MaduraiCard = () => {
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
              Best Time To visit In Madurai
            </h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6 className="fw-bold">Madurai in Winter (December-February) </h6>
          <p
            style={{
              linespacing: '2px',
              textIndent: '6rem',
              textAlign: 'justify',
            }}
          >
            Many locals look forward to the winter season in Madurai due to the
            relief it brings from the summers. The season lasts from December to
            February. The temperature during the winter months ranges from 20
            degree Celsius to 29 degree Celsius. The season is characterised by
            moderately cool temperatures which make travelling around the city a
            pleasant experience for all individuals. Pongal, a widely celebrated
            festival is regarded as extremely special in Madurai. The festival
            lasts for three days and comprises of praying for a good harvest by
            locals and farmers alike. Other religious festivals are also
            celebrated with great vigour. However, hotel prices may climb up as
            this is the peak tourist season.{' '}
          </p>
          <h6 className="fw-bold">Madurai in Monsoon (June-August) </h6>
          <p style={{ textIndent: '6rem', textAlign: 'justify' }}>
            Monsoon season in Madurai lasts from June to August Although the
            monsoon season continues for a smaller amount of time, the
            south-west monsoon winds bring in a large amount of rainfall which
            is extremely heavy. This rainfall also makes the weather gloomy but
            still makes the city beautiful as the nature around Madurai mainly
            benefits from this rain. This is the perfect time to visit Madurai
            for people who love greenery and the lush natural surroundings.{' '}
          </p>
          <h6 className="fw-bold">Madurai in Summer (March-July)</h6>
          <p style={{ textIndent: '6rem', textAlign: 'justify' }}>
            The summer seasor :n Madurai lasts from March to May. The
            temperatures during this season range from 24 degree Celsius to 34
            degree Celsius. This means that the weather in Madurai during these
            months is uncharacteristically hot. It is also really dry which
            makes the heat more noticeable and discourages travellers to visit.
            The summer season is, therefore, an offseason for Madura', and the
            crowds are comparatively less as well.{' '}
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

function madurai() {
  return (
    <div>
      <div className="d-flex" style={{ marginTop: '150px' }}>
        <div style={{ width: '629px' }}>
          <h3 className="mt-5">07. Madurai </h3>
          <h5 className="mt-5">What is the best time to visit:</h5>
          <p
            style={{
              textIndent: '18rem',
              textAlign: 'justify',
              linespacing: '10px',
            }}
          >
            October to March is the best time to visit Madurai. With a hot and
            dry climate for most of the year, Madurai is best visited during the
            winter season. The town is known for its ancient temples and other
            architectural and religious masterpieces and receives a generous
            crowd of people throughout the year. Madurai is the most fascinating
            and welcoming during the months between October and March which
            coincides with its winter season.{' '}
          </p>
          <p
            style={{
              textIndent: '18rem',
              textAlign: 'justify',
              marginTop: '50px',
            }}
          >
            Madurai is one of the oldest culturally vibrant cities of India. Its
            historical places and temples have a steady flow of tourists from
            all around the world.More About Best Time To Travel To Madurai
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
                  More About Best Time To Travel To Madurai
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
                <MaduraiCard></MaduraiCard>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default madurai;
