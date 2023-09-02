import React from 'react';
import Chennai from '../pages/PackagesBox/chennai';
import Rameswaram from '../pages/PackagesBox/rameswaram';
import Kodaikanal from '../pages/PackagesBox/kodaikanal';
import Ooty from '../pages/PackagesBox/ooty';
import Kanyakumari from '../pages/PackagesBox/kanyakumari';
import Kumbakonam from '../pages/PackagesBox/kumbakonam';
import Madurai from '../pages/PackagesBox/madurai';
import Yercaud from '../pages/PackagesBox/yercaud';
import Theni from '../pages/PackagesBox/theni';
import Hogenakkal from '../pages/PackagesBox/hogenakkal';

const Packages = () => {
  return (
    <div className="container">
      <br />
      <h1 className="text-center fw-bold mb-5">Tamilnadu Tour Packages</h1>
      <p style={{ textIndent: '10px', textAlign: 'justify' }}>
        Tamil Nadu, located in the southern part of India, is a land of rich
        cultural heritage and natural beauty. With a history dating back
        thousands of years, Tamil Nadu is a treasure trove of ancient temples,
        monuments, and traditions. The state's capital, Chennai, is a vibrant
        metropolis known for its thriving film industry and beautiful beaches.
        One of Tamil Nadu's most iconic landmarks is the magnificent Meenakshi
        Amman Temple in Madurai, with its intricate architecture and stunning
        sculptures making it a must-visit for tourists. Another architectural
        marvel is the Brihadeeswarar Temple in Thanjavur, a UNESCO World
        Heritage Site. Tamil Nadu is famous for its classical dance forms,
        including Bharatanatyam and Kathakali, showcased during the annual
        Chennai Music and Dance Festival. Nature lovers can explore the lush
        forests and wildlife sanctuaries in the Western and Eastern Ghats, with
        the Nilgiri Biosphere Reserve being a prime example. Hill stations like
        Kodaikanal and Ooty provide a cool escape from the summer heat, and the
        state's cuisine is a gastronomic delight, featuring dishes like dosa,
        idli, and Chettinad chicken curry. Whether you're interested in history,
        culture, nature, or cuisine, Tamil Nadu offers a diverse and enriching
        tourism experience.
        <br />
      </p>
      <h1 className="text-center">Explore Tamilnadu With Our Packages </h1>
      <br />
      <div>
        <h2>01. Chennai To All District</h2>
      </div>
      <div>
        <Chennai />
        <Rameswaram />
        <Kodaikanal />
        <Ooty />
        <Kanyakumari />
        <Kumbakonam />
        <Madurai />
        <Yercaud />
        <Theni />
        <Hogenakkal />
      </div>
    </div>
  );
};

export default Packages;
