import React from 'react';
import { Container, Row, Col } from "reactstrap";


const GetStarted = () => {

  return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">Click the button below to get started</h3>
              {/* <p className="text-muted">We'll help you get constructive feedback on your live streams</p> */}   
              <br/>
              <a href="https://discord.gg/tVxbgWAQ" className="btn" style={{ backgroundColor: '#FF7C34'}}>
                 JOIN DISCORD<span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default GetStarted;