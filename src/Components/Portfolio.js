import React from 'react';
import  './portfolio.css'
import {useSpring, animated} from 'react-spring'

function Portfolio () {
    const leftAnimation = useSpring({
        opacity:1,
        transform:"translateX(0)",
        from:{
            transform:"translateX(-300px)",
            
        }
    })
    const rightAnimation = useSpring({
        opacity:1,
        transform:"translateX(0)",
        from:{
            transform:"translateX(300px)",
            
        }
    })
    return (
       <div  className="portfolio">
            <animated.div style={leftAnimation} className="portfolio-row ">
                <div className="project-title">
                    <h1>LaCultura //</h1>
                </div>
                <div className="d-none d-lg-block project-text">
                    <p>random text about some stupid product and working on a team</p>
                </div>
                <div className="button-row">
                    <button className="learn-more-button">Learn More</button>
                </div>
            </animated.div>
            <animated.div style={rightAnimation} className="portfolio-row-lgt">
                <div className="project-title-left">
                    <h1>Rest API App //</h1>
                </div>
                <div className="d-none d-lg-block project-text-left">
                    <p>random text about some stupid product and working on a team</p>
                </div>
                <div className="button-row-left">
                    <button className="learn-more-button-left">Learn More</button>
                </div>
            </animated.div>
            <animated.div style={leftAnimation} className="portfolio-row">
                <div className="project-title">
                    <h1>NuCamp App //</h1>
                </div>
                <div className="d-none d-lg-block project-text">
                    <p>random text about some stupid product and working on a team</p>
                </div>
                <div className="button-row">
                    <button className="learn-more-button">Learn More</button>
                </div>
            </animated.div>
            <animated.div style={rightAnimation} className="portfolio-row-lgt">
                <div className="project-title-left">
                    <h1>Portfolio //</h1>
                </div>
                <div className="d-none d-lg-block project-text-left">
                    <p>random text about some stupid product and working on a team</p>
                </div>
                <div className="button-row-left">
                    <button className="learn-more-button-left">Learn More</button>
                </div>
            </animated.div>
        </div>

    )
}

export default Portfolio