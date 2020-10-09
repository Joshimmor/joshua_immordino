import React, { useState } from 'react';
import  {TabContent, TabPane, Nav, NavItem, NavLink,Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGit, faUsb,faDribbble } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import "./gitStyle.css";
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
                <Col className="link-container" md="4">
                      <span onClick={()=> window.open("https://github.com/Joshimmor/LaCultura", "_blank")}><FontAwesomeIcon  className="modal-links" icon={faGit}/></span>
                      <span onClick={()=> window.open("https://lacultura.training/", "_blank")}><FontAwesomeIcon  className="modal-links" icon={faUsb}/></span>
                      <span onClick={()=> window.open("https://lacultura.training/#contact", "_blank")}n><FontAwesomeIcon className="modal-links" icon={faEnvelope}/></span>
                      <span onClick={()=> window.open("https://dribbble.com/shots/14077907-Lacultura-E-Commerce", "_blank")}><FontAwesomeIcon className="modal-links" icon={faDribbble}/></span>
                </Col>
            </Row>
        </TabPane>
        <TabPane tabId="2">
            <Row className="mt-2">
                    <Col  sm="6">
                      <h4>Anime Streaming Front-end </h4>
                    </Col>
                </Row>
                <Row>
                    <Col md="8">
                      <p>React based interface, it fetches all data from a Restful API and adapts on the fly. It implements Axios, React Spring, React Router and Netlify. </p>
                    </Col>
                    <Col className="link-container" md="4">
                          <span onClick={()=> window.open("https://github.com/Joshimmor/anime_streaming_app", "_blank")}><FontAwesomeIcon   icon={faGit}/></span>
                          <span onClick={()=> window.open("https://mangamanager.netlify.app/", "_blank")}><FontAwesomeIcon   icon={faUsb}/></span>
                          <span onClick={()=> window.open("mailto:joshimmor@gmail.com", "_blank")}><FontAwesomeIcon  icon={faEnvelope}/></span>
                          <span onClick={()=> window.open("https://dribbble.com/shots/14330521-mangaManager-Home-Page", "_blank")}><FontAwesomeIcon  icon={faDribbble}/></span>
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
                      <p>This is the class lead project that walk us throught the creation of a React-Native Application, it also exposed me to Expo SDK and 
                        tapping in to a phones mircophone, camera and Gallery. </p>
                    </Col>
                    <Col className="link-container" md="4">
                          <span onClick={()=> window.open("https://github.com/Joshimmor/nucamp-react-native", "_blank")}><FontAwesomeIcon   icon={faGit}/></span>
                          <span onClick={()=> window.open("https://github.com/Joshimmor/nucamp-react-native", "_blank")}><FontAwesomeIcon   icon={faUsb}/></span>
                          <span onClick={()=> window.open("mailto:joshimmor@gmail.com", "_blank")}><FontAwesomeIcon  icon={faEnvelope}/></span>
                          <span onClick={()=> window.open("https://dribbble.com/alienBlue", "_blank")}><FontAwesomeIcon  icon={faDribbble}/></span>
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
                      <p>This site right here, made with React, ReactStrap and React Spring.</p>
                    </Col>
                    <Col className="link-container" md="4">
                          <span onClick={()=> window.open("https://github.com/Joshimmor", "_blank")}><FontAwesomeIcon   icon={faGit}/></span>
                          <span onClick={()=> window.open("joshuaimmordino.com", "_blank")}><FontAwesomeIcon   icon={faUsb}/></span>
                          <span onClick={()=> window.open("mailto:joshimmor@gmail.com", "_blank")}><FontAwesomeIcon  icon={faEnvelope}/></span>
                          <span onClick={()=> window.open("https://dribbble.com/alienBlue", "_blank")}><FontAwesomeIcon  icon={faDribbble}/></span>
                    </Col>
                </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}



