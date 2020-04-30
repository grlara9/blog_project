import React from "react";
import { Col, Row, Container } from 'react-bootstrap';


function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
            <div className="d-flex justify-content-center mt-5">
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
