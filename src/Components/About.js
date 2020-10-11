import React from "react";
import {Row, Col} from "reactstrap";
import {animated, useSpring} from "react-spring";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGit,faDribbble } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import "./about.css";

function Bio(){
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
  return(
    <Row xs="12" className="bio-row">
      <Col md="6" className="bio-col">
        <h4>I'm a Frontend Developer from New York, I have an extensive background in SEO, UX and User Research </h4>
      </Col>
      <Col  md="6"  className="d-none d-lg-flex icon-row">
                                <animated.span style={iconAnimation} onClick={()=> window.open("https://github.com/Joshimmor", "_blank")} className="icon-left"><FontAwesomeIcon   icon={faGit}/></animated.span>
                                <animated.span style={iconAnimation} onClick={()=> window.open("mailto:joshimmor@gmail.com", "_blank")}><FontAwesomeIcon  icon={faEnvelope}/></animated.span>
                                <animated.span style={iconAnimation} onClick={()=> window.open("https://dribbble.com/alienBlue", "_blank")} className="icon-right"><FontAwesomeIcon  icon={faDribbble}/></animated.span>
      </Col>
    </Row>
  )
}

function Skills (){
  const load = useSpring({
    transform: "translateX(0)",
    from:{
      transform: "translateX(-1000px)"
    },
  })
  const iconAnimation = useSpring({
    transform:"translateX(300px)",
    opacity:1,
    color:"white",
    config: { duration: 3000 },
    from:{
     transform:"translateX(0)",
     opacity:0,
    }
  })
  return(
      <Row className="skill-row" xs="12">
        <Col xs="8" md="12">
          <Row xs="12"  className="javascript-skill">
             <h4>Javascript</h4> 
          </Row> 
          <Row xs="12"  className="javascript-status-row">
             <animated.div style={load}  className="javascript-status-bar"/>
          </Row> 
          <Row xs="12"  className="react-skill">
             <h4>React</h4> 
           </Row>
          <Row xs="12"  className="react-status-row">
             <animated.div style={load} className="react-status-bar"/>
          </Row> 
          <Row xs="12"  className="css-skill">
             <h4>CSS</h4> 
          </Row>
          <Row xs="12"  className="css-status-row">
             <animated.div style={load} className="css-status-bar"/>
          </Row> 
          <Row xs="12"  className="python-skill">
             <h4>Python</h4> 
          </Row>
          <Row xs="12"  className="python-status-row">
             <animated.div style={load} className="python-status-bar"/>
          </Row> 
        </Col>
        <Col xs="4" className="mobile-icon-box">
          <Row xs="12" className="button-row-git">
             <animated.span style={iconAnimation} onClick={()=> window.open("https://github.com/Joshimmor", "_blank")} ><FontAwesomeIcon   icon={faGit}/></animated.span>
          </Row> 
          <Row xs="12" className="button-row-email">
             <animated.span style={iconAnimation} onClick={()=> window.open("mailto:joshimmor@gmail.com", "_blank")}><FontAwesomeIcon  icon={faEnvelope}/></animated.span>
          </Row> 
          <Row xs="12" className="button-row-dribble">
            <animated.span style={iconAnimation} onClick={()=> window.open("https://dribbble.com/alienBlue", "_blank")} ><FontAwesomeIcon  icon={faDribbble}/></animated.span>
          </Row>
        </Col>
        </Row>
 
       
  )
}

function SkillsTop (){
  const load = useSpring({
    transform: "translateX(0)",
    from:{
      transform: "translateX(1000px)"
    },
  })
  return(
      <Row className="d-none d-lg-block skill-row-right"xs="12">
          <Col xs="12"className="adobesuite-skill">
             <h4>Adobe Suite</h4> 
             <animated.div style={load}  className="adobesuite-status-bar"/>
          </Col> 
          <Col xs="12"className="sketch-skill">
             <h4>Sketch</h4> 
             <animated.div style={load} className="sketch-status-bar"/>
          </Col> 
          <Col xs="12"className="logical-skill">
             <h4>Logical Thinking</h4> 
             <animated.div style={load} className=" logical-status-bar"/>
          </Col> 
        </Row>
 
       
  )
}

 function About() {
   const swipeDown = useSpring({
     transform:"translateY(0)",
     from:{
      transform:"translateY(-90vh)"
     }
   });
  return(
     <animated.div style={swipeDown} className="about">
              <SkillsTop/>
              <Bio/>
              <Skills/>
      </animated.div>
  )
};

export default About