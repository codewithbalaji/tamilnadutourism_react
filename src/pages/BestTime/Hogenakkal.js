import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import cardImg1 from '../../assets/gallery/hogenakkal1.jpeg';
import cardImg2 from '../../assets/gallery/hogenakkal2.jpeg';
import cardImg3 from '../../assets/gallery/hogenakkal3.jpeg';

const HogenakkalCard = () => {
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
              Best Time To visit In Hogenakkal{' '}
            </h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6 className="fw-bold">
            Hogenakkal in Winter (November - February)
          </h6>
          <p
            style={{
              linespacing: '2px',
              textIndent: '6rem',
              textAlign: 'justify',
            }}
          >
            Watch the glory of nature take over Hogenakkal, as the south-west
            monsoon showers the region with about 150 mm of rainfall between
            these months. Hogenakkal is a sight to behold in the rain, as the
            Kaveri comes alive and usually floods her banks. While adventure
            enthusiasts and adrenaline junkies throng Hogenakkal in the monsoon,
            it is not recommended for tourists as the currents are too strong to
            swim in. Boating is not allowed either, and there is no standard
            means of transportation to reach the waterfalls. It is best to avoid
            the river, as the water flow may be too heavy. Further downhill, you
            can go rafting if you prefer, although discretion is advised. The
            waterfalls are a sight to behold, as they live up to their name of
            the 'Smoking Rocks' - the sultry mist as the water strikes the rocks
            covers the base in a myriad of colours. Rainbows adorn the falls and
            the scene is postcard-perfect.
          </p>
          <h6 className="fw-bold">Hogenakkal in Monsoon (July-September)</h6>
          <p
            style={{
              linespacing: '2px',
              textIndent: '6rem',
              textAlign: 'justify',
            }}
          >
            Hogenakkal Waterfall is a popular destination attraction among
            nature lovers, adventure seekers, trekkers and shutterbugs. If you
            are planning a trip to this waterfall, here is some information
            about Hogenakkal Falls timings, location, activities, parking fee
            and more
          </p>
          <h6 className="fw-bold">Hogenakkal in Summer (March - June)</h6>
          <p
            style={{
              linespacing: '2px',
              textIndent: '6rem',
              textAlign: 'justify',
            }}
          >
            The Indian Peninsula lies in the tropics, and is known for its
            sweltering summer heat. Temperatures soar to a maximum of 35°C in
            April, which is the hottest month of the year here. The water flow
            is minimal, and there are few waterfalls to reckon during these
            summer months. Most small waterfalls dry up. The rock facades are
            magnificent, though. The jagged rocks and steep gorges make for
            picture-perfect views, and have been featured in many films as well.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

function Hogenakkal() {
  return (
    <div>
      <h3 style={{ marginTop: '190px' }}>10. Hogenakkal</h3>
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
                  More About Best Time To Travel To Hogenakkal
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
                      Winter
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
                      Monsoon<br></br>Source
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
                      Dry<br></br> Source
                    </p>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <HogenakkalCard></HogenakkalCard>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        </div>
        <div style={{ width: '629px', marginLeft: '40px' }}>
          <h5 className="mt-5">What is the best time to visit:</h5>
          <p style={{ textIndent: '18rem', textAlign: 'justify' }}>
            he best time to visit Hogenakkal is during the winter from October -
            February to relax and unwind near the waterfalls. Winters in
            Hogenekkal is pleasant with moderate weather throughout the day.
            Whereas the summers are warm and sunny with temperatures ranging
            from 23 - 34 degree celcius. Despite summers being an off season, a
            dip in the hogenekkal lake is rejuvenating for all. Monsoon on the
            other hand has a pleasant weather with temperatures ranging from 13
            to 20 degree celcius, making it an ideal time to enjoy its
            spectacular beauty.
          </p>
          <p
            style={{
              textIndent: '18rem',
              marginTop: '50px',
              textAlign: 'justify',
            }}
          >
            Hogenakkal Falls, located on the border of Tamil Nadu and Karnataka,
            is one of the most scenic places to visit in the region. The
            waterfall is known as Hogenakkal, or "Smoky Rocks", because of the
            unique arrangement of the gigantic carbonated rocks that surround
            it. The sight of River Kaveri splitting into multiple small streams
            and cascading from different heights ranging from 15 feet to 66 feet
            will leave you mesmerised! Hogenakkal Waterfall is similar to the
            popular.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hogenakkal;
