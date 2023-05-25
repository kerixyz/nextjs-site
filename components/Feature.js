// import React from 'react';
// import { Container, Row, Col } from "reactstrap";

// const FeatureBox = (props) => {
//   return (
//     <>
//     {
//       props.features.map((feature, key) =>
//       (feature.id % 2 !== 0) ?
//         <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
//           <Col md={5} >
//             <div>
//               <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
//             </div>
//           </Col>
//             <Col md={{size:6, offset:1}}>
//               <div className="mt-5 mt-sm-0 mb-4">
//                 <div className="my-4">
//                   <i className={feature.icon}></i>
//                 </div>
//                 <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
//                 <p className="text-muted mb-3 f-15">{feature.desc}</p>
//                 {/* <a href={feature.link} className="f-16 text-warning">Read More <span className="right-icon ml-2">&#8594;</span></a> */}
//               </div>
//             </Col>
//         </Row>
//       :
//       <Row key={key} className="align-items-center mt-5">
//         <Col md={6}>
//           <div className="mb-4">
//             <div className="my-4">
//               <i className="mdi mdi-account-group"></i>
//             </div>
//             <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
//             <p className="text-muted mb-3 f-15">{feature.desc}</p>
//             {/* <a href={feature.link} className="f-16 text-warning">Read More <span className="right-icon ml-2">&#8594;</span></a> */}
//           </div>
//         </Col>
//         <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0">
//           <div>
//             <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
//           </div>
//         </Col>
//       </Row>
//       )
//     }
//     </>
//   );
// }

// const Feature = () => {

//   const features = [
//     {id : 1, img : "./images/45.png", title : "Automated Questioning", desc : "Evalubot will automatically collect responses from members of your server, so all you need to do is invite it.", link : "/"},
//     {id : 2, img : "./images/Group Members.png", title : "Filter & Evaluation", desc : "Evalubot uses filters to provide quality assurance for responses, which it then synthesizes into high-level feedback topics.", link : "/"},
//     {id : 3, img : "./images/45.png", title : "Feedback Report", desc : "After your members respond to Evalubot, it produces a detailed feedback report about the strengths and weaknesses of your content, presence, interactions, and marketing.", link : "/"},
//   ];

//   return (
//     <section className="section" id="feature">
//       <Container>
//         <Row className="justify-content-center">
//           <Col lg={6} md={8}>
//             <div className="title text-center mb-5">
//               <h3 className="font-weight-normal text-dark">Meet your new friend, Evalubot ✨</h3>
//               <p className="text-muted">We'll help you get constructive feedback on your live streams</p>
//             </div>
//           </Col>
//         </Row>
//         <FeatureBox features={features} />
//       </Container>
//     </section>
//   );
// }

// export default Feature;

import React from 'react';
import { Container, Row, Col, Card } from "reactstrap";

const Service = () => {
  const services = [
    { title : "Automated Survey", desc : "Evalubot will automatically collect responses from members of your server, so all you need to do is invite it to your server." },
    { title : "Filter & Evaluation", desc : "Evalubot uses filters to provide quality assurance for responses, which it then synthesizes into high-level feedback topics." },
    { title : "Feedback Report", desc : "Receive a detailed report about the strengths and weaknesses of your content, presence, interactions, and marketing." }
  ]
  
  return (
    <section className="section" id="service">
      <Container>
      <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
            <h2 className="font-weight-bolder text-dark">Meet your new friend, Evalubot</h2>
              <p className="text-muted">We'll help you get constructive feedback on your live streams</p>
            </div>
            <div>

            </div>
          </Col>
        </Row>
        <Row>
          {
            services.map((service, key) =>
              <Col key={key} lg={4} md={6}>
                {/* <div style={{textAlign:"center", width:"300px", backgroundColor:"#007972"}}> */}
                <div>
                  <Card 
                    style={{
                      margin:"5px",
                      padding:"10px",
                      width:"auto",
                      height:"auto",
                      textAlign:"center",
                      backgroundColor:"#007972",
                      borderRadius: "5%" 
                    }}>
                  <div className="mb-5">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="font-weight-bolder pt-1 mb-4" style={{color:"#FFFCF8"}}>
                    {service.title}
                  </h5>
                  <p className="font-weight-normal mb-4" style={{color:"#FFFCF8"}} >{service.desc}</p>
                  </Card>
                </div>
              </Col>
            )
          }
        </Row>
        
      </Container>
    </section>
  );
}

export default Service;