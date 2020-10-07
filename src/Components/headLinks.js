import React, { Component } from 'react'
import {Link} from "react-router-dom"

class HeadLinks extends Component{

  render(){
    return (
      //console.log(this.props.headerLinks);
      <div>
      {this.props.headerLinks.map((n) => <Link key={n.id}src={n.path}>{n.title}</Link>)}
      </div>
    )};
}

export default HeadLinks
