import React from 'react';
import { animated, useSpring } from 'react-spring';
import {Col, Row} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { faGit,faDribbble, faUsb} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom"
import './lacultura.css'

export default function Project() {
    const background = useSpring({
        opacity:1,
        transform:"translateY(0)",
        from:{
            opacity:0,
            transform:"translateY(-300px)",
        }
    })
    const iconAnimation = useSpring({
        transform:"translateX(300px)",
        opacity:1,
        color:"white",
        config: { duration: 2000 },
        from:{
         transform:"translateX(0)",
         opacity:0,
        }
      })
    return (
        <animated.div style={background} className="project-container">
            <Row xs="12" className="project-nav-row">
                <Col xs="2" className="backbutton-col">
                    <Link key="portfolio" to="/portfolio">
                        <FontAwesomeIcon className="backbutton" icon={faChevronLeft}/>
                    </Link>
                </Col>
                <Col className="project-icon-row" >
                                <animated.span style={iconAnimation} onClick={()=> window.open("https://github.com/Joshimmor/anime_streaming_app", "_blank")} className="page-icons project-icon-left"><FontAwesomeIcon   icon={faGit}/></animated.span>
                                <animated.span style={iconAnimation} onClick={()=> window.open("https://mangamanager.netlify.app", "_blank")} className="page-icons "><FontAwesomeIcon  icon={faUsb}/></animated.span>
                                <animated.span style={iconAnimation} onClick={()=> window.open("https://dribbble.com/shots/14330521-mangaManager-Home-Page", "_blank")} className="page-icons project-icon-right" ><FontAwesomeIcon  icon={faDribbble}/></animated.span>
                </Col>
            </Row>
        </animated.div>
    )
}
