import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <Container>
            <Row>

               <Col md={3}>

                  <img className="profile-pic"  src="images/profilepic.png" alt="" />

               </Col>

               <Col md={9} className="nine columns main-col">

                  <h2>About Me</h2>
                  <p>
                  {
                  resumeData.aboutme
                  }
                  </p>

                  
               </Col>
            </Row>
            <br/>
            <Row >
               <Col md={12} className="justify-content-md-center">
                     <h2>Contact Details</h2>
                     <p className="address">
                           <span>{resumeData.name}</span>
                        <br></br>
                              <span>
                        {resumeData.address}
                     </span>
                     <br></br>
                     <span>
                        <a href={resumeData.website.toString()} target="_blank">GitHub</a>
                     </span>
                     <br></br>
                     <span>
                        <a href={'mailto:'+resumeData.email.toString()} >e-mail</a>
                     </span>
                     <br></br>
                           </p>
               </Col>
            </Row>
         </Container>
      </section>
    );
  }
}