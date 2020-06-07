/** @format */

import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
const SubHeader = () => {
  return (
    <React.Fragment>
      <Container fluid className='s1-container-color'>
        <Row className=''>
          <Col>
            <Card text='white' className='s-bg-card'>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Dark Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card text='white' className='s-bg-card2'>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Secondary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>{' '}
          <Col>
            <Card text='white' className='s-bg-card'>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Dark Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default SubHeader;
