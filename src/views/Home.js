import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Timeline from '../components/sections/partials/Timeline';
//import Cta from '../components/sections/Cta';
import Partners from '../components/sections/Partners';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Timeline />
      <Partners />
      {/*<Cta split />*/}
    </>
  );
}

export default Home;