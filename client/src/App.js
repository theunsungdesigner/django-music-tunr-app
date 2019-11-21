import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import AllArtist from './component/AllArtist';
import SingleArtist from './component/SingleArtist';
 

class App extends React.Component {
  render() {
    return (
    <Router>
      <div className = "header">

      </div>
    
    <Switch>
      <Route exact path ="/" component = {AllArtist}/>
      <Route exact path ="/artist/:id" component = {SingleArtist} />
    </Switch>
    </Router>
    )
  }
}

export default App;
