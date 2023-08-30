import React from 'react';
import { Accordion } from 'react-bootstrap';
// import '../css/bestVisit.css';

import imagethree from '../assets/gallery/image2.jpeg';
import imagetwo from '../assets/gallery/image1.jpeg';
import imageone from '../assets/gallery/image.jpeg';
import climate from '../assets/gallery/Climate.jpeg';
import Chennai from './BestTime/Chennai';
import Rameshwaram from './BestTime/Rameshwaram';
import Kodaikanal from './BestTime/Kodaikanal';
import Ooty from './BestTime/Ooty';
import Kanyakumari from './BestTime/Kanyakumari';
import Kumbakonam from './BestTime/Kumbakonam';
import Madurai from './BestTime/Madurai';
import Yarcaud from './BestTime/Yarcaud';
import Theni from './BestTime/Theni';
import Hogenakkal from './BestTime/Hogenakkal';

const BestTimeToVisit = () => {
  return (
    <div className="container">
      <div className="text-center text-lg-start my-5">
        <h4 className="" style={{ paddingTop: '70px' }}>
          TAMILNADU TOURISM
        </h4>
        <h3 className="">Best Time To Visit</h3>
      </div>
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <img src={climate} className="img-fluid w-100" alt="Time to visit" />
          <p className="text-center text-capitalize">best time to visit</p>
        </div>
        <div className="col-lg-6">
          <p className="text-center text-capitalize fs-5 fw-bold mb-5 ">
            More about best time to travel to tamil nadu
          </p>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Tamil Nadu in Summer (March-May)
              </Accordion.Header>

              <Accordion.Body>
                <p className="tindent">
                  This season begins in March and lasts until May. The
                  temperatures are high, ranging between 35°C and 40°C and so is
                  the humidity especially in the coastal regions. Sightseeing
                  during this time is not very convenient because of the
                  improper temperature. The season, however, is visited to
                  witness the festival of Chithirai held in the Madurai temple
                  in the month of March- April. Puthandu, another important
                  festival that marks the Tamil New year falls in mid-April and
                  Mahamahan Festival is celebrated in March (celebrated once in
                  12 years). If visiting during summer, it is a good idea to
                  visit the attractions on higher attitudes. Hill stations like
                  Ooty, Kodaikanal and Yelagiri hills are the best where the
                  temperature is pleasant and has scenic views that tourists can
                  witness.
                </p>
                <div className="">
                  <img
                    src={imageone}
                    className="w-100 h-100"
                    alt="march-to june"
                  />
                  <p className="text-center">Pillar Rocks Kodaikanal Source</p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Tamil Nadu in Monsoon (June - September)
              </Accordion.Header>

              <Accordion.Body>
                <p className="tindent">
                  This southern state sees monsoon two times a year - once
                  between June to September and the retreating monsoon in
                  November and December. The temperature is slightly less than
                  what it is in the summer season. It ranges between 25°C and
                  30°C. The rains often occur in long spells and the humidity
                  during this time is high especially in coastal regions. Some
                  of the hilly areas see massive rainfall and venturing out
                  during this time around is not a great idea. The Eastern
                  seaboard of Tamil Nadu sometimes experiences cyclones during
                  the late monsoon, making it an unsafe placetovisit.
                </p>
                <div className="">
                  <img
                    src={imagetwo}
                    className="w-100 h-100"
                    alt="march-to june"
                  />
                  <p className="text-center">A Rainy Day in Chennai Source</p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Tamil Nadu in Winter (October-February)
              </Accordion.Header>

              <Accordion.Body>
                <p className="tindent">
                  Winter in Tamil Nadu begins in October and lasts until
                  February. November and December have intermittent rainfall
                  because of the retreating monsoon, but otherwise, the
                  temperature remains between 10°C and 15°C. The humidity is
                  low, and it is the best climate for sightseeing and touring
                  the cities. Most of the tourist attractions are bustling with
                  activities during this season. The beaches call the beach
                  lovers, and adventure seekers for bathing in the sun, swimming
                  and water sports as the temperature remains moderate all
                  through the day.
                </p>
                <div className="">
                  <img
                    src={imagethree}
                    className="w-100 h-100"
                    alt="march-to june"
                  />
                  <p className="text-center">
                    Pechiparai Resorvoir in Kanyakumari District
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <div className="tindent my-4">
        The best time to visit Tamil Nadu is during the winter season, i.e. from
        November to February when the temperature is relatively low, and
        pleasant to explore the attractions in the state. Monsoons bring
        torrential downpour which makes it an inappropriate time to travel
        through Tamil Nadu. Summer, however, is perfect for exploring the hills
        stations. Tourists can pick the region they wish to see according to the
        season because offseason visits could be extremely inconvenient for
        some.
      </div>
      <Chennai />
      <Rameshwaram />
      <Kodaikanal />
      <Ooty />
      <Kanyakumari />
      <Kumbakonam />
      <Madurai />
      <Yarcaud />
      <Theni />
      <Hogenakkal />
    </div>
  );
};

export default BestTimeToVisit;
