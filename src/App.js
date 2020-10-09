import React from 'react';
import Navi from "./Components/Navi";
import Main from "./Components/Main";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

class App extends React.Component {
 
  render(){
    return (
      
        <Router>
                <Switch>
                  <Route path="/portfolio">
                    <Portfolio />
                  </Route>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/">
                    <Main />
                  </Route>
                </Switch>
                <Navi />
        </Router>
      
    )};
}

export default App;
