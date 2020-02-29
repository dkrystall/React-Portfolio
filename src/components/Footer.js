import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
            <li key="mySpace">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                      <i>
                        <span style={{fontSize: 15 + 'px', marginLeft: -3+'em', marginTop: .5+'em'}} className="fa-stack">
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
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}