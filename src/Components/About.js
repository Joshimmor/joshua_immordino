import React from "react";
import {Row, Col} from "reactstrap";
import "./about.css";

function Skills (){
  return(
    <div className="Row">
      <Col>
      <h4>Javascript</h4>
        <div  className="javascript-skill" />
      </Col>
      <Col>
      <h4>React</h4>
        <div className="react-skill" />
      </Col>
      <Col >
      <h4>Css</h4>
        <div className="css-skill" />
      </Col>
      <Col>
      <h4>HTML</h4>
        <div className="html-skill" />
      </Col>
    </div>
  )
}

 function About({loading}) {
  return(
    <React.Fragment>
        <Row>
          <Col>
            <p>I'm a Frontend Developer from New York, I have an extensive background in SEO, UX and User Research </p>
            <Skills loading={loading}/>
          </Col>
        </Row>
    </React.Fragment>
  )
};

export default About