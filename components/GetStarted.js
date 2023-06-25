import React from 'react';
import { Container, Row, Col } from "reactstrap";


const GetStarted = () => {

  return (
    <section className="section bg-light" id="about">
      <Container>
      <Row className="align-items-center">
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/images/how_img.svg" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>

          <Col lg={6}>
            <div className="pr-lg-5">
              {/* <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">Evalubot</p> */}
              <h2 className="mb-4 font-weight-bolder line-height-1_4">Click the button below to get started</h2>

              <p className="text-muted mb-4 pb-2"> Click below to sign up and Kehree will reach out to you for scheduling :) </p>

              <a href="https://forms.gle/Qa9SepVsJdGjN2MM9" className="btn" style={{backgroundColor:"#FF7C34", color:"#FFFCF8"}}>
                GET STARTED<span className="ml-2 right-icon">&#8594;</span>
              </a>
              {/* <Button color="#007972">
                GET STARTED<span className="ml-2 right-icon">&#8594;</span>
              </Button> */}
              
            </div>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
}

export default GetStarted;
