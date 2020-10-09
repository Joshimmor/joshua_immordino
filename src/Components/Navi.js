import React from 'react';
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faUserCircle ,faComments} from '@fortawesome/free-solid-svg-icons';
import "./navi.css"


 function Navi() {
    return (
      
       <React.Fragment>
            <div className="navig" >
                    <Link className="left"to="/portfolio">
                    <span>
                    <FontAwesomeIcon  icon={faCode}/>
                    </span>
                    </Link>
                    <Link to="/about">
                    <span>
                    <FontAwesomeIcon className="center" icon={faUserCircle}/>
                    </span>
                    </Link>
                    <Link className="right" to="/">
                    <span>
                    <FontAwesomeIcon  icon={faComments}/>
                    </span>
                    </Link>
                   
            </div>
        </React.Fragment>
    
    )
}

export default Navi
