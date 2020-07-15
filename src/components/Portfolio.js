import React, { Component } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import '../App.css';

  // var show = React.useState;
  // var setShow = React.useState;
  // var handleClose = () => setShow(false);
  // var handleShow = () => setShow(true);

const ExampleModal = ({handleClose, show, header, children}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return(
  <Modal className={showHideClassName} show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{header}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {children}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  )
}


// const FeatureColumn = ({modal, state}) => {

// }

export default class Porfolio extends Component {  
  createModalList() {
    let rows = {}
    let counter = 1
    this.state.numbers.forEach((numbers, idx) => {
      rows[counter] = rows[counter] ? [...rows[counter]] : []
      if (idx % 3 === 0 && idx !== 0) {
        counter++
        rows[counter] = rows[counter] ? [...rows[counter]] : []
        rows[counter].push(numbers)
      } else {
        rows[counter].push(numbers)
      }
    })
    return rows
  }
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: null,
      numbers: [1]
    };
    this.createModalList.bind(this)
  }
  
  handleClose() {
    this.setState({show: null});
  }

  handleShow(id) {
    this.setState({show: id});
  }
  render() {
    let rows = this.createModalList()
    console.log(rows) 
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <Container>
          <h1>My Projects</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            <Container>
              {Object.keys(rows).map(row => {
                return (
                  <Row key={row}>
                    {resumeData.portfolio && resumeData.portfolio.map((item, index)=>{
                      return(
                        <Col className="portfolio-item" md={4}>
                          <div className="item-wrap">
                            <button onClick={() => this.handleShow(item.id)}>
                              <Image src={`${item.imgurl}`} rounded responsive/>
                              <div className="overlay">
                                <div className="portfolio-item-meta">
                                  <h5>{item.name}</h5>
                                  <p>{item.description}</p>
                                </div>
                              </div>
                            </button>
                            <ExampleModal show={this.state.show == item.id} handleClose={this.handleClose} header={item.name}> 
                            <Row>
                              <Col md={6}>
                                <Image src={`${item.imgurl}`}/>
                              </Col>
                              <Col md={6}>
                                <h5>{item.name}</h5>
                                <p>{item.description}</p>
                              </Col>
                            </Row>
                            </ExampleModal>
                          </div>
                        </Col>
                      )
                    })}
                  </Row>
                )
              })}
            </Container>
            })
          </div>
      </Container>
  </section>
        );
  }
}