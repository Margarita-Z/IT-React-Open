import React from 'react';
import Section1 from '../components/sections/JoinUs/Section1';
import Section2 from '../components/sections/JoinUs/Section2';
import Section3 from '../components/sections/JoinUs/Section3';
import Section4 from '../components/sections/JoinUs/Section4';
import Section5 from '../components/sections/JoinUs/Section5';

const JoinUs = () => {

  return (
    <>
     <Section1 />
     <Section2 />
     <Section3 invertMobile topDivider imageFill className="illustration-section-02" />
     <Section4 />
     <Section5 />
    </>
  );
}

export default JoinUs;