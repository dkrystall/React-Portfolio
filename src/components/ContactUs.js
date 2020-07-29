import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <Container>
          <Row className="section-head">
            <Col md={12}>
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h4>Linked in :
                <a target="_" href={resumeData.socialLinks[0].url.toString()}> David Krystall</a>
              </h4>
            </Col>
            <Col md={6}>
              <h4>e-mail :
                <a href="mailto:dave@davidkrystall.com"> dave@davidkrystall.com</a>
              </h4>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}