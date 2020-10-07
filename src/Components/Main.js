import React, { Component } from 'react';
import {Jumbotron,Container,Row} from "reactstrap";
import styled from 'styled-components';

export class Main extends Component {
  render() {
    const Name = styled.h1`
    margin-left:15px;
    position: absolute;
    bottom: 15vh;
    font-size: 4.5rem;
    `
    const Tag = styled.h4`
    margin:15px;
    padding:15px;
    position: absolute;
    bottom: 10vh;
    font-size: 2 rem
    `
    return (
      <Jumbotron fluid className="p-0 m-0">
        <Container fluid>
            <Row>
             
                  <Name>Joshua Immordino</Name>
              
                  <Tag>New York based React Developer<br/> with a passion for new emerging technologies.</Tag>
            </Row>
        </Container>
      </Jumbotron>
    )
  }
}

export default Main
