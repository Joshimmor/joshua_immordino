import React from 'react';
import Navi from "./Components/Navi";
import Main from "./Components/Main";
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      title:"Joshua Immordino",
      headerLinks:[
          {id :0, title: "home" , path:"./"},
          {id :1, title: "about" , path:"/about"},
          {id :2, title: "contact" , path:"/contact"}
      ],
      home : {
        title: "Joshua Immordino",
        tagline: "Consider. Shape. Influence. Shine.",
        sub:" check out my work below"
      },
      about : {
        title: "Joshua Immordino",
        tagline: "Consider. Shape. Influence. Shine.",
        sub:" check out my work below"
      },
      contact : {
        title: "Joshua Immordino",
        tagline: "Consider. Shape. Influence. Shine.",
        sub:" check out my work below"
      },
    }
  }
  render(){
    return (
      
        <>
          <Main />
          <Navi />
        </>
      
    )};
}

export default App;
