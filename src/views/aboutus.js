/** @format */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import VisibilitySensor from 'react-visibility-sensor';
import { Spring, config } from 'react-spring/renderprops';
import CARD from './../component/card';
const AboutUs = () => {
  return (
    <React.Fragment>
      <VisibilitySensor>
        {({ isVisible }) => (
          <Spring
            delay={3000}
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ duration: 1000 }}>
            {(props) => (
              <div style={props}>
                <section className='mt-3 s-bg-about'>
                  <Container className='s-row-index-about'>
                    <Row md='auto' className='s-row-index-about'>
                      <div className='mx-auto my-3 font-weight-bold'>
                        <Col>
                          <h1> ABOUT US</h1>
                          <hr />
                        </Col>
                      </div>
                    </Row>

                    <Row md='auto'>
                      <div className='mx-auto text-center mb-2'>
                        <Col>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                          </p>
                        </Col>
                      </div>
                    </Row>
                    <Row>
                      <Col className='mx-auto  wow fadeIn animated  shadow-sm mx-auto mb-2'>
                        {' '}
                        <CARD className='mx-auto wow fadeIn animated  shadow-sm mx-auto mb-2' />
                      </Col>
                      <Col className='mx-auto'>
                        {' '}
                        <CARD className='mx-auto wow fadeIn animated  shadow-sm mx-auto mb-2' />
                      </Col>
                      <Col className='mx-auto wow fadeIn animated  shadow-sm mx-auto mb-2'>
                        {' '}
                        <CARD className='mx-auto wow fadeIn animated  shadow-sm mx-auto mb-2' />
                      </Col>
                    </Row>
                  </Container>
                </section>
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </React.Fragment>
  );
};

export default AboutUs;
