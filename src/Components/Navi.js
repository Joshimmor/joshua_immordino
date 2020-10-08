import React, { Component } from 'react';
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import Git from "./Git";
import About from "./About";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faUserCircle ,faComments} from '@fortawesome/free-solid-svg-icons';
import "./navi.css"


 class Navi extends Component {
   constructor(props){
     super(props);
      this.state = {
       isGitOpen:false,
       isAboutOpen:false,
       isContactOpen:false,
     }
     this.toggleGit = this.toggleGit.bind(this);
     this.toggleAbout = this.toggleAbout.bind(this);
     this.toggleContact = this.toggleContact.bind(this);
   };
   toggleGit(){
    this.setState({
      isGitOpen:!this.state.isGitOpen
      });
   };
   toggleAbout(){
    this.setState({
      isAboutOpen:!this.state.isAboutOpen
      });
   };
   toggleContact(){
    this.setState({
      isContactOpen:!this.state.isContactOpen
      });
   };
   
  render() {
    
    return (
      
       <React.Fragment>
            <div className="navig" >
                    <span  className="left" onClick={this.toggleGit}><FontAwesomeIcon  icon={faCode}/></span>
                    <span  onClick={this.toggleAbout}><FontAwesomeIcon  icon={faUserCircle}/></span>
                    <span className="right" onClick={this.toggleContact}><FontAwesomeIcon  icon={faComments}/></span>
            </div>
            <Modal isOpen={this.state.isGitOpen} toggle={this.toggleGit} >
              <ModalHeader toggle={this.toggleGit}>Portfolio</ModalHeader>
              <ModalBody>
                  <Git/>
              </ModalBody>
            </Modal>
            <Modal isOpen={this.state.isAboutOpen} toggle={this.toggleAbout} >
              <ModalHeader toggle={this.toggleAbout}>Joshua R Immordino</ModalHeader>
              <ModalBody>
                  <About loading={this.state.isAboutOpen}/>
              </ModalBody>
            </Modal>
            <Modal isOpen={this.state.isContactOpen} toggle={this.toggleContact} >
              <ModalHeader toggle={this.toggleContact}>Contact</ModalHeader>
              <ModalBody>

              </ModalBody>
            </Modal>
        </React.Fragment>
    
    )
  }
}

export default Navi
