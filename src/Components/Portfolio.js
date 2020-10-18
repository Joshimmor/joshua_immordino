import React from 'react';
import  './portfolio.css';
import {useSpring, animated} from 'react-spring';
import {Col, Row} from "reactstrap";


function Portfolio () {
    const leftAnimation = useSpring({
        opacity:1,
        transform:"translateX(0)",
        from:{
            transform:"translateX(-3000px)",
            opacity:0
        }
    })
    const rightAnimation = useSpring({
        opacity:1,
        transform:"translateX(0)",
        from:{
            transform:"translateX(3000px)",
            
        }
    })
    return (
       <animated.div  style={rightAnimation} className="portfolio">
            <animated.div style={leftAnimation} >
                <Row className="portfolio-row portfolio-section">
                        <Col  className="project-title-left">
                            <h1 className="portfolio-title">LaCultura</h1>
                            <p className="d-none d-md-block portfolio-text">Fitness base Shopify interface, with a Wordpress backend for 
                                easy access for the client 
                            </p>
                            <button className="learn-more-button"><a href="hhtp://lacultura.training">Visit Website</a></button>
                        </Col>
                        <Col xs="6" sm="3" className="work-col">
                            <img className="work-view" src={require('../assets/lacultura.png')} alt="lacultura"/>
                        </Col>
                </Row>
            
            
                <Row className="portfolio-row ">
                        <Col  className="project-title-left">
                            <h1 className="portfolio-title">Nucamp</h1>
                            <p className="d-none d-md-block portfolio-text">React and React-native based projects both projects ,
                                take advantage of both my own REST api and Expo SDKs. 
                            </p>
                            <button className="learn-more-button"><a href="hhtp://github.com/joshimmor" blank >Visit GitHub</a></button>
                        </Col>
                        <Col xs="6" sm="3" className="work-col-left">
                            <img className="work-view" src={require('../assets/nucamp.png')} alt="lacultura"/>
                        </Col>
                </Row>
           
           
                <Row className="portfolio-row ">
                        <Col  className="project-title-left">
                            <h1 className="portfolio-title">MangaManger</h1>
                            <p className="d-none d-md-block portfolio-text">ReactJS based dynamic application,  
                                accesses a rich REST Api with help of 
                                Axios and React Functional hooks.
                            </p>
                            <button className="learn-more-button"><a href="hhtp://mangamanager.netlify.app" blank>Visit Web App</a></button>
                        </Col>
                        <Col xs="6" sm="3" className="work-col">
                            <img className="work-view" src={require('../assets/mangamanager.png')} alt="lacultura"/>
                        </Col>
                </Row>
          
         
            <Row className="portfolio-row ">
                        <Col  className="project-title-left">
                            <h1 className="portfolio-title">Portfolio</h1>
                            <p className="d-none d-md-block portfolio-text">This React application, right here!
                            Using ReactStrap, React Spring and Styled.Components to create a dynamic interface.
                            </p>
                            <button className="learn-more-button"><a href="/" >Visit Website</a></button>
                        </Col>
                        <Col xs="6" sm="3" className="work-col-left">
                            <img className="work-view" src={require('../assets/joshuaimmordino.png')} alt="lacultura"/>
                        </Col>
                </Row>
             </animated.div>
        </animated.div>

    )
}

export default Portfolio