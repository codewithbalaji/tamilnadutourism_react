import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import cardImg1 from '../../assets/gallery/kanyakumari1.jpeg';
import cardImg2 from '../../assets/gallery/kanyakumari2.jpeg';
import cardImg3 from '../../assets/gallery/kanyakumari3.jpeg';

const KanyakumariCard = () => {
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
              Best Time To visit In Kanyakumari{' '}
            </h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6 className="fw-bold">Kanyakumari in Winters (October to March)</h6>
          <p
            style={{
              linespacing: '2px',
              textIndent: '6rem',
              textAlign: 'justify',
            }}
          >
            Winters in Kanyakumari are the best time for sightseeing and
            travelling around the place. Attractions such as Vavathurai,
            Chitharal Hill Temple and Thiruvalluvar Statue are popular among the
            tourists. November is a very favourable month for visiting
            Kanyakumari as the weather is pleasant with clear skies and less
            humidity. Temperatures vary from 15 degree celcius to 35 degree
            celcius. It is also the perfect time for indulging in beach
            activities like sunbathing, swimming and surfing. December to
            February are the peak seasons; hence the tourism sector gets maximum
            revenue during this time.
          </p>
          <h6 className="fw-bold">Kanyakumari in Summers (April to June) </h6>
          <p style={{ textIndent: '6rem', textAlign: 'justify' }}>
            Kanyakumari experiences moderate weather during summers, with
            temperatures ranging from 22 degrees to 35 degrees Celcius. During
            this period the weather is humid; however, the climatic conditions
            are apt for visiting the various attractions of the place including
            Vivekananda Rock, Vattakottai Fort and Gandhi Museum. Apart from
            this, the various beach activities are open throughout summer, so
            tourists can indulge in outdoor visits, sea bathing and surfing.
            Although early summers are an ideal time to visit Kanyakumari, the
            month of April gets considerably hot which is why this month is not
            preferred for travel. However, the place gets vacant with less crowd
            and cheaper accomodation - a perfect time for budget travellers{' '}
          </p>
          <h6 className="fw-bold">
            Kanyakumari in Monsoons (July to September){' '}
          </h6>
          <p style={{ textIndent: '6rem', textAlign: 'justify' }}>
            Monsoons in Kanyakumari starts in June which helps in tremendously
            lowering the temperature. However, the level of humidity keeps
            rising making it difficult to travel around. If you're a plwiophile,
            then the month of August is best recommended as the atmosphere is
            pleasant with a slight drizzle that enhances the beauty of this
            coast. Apart from its humidity, this is a good time to visit during
            monsoons. The frequent showers put a hold on sightseeing which
            affects the footfall in Kanyakumari in September; however, the Cape
            Festival takes place in October, and by this time tourists from
            around India visit Kanyakumari.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

function Kanyakumari() {
  return (
    <div>
      <div className="d-flex" style={{ marginTop: '150px' }}>
        <div style={{ width: '629px' }}>
          <h3 className="mt-5">05.Kanyakumari</h3>
          <h5 className="mt-5">What is the best time to visit:</h5>
          <p
            style={{
              textIndent: '18rem',
              textAlign: 'justify',
              linespacing: '10px',
            }}
          >
            The months from October until February are considered the best time
            to visit Kanyakumari, as the weather remains calm and pleasant.
            Although this coastal region is a bit humid, this is the best time
            to try out some adventurous water sports, going on sightseeing and
            outings, undertaking beach activities and savouring the spectacular
            sunset views. With the beginning of winters in November, Kanyakumari
            also hosts many festivals during this month, for instance the Cape
            Festival.
          </p>
          <p
            style={{
              textIndent: '18rem',
              textAlign: 'justify',
              marginTop: '50px',
            }}
          >
            Kanyakumari is the southernmost tip of India. As Kanyakumari is
            close to the seas, the expanse experiences a tropical coastal
            climate. There are not many variations in the seasons, as there is
            an overall humidity and seasonal rain during the year.{' '}
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
                  More About Best Time To Travel To Kanyakumari
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
                      Landscape Source
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
                      Sea<br></br>Source
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
                      Coast<br></br> Source
                    </p>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <KanyakumariCard></KanyakumariCard>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kanyakumari;
