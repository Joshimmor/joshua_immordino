import React, { Component } from 'react';
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faUserCircle ,faComments} from '@fortawesome/free-solid-svg-icons';
import Git from "./Git";
import About from "./About";
import '../App.css';


 class Navi extends Component {
   constructor(props){
     super(props);
      this.state = {
       isGitOpen:false,
       isAboutOpen:false,
       isContactOpen:false
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
    const Navig = styled.div`
    position: absolute;
    bottom: 1vh;
    width: 100%;
    display: grid;
    place-items: center;
    
    `
  

    
    return (
      
       <React.Fragment>
            <Navig >
               <div>
                    <span onClick={this.toggleGit}><FontAwesomeIcon  className="icons " icon={faCode}/></span>
                    <span  onClick={this.toggleAbout}><FontAwesomeIcon className="icons " icon={faUserCircle  }/></span>
                    <span  onClick={this.toggleContact}> <FontAwesomeIcon  className="icons " icon={faComments  }/>  </span>
              </div>   
            </Navig>
            <Modal isOpen={this.state.isGitOpen} toggle={this.toggleGit} >
              <ModalHeader toggle={this.toggleGit}>Git</ModalHeader>
              <ModalBody>
                  <Git/>
              </ModalBody>
            </Modal>
            <Modal isOpen={this.state.isAboutOpen} toggle={this.toggleAbout} >
              <ModalHeader toggle={this.toggleAbout}>Joshua R Immordino</ModalHeader>
              <ModalBody>
                  <About/>
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
