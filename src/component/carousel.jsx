/** @format */

import React from 'react';
import { Carousel } from 'react-bootstrap';
import Picone from '../img/1.jpg';
import Pictwo from '../img/2.jpg';
import Picthree from '../img/3.jpg';
const CAROUSEL = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className='d-block w-100 s-hieight-img'
          src={Picone}
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100 s-hieight-img'
          src={Pictwo}
          alt='Third slide'
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100 s-hieight-img'
          src={Picthree}
          alt='Third slide'
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CAROUSEL;
