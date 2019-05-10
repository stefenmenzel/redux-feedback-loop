import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import ScaleForm from '../ScaleForm/ScaleForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />
          {/* <FeelingForm /> */}
          <Route exact path='/'
            render={props => (<ScaleForm formType={this.props.reduxState.feeling} passedProps={props} />)}
          />
          <Route exact path='/understanding'
            render={props => (<ScaleForm formType={this.props.reduxState.understanding} passedProps={props} />)}
          />
          <Route exact path='/support'
            render={props => (<ScaleForm formType={this.props.reduxState.support} passedProps={props} />)}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {reduxState};
}

export default connect(mapStateToProps)(App);
