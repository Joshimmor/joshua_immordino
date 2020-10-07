import React from "react";
import {Row, Col} from "reactstrap";
import styled from "styled-components";

function Skills (){
  const JavascriptSkill = styled.div
  `
  height:10px;
  width: 150px;
  background-color: black
  `
  const ReactSkill = styled.div
  `
  height:10px;
  width: 100px;
  background-color: black
  `
  const CSSSkill = styled.div
  `
  height:10px;
  width: 120px;
  background-color: black
  `
  const HTMLSkill = styled.div
  `
  height:10px;
  width: 120px;
  background-color: black
  `
  
  return(
    <div className="Row">
      <Col>
      <h4>Javascript</h4>
        <JavascriptSkill/>
      </Col>
      <Col>
      <h4>React</h4>
       <ReactSkill/>
      </Col>
      <Col >
      <h4>Css</h4>
        <CSSSkill/>
      </Col>
      <Col>
      <h4>HTML</h4>
       <HTMLSkill/>
      </Col>
    </div>
  )
}

 function About() {
  return(
    <React.Fragment>
        <Row>
          <Col>
            <p>I'm a Frontend Developer from New York, I have an extensive background in SEO, UX and User Research </p>
            <Skills/>
          </Col>
        </Row>
    </React.Fragment>
  )
};

export default About