import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

//my components
import Header from '../Header/Header.js';
import ScaleForm from '../ScaleForm/ScaleForm.js';
import Comments from '../Comments/Comments.js';
import Review from '../Review/Review.js';
import Admin from '../Admin/Admin.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <br />          
          <Route exact path='/'
            render={props => (<ScaleForm formType={this.props.reduxState.feeling} passedProps={props} />)}
          />
          <Route exact path='/understanding'
            render={props => (<ScaleForm formType={this.props.reduxState.understanding} passedProps={props} />)}
          />
          <Route exact path='/support'
            render={props => (<ScaleForm formType={this.props.reduxState.support} passedProps={props} />)}
          />
          <Route exact path='/comment'
            component={Comments}
          />          
          <Switch>
            <Route path="/admin" component={Admin} />s
            <Route path='/' component={Review} />
          </Switch>          
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {reduxState};
}

export default connect(mapStateToProps)(App);
