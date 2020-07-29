import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <Container>
         <Row className="education">

            <Col md={3} className="header-col">
               <h1><span>Education</span></h1>
            </Col>

            <Col md={9} className="main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <Row className="row item">
                       <Col md={12} className="columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </Col>
                    </Row>
                  )
                })
              }
            </Col>
         </Row>
        <Row className="work">
            <Col md={3}className="header-col">
               <h1><span>Work</span></h1>
            </Col>

            <Col md={9} className="main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <Row className="item">
                       <Col md={12}>
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </Col>

                    </Row>

                  )
                })
              }
            </Col> 
         </Row>


         <Row className="skill">

            <Col md={3} className="header-col">
               <h1><span>Skills</span></h1>
            </Col>

            <Col md={9} className="main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

            <div className="">

              <ul className="skills"> Technologies: 
                  {
                    resumeData.skills && resumeData.skills.map((item, index) => {
                      return(
                        <em> {item.skillname} |</em>
                        
                      )
                    })
                  }

              </ul>

            </div>

          </Col>

         </Row>
        </Container>     
      </section>
    );
  }
}