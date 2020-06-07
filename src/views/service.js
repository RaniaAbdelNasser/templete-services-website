/** @format */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import CardService from './../component/serviceCard';

const SERVIES = () => {
  return (
    <React.Fragment>
      <Container className='mt-3'>
        <Row md='auto'>
          <div className='mx-auto my-3 font-weight-bold '>
            <h1> SERVIES</h1>
            <hr />
          </div>
        </Row>
        <Row md='auto'>
          <div className='mx-auto text-center mb-2 px-3'>
            <p className=' px-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </Row>
        <Row className=''>
          <CardService />

          <CardService />

          <CardService />

          <CardService />
          <CardService />
          <CardService />
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default SERVIES;
