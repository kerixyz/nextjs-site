import React from 'react';
import { Container, Row, Col } from "reactstrap";


const How = () => {

  return (
    <section className="section"  style={{ backgroundColor: '#CFE9C2'}} id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-bolder text-dark">How does it work? </h3>
              {/* <p className="text-muted">We'll help you get constructive feedback on your live streams</p> */}
            </div>
          </Col>
        </Row>
        <Row>
          {/* <Col md={3}>
            <h2 className="font-weight-dark line-height-1_6 text-dark mb-4">Features:</h2>
          </Col> */}
          <Col md={{ size:10, offset :1 }}>
            <Row>
              <Col md={3}>
                <h5 className="text-dark font-weight-bolder f-20 mb-3">Step 1. </h5>
                <p className="text-muted font-weight-dark">Invite the Evalubot into your community's Discord Server</p>
              </Col>
              <Col md={3}>
                <h5 className="text-dark font-weight-bolder f-20 mb-3">Step 2. </h5>
                <p className="text-muted font-weight-dark">Evalubot will solicit and synthesize feedback for you!</p>
              </Col>
              <Col md={3}>
                <h5 className="text-dark font-weight-bolder f-20 mb-3">Step 3.</h5>
                <p className="text-muted font-weight-dark">Receive a report with construcive feedback and actionable insights</p>
              </Col>
              <Col md={3}>
                <h5 className="text-dark font-weight-bolder f-20 mb-3">Step 4.</h5>
                <p className="text-muted font-weight-dark">Join a quick interview with the researchers to learn more about the system!</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default How;