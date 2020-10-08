import React from 'react';
import {Container,Row, } from "reactstrap";
import  './headline.css'
import {useSpring, animated} from 'react-spring'

function Main () {
    const name = useSpring({
      opacity:1,
      transform:"translateX(0)",
      from:{
        transform:"translateX(-500px)",
        opacity:0
      }
    })
    const tagline = useSpring({
      opacity:1,
      transform:"translateX(0)",
      from:{
        transform:"translateX(500px)",
        opacity:0
      }
    })
    return (
       <Container fluid className="headline">
            <Row sm="12" className="headline-row">
                <animated.div style={name} className="headline-content">
                <h1 className="name">Joshua Immordino</h1>
                </animated.div>
                <animated.div style={tagline} className="headline-content" >
                    <h4 className="tag">New York based React Developer<br/>
                    with a passion for new emerging technologies.</h4>
                </animated.div>
            </Row>
        </Container>

    )
}

export default Main
