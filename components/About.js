import React from 'react';
import { Container, Row, Col } from "reactstrap";


const About = () => {

  return (
    <section className="section"  style={{ backgroundColor: '#CFE9C2'}} id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">How does it work? </h3>
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
              <Col md={4}>
                <h6 className="text-dark font-weight-dark f-20 mb-3">Step 1. </h6>
                <p className="text-muted font-weight-dark">Invite the Evalubot to your community's Discord Server</p>
              </Col>
              <Col md={4}>
                <h6 className="text-dark font-weight-dark f-20 mb-3">Step 2. </h6>
                <p className="text-muted font-weight-dark">Wait 3-5 days for Evalubot to solicit and synthesize feedback for you!</p>
              </Col>
              <Col md={4}>
                <h6 className="text-dark font-weight-dark f-20 mb-3">Step 3.</h6>
                <p className="text-muted font-weight-dark">Receive a report with construcive feedback and actionable insights</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;