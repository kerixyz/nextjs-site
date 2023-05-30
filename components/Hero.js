import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section position-relative" style={{ backgroundImage:"url(/images/hero-background.png)",backgroundSize:'cover'}}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              {/* <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">Evalubot</p> */}
              <h1 className="mb-4 font-weight-normal line-height-1_4">Want to learn more about your livestream?</h1>
              <a href="https://discord.gg/R6p8qVTGcg" className="btn" style={{backgroundColor:"#FF7C34", color:"#FFFCF8"}}>
                GET STARTED<span className="ml-2 right-icon">&#8594;</span>
              </a>
              {/* <Button color="#007972">
                GET STARTED<span className="ml-2 right-icon">&#8594;</span>
              </Button> */}
              <p></p>
              <p className="text-muted mb-4 pb-2">Sign up to learn more!</p>
              
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/images/hero_img.svg" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;