import React from 'react';
import { Container, Row, Col } from "reactstrap";


const How = () => {

  return (
    <section className="section"  style={{ backgroundColor: '#CFE9C2'}} id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-bolder text-dark">What is this and How does it work? </h3>
              {/* <p className="text-muted">We'll help you get constructive feedback on your live streams</p> */}
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={8} md={{size:8, offset:2}}>
            <p>We built a tool called Evalubot to solicit constructive feedback and synthesize the results into actionable insights for you as a streamer!</p> 
            <p>All you need to do is invite our chatbot to your server, and we will generate a feedback report for you as soon as we get the data! </p>
            <p>We just ask to have a quick call with you to go over the results, and we'll compensate your time with gifted subscriptions to your channel</p>
            </Col>
        </Row>
      </Container>
    </section>
  );
}

export default How;