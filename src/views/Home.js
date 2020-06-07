/** @format */

import React from 'react';

import NAVBAR from '../component/navbar';
import CAROUSEL from '../component/carousel';
import SubHeader from '../component/subheader';
import AboutUs from './aboutus';
import SERVIES from './service';
import CallSection from './../component/callTo';

const Home = () => {
  return (
    <React.Fragment>
      <NAVBAR />
      <CAROUSEL />
      <SubHeader />
      <AboutUs />
      <SERVIES />
      <CallSection />
    </React.Fragment>
  );
};

export default Home;
