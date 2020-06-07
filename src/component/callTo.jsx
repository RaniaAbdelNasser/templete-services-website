/** @format */

import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
const CallSection = () => {
  return (
    <React.Fragment>
      <Container fluid className='s-bg-callto text-center p-5'>
        <Row className='text-center m-0 flex-xl-row justify-content-center'>
          <div className='text-center'>
            <h3 className='text-center text-white mb-3'>Call To Action</h3>
            <div className='text-center text-white p-3'>
              {' '}
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <Button variant='outline-light rounded-pill'>Call To Action</Button>
          </div>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default CallSection;
