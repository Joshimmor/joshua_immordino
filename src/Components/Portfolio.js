import React from 'react';
import  './portfolio.css';
import {useSpring, animated} from 'react-spring';
import {Link} from "react-router-dom";

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
                    <h1>LaCultura</h1>
                </div>
                <div className="d-none d-lg-block project-text">
                    <p>You can do this Josh</p>
                </div>
                <div className="button-row">
                    <Link key="LaCultura" to={'/lacultura'}>
                        <button className="learn-more-button">Learn More</button>
                    </Link>
                </div>
            </animated.div>
            <animated.div style={rightAnimation} className="portfolio-row-lgt">
                <div className="project-title-left">
                    <h1>Anime API App</h1>
                </div>
                <div className="d-none d-lg-block project-text-left">
                    <p>Dont beat yourself up</p>
                </div>
                <div className="button-row-left">
                    <button className="learn-more-button-left">Learn More</button>
                </div>
            </animated.div>
            <animated.div style={leftAnimation} className="portfolio-row">
                <div className="project-title">
                    <h1>NuCamp App</h1>
                </div>
                <div className="d-none d-lg-block project-text">
                    <p>Love yourself</p>
                </div>
                <div className="button-row">
                    <button className="learn-more-button">Learn More</button>
                </div>
            </animated.div>
            <animated.div style={rightAnimation} className="portfolio-row-lgt">
                <div className="project-title-left">
                    <h1>Portfolio</h1>
                </div>
                <div className="d-none d-lg-block project-text-left">
                    <p>it will be ok in the end, you dont need to succeed right now</p>
                </div>
                <div className="button-row-left">
                    <button className="learn-more-button-left">Learn More</button>
                </div>
            </animated.div>
        </div>

    )
}

export default Portfolio