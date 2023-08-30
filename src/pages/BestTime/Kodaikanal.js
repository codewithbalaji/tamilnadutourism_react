import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import cardImg1 from '../../assets/gallery/kodaikanal1.jpeg';
import cardImg2 from '../../assets/gallery/kodaikanal2.jpeg';
import cardImg3 from '../../assets/gallery/kodaikanal3.jpeg';

const KodaikanalCard = () => {
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
              Best Time To visit In Kodaikanal{' '}
            </h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6 className="fw-bold">Kodaikanal in Summer ( March-June )</h6>
          <p
            style={{
              linespacing: '2px',
              textIndent: '6rem',
              textAlign: 'justify',
            }}
          >
            Summers (March to June) in Kodaikanal is ideal with comfortable 20
            degree Celsius to 32 degree Celsius temperature and flowers in full
            bloom.The ten days long Grand Annual Summer Festival, which takes
            place in May, attracts many tourists. From elegant fruit exhibitions
            to enthralling boat races, flower art-wort, classical dance
            performances and melodious musicals, the Summer Festival is a
            platter of different shows. Kodaikanal also holds fantastic
            festivals like Panguni Uthiram in March and the Annual Horticulture
            Show in May.{' '}
          </p>
          <h6 className="fw-bold">
            Kodaikanal in Winter ( December-February )
          </h6>
          <p style={{ textIndent: '6rem', textAlign: 'justify' }}>
            Summers (March to June) in Kodaikanal is ideal with comfortable 20
            degree Celsius to 32 degree Celsius temperature and flowers in full
            bloom.The ten days long Grand Annual Summer Festival, which takes
            place in May, attracts many tourists. From elegant fruit exhibitions
            to enthralling boat races, flower art-works, classical dance
            performances and melodious musicals, the Summer Festival is a
            platter of different shows. Kodaikanal also holds fantastic
            festivals like Panguni Uthiram in March and the Annual Horticulture
            Show in May.
          </p>
          <h6 className="fw-bold">Kodaikanal in Monsoon (June-September)</h6>
          <p style={{ textIndent: '6rem', textAlign: 'justify' }}>
            With a temperature that rarely falls below 8 degree Celsius, winter
            in Kodaikanal (between December and February) is the best time to
            enjoy various treks, and attend the famous Pongal festival
            celebrated during January.{' '}
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

function Kodaikanal() {
  return (
    <div>
      <div className="d-flex" style={{ marginTop: '150px' }}>
        <div style={{ width: '629px' }}>
          <h3 className="mt-5">03.Kodaikanal</h3>
          <h5 className="mt-5">What is the best time to visit:</h5>
          <p
            style={{
              textIndent: '18rem',
              textAlign: 'justify',
              linespacing: '10px',
            }}
          >
            The best time to visit Kodaikanal is from October to June, however,
            the weather remains a bit chilly during December and January. Ideal
            for a vacation in each season, Kodaikanal is the most colourful in
            summers and most picturesque in monsoons. If your trip consists of
            an itinerary that includes a lot of sights to see, then summer is
            the best time to visit this place and those who wish to go for
            trekking, plan your trip to Kodaikanal between October and February.
          </p>
          <p
            style={{
              textIndent: '18rem',
              textAlign: 'justify',
              marginTop: '50px',
            }}
          >
            Kodaikanal is lovingly referred to as The Princess of Hill stations.
            And boy, does it take this title seriously! Built around an exotic
            star shaped lake, the region exudes ethereal charm like that of
            fairy-tales. The best time to visit Kodaikanal is from October -
            June, however, the weather remains a bit chilly during December and
            January.
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
                  More About Best Time To Travel To Kodaikanal
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
                      Upper Lake
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
                      Kodaikanal<br></br>Lake<br></br>Source
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
                      Pillar Rocks <br></br> Source
                    </p>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <KodaikanalCard></KodaikanalCard>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kodaikanal;
