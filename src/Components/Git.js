import React, { useState } from 'react';
import  {TabContent, TabPane, Nav, NavItem, NavLink,Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGit, faUsb,faDribbble } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
export default function Git(props) {
  const [activeTab, setActiveTab] = useState('1');
  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
            La Cultura
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
            Anime App
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
            NuCamp App
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
            Portfolio
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
            <Row className="mt-2">
                <Col  sm="12">
                  <h4>La Cultura</h4>
                </Col>
            </Row>
            <Row>
                <Col md="8">
                  <p>A New York based fitness training center, I built this site using Bootstrap,Custom Css and Vanilla Javascript.This is a fully responsive E-commerce site with a Wordpress blog attached. </p>
                </Col>
                <Col md="4">
                      <span onClick={()=> window.open("https://github.com/Joshimmor/LaCultura", "_blank")}><FontAwesomeIcon  className="icons " icon={faGit}/></span>
                      <span onClick={()=> window.open("https://lacultura.training/", "_blank")}><FontAwesomeIcon  className="icons " icon={faUsb}/></span>
                      <spa onClick={()=> window.open("https://lacultura.training/#contact", "_blank")}n><FontAwesomeIcon className="icons" icon={faEnvelope}/></spa>
                      <span onClick={()=> window.open("https://dribbble.com/shots/14077907-Lacultura-E-Commerce", "_blank")}><FontAwesomeIcon className="icons" icon={faDribbble}/></span>
                </Col>
            </Row>
        </TabPane>
        <TabPane tabId="2">
            <Row className="mt-2">
                    <Col  sm="12">
                      <h4>Anime Streaming Front-end </h4>
                    </Col>
                </Row>
                <Row>
                    <Col md="8">
                      <p>React based interface, it fetches all data from a Restful API and adapts on the fly. It implements Axios, React Spring, React Router and Netlify. </p>
                    </Col>
                    <Col md="4">
                          <span onClick={()=> window.open("someLink", "_blank")}><FontAwesomeIcon  className="icons " icon={faGit}/></span>
                          <span onClick={()=> window.open("someLink", "_blank")}><FontAwesomeIcon  className="icons " icon={faUsb}/></span>
                          <span onClick={()=> window.open("someLink", "_blank")}><FontAwesomeIcon className="icons" icon={faEnvelope}/></span>
                          <span onClick={()=> window.open("someLink", "_blank")}><FontAwesomeIcon className="icons" icon={faDribbble}/></span>
                    </Col>
                </Row>
        </TabPane>
        <TabPane tabId="3">
              <Row className="mt-2">
                    <Col sm="12">
                      <h4>NuCamp React-Native App</h4>
                    </Col>
                </Row>
                <Row>
                    <Col md="8">
                      <p>A New York based fitness training center, I built this site using Bootstrap,Custom Css and Vanilla Javascript.</p>
                    </Col>
                    <Col md="4">
                          <span onClick={()=> window.open("someLink", "_blank")}><FontAwesomeIcon  className="icons " icon={faGit}/></span>
                          <span onClick={()=> window.open("https://5f72b363fc2d6d1f6be0a2f0--pedantic-booth-58cfaf.netlify.app/", "_blank")}><FontAwesomeIcon  className="icons " icon={faUsb}/></span>
                          <span onClick={()=> window.open("someLink", "_blank")}><FontAwesomeIcon className="icons" icon={faEnvelope}/></span>
                          <span onClick={()=> window.open("someLink", "_blank")}><FontAwesomeIcon className="icons" icon={faDribbble}/></span>
                    </Col>
                </Row>
        </TabPane>
        <TabPane tabId="4">
              <Row className="mt-2">
                    <Col sm="12">
                      <h4>Portfolio</h4>
                    </Col>
                </Row>
                <Row>
                    <Col md="8">
                      <p>A New York based fitness training center, I built this site using Bootstrap,Custom Css and Vanilla Javascript.</p>
                    </Col>
                    <Col md="4">
                          <span onClick={()=> window.open("someLink", "_blank")}><FontAwesomeIcon  className="icons " icon={faGit}/></span>
                          <span onClick={()=> window.open("someLink", "_blank")}><FontAwesomeIcon  className="icons " icon={faUsb}/></span>
                          <span onClick={()=> window.open("someLink", "_blank")}><FontAwesomeIcon className="icons" icon={faEnvelope}/></span>
                          <span onClick={()=> window.open("someLink", "_blank")}><FontAwesomeIcon className="icons" icon={faDribbble}/></span>
                    </Col>
                </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}



