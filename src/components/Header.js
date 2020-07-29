import React, { Component } from 'react';
import {Nav, Row, Col, Container} from 'react-bootstrap';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      <header id="home">
        <Nav id="nav-wrap" className="justify-content-center" activeKey="Home" as="ul">
          <Nav.Item as="li" className="current">
            <Nav.Link className="smoothscroll" href="#home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className="smoothscroll" href="#resume">Resume</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className="smoothscroll" href="#portfolio">Portfolio</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className="smoothscroll" href="#contact">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I am {resumeData.name}.</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am a {resumeData.role}.{resumeData.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
               
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
                  <li key="mySpace">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                      <i>
                        <span style={{fontSize: 15 + 'px', marginLeft: -2.5+'em', marginTop: .5+'em'}} className="fa-stack">
                          <i className="fa fa-user fa-stack-2x"
                            style={{fontSize: 0.5 +'em', marginLeft: -0.67+'em', marginTop: 0.46+'em'}}>
                          </i>
                          <i className="fa fa-user fa-stack-2x fa-user"
                            style={{fontSize: 1+'em'}}>
                          </i>
                          <i className="fa fa-user fa-stack-2x fa-user"
                            style={{fontSize: 1.5+'em', marginLeft: 0.37+'em', marginTop: -0.16+'em'}}>
                          </i>
                        </span>
                      </i>
                    </a>
                  </li>
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}