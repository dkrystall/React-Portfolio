import React, { Component } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import '../App.css';

const ExampleModal = ({handleClose, show, header, item}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return(
  <Modal className={showHideClassName} show={show} onHide={handleClose} size="lg">
    <Modal.Header closeButton>
      <Modal.Title className="modal-style">
        <h4>{header}</h4>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Row className="modal-style">
        <Col md={5}>
          <Container className="text-center">
            <Image src={`${item.imgurl}`}/>
            <h5>{item.name}</h5>
            <p>{item.description}</p>
            <a href={`${item.url}`} target="_">{item.name}</a>
          </Container>
        </Col>
        <Col md={7}>
          <h5>{item.name}</h5>
          <p>{item.description}</p>
          <p>{item.responsibilities}</p>
        </Col>
      </Row>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

const ItemCol = ({item, show, handleClose, header, handleShow}) => {
  return (
    <Col className="portfolio-item" md={4}>
      <div className="item-wrap">
        <button onClick={handleShow}>
          <Image src={`${item.imgurl}`} responsive rounded/>
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{item.name}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        </button>
      </div>
    <ExampleModal show={show} handleClose={handleClose} header={header} item={item}/>
  </Col>
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
      numbers: [1,2,3,4,5,6,7]
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
              <Row>{
                  resumeData.portfolio && resumeData.portfolio.map(item=>{
                    return(
                      <ItemCol item={item} show={this.state.show == item.id} handleClose={this.handleClose} header={item.name} handleShow={() => this.handleShow(item.id)}/>
                    )
                  }
                )
              }
            </Row>
          </Container>
          }
        </div>
      </Container>
  </section>
        );
  }
}