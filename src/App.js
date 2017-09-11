import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Header from './Header'
import More from './More'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <Header/>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
          <Route path='/more' component={More}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
