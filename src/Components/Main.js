import React, { Component } from 'react';
import {Container,Row} from "reactstrap";
import  './headline.css'
export class Main extends Component {
  render() {
    return (
       <Container fluid className="headline">
            <Row>
             
                  <h1 className="name">Joshua Immordino</h1>
              
                  <h4 className="tag">New York based React Developer<br/>
                   with a passion for new emerging technologies.</h4>
            </Row>
        </Container>

    )
  }
}

export default Main
