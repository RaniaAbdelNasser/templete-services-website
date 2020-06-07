/** @format */

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import IosAnalyticsOutline from 'react-ionicons/lib/IosAnalyticsOutline';
const CardService = () => {
  return (
    <React.Fragment>
      <Col xs={12} lg={4} md={12} sm={12} xl={4} className='mx-auto m-2 '>
        <Col>
          <Row>
            <IosAnalyticsOutline fontSize='40px' rotate={false} color='green' />
            <span className='d-inline ml-3'>
              <h4> Lorem Ipsum</h4>
            </span>
          </Row>
          <Row className='ml-4'>
            <p className='pl-3'>
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident
            </p>
          </Row>
        </Col>
      </Col>
    </React.Fragment>
  );
};

export default CardService;
