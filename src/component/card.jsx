/** @format */

import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import piccard from '../img/about-plan.jpg';
import MdAlarm from 'react-ionicons/lib/MdAlarm';
const CARD = () => {
  return (
    <Card
      style={{ width: '21rem' }}
      className='shadow-sm mx-auto mb-2 wow fadeIn animated '>
      <Card.Img variant='top' src={piccard} />
      <div className='d-block'>
        <div className='text-center s-icon-card'>
          <MdAlarm fontSize='40px' rotate={true} color='white' />
        </div>
      </div>
      <br />
      <Card.Body className=''>
        <Card.Title className='text-center '>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CARD;
