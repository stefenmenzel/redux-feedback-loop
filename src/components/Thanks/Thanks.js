import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Thanks extends Component {

    setupNewFeedback = () => {
        this.props.dispatch({type: 'RESET_STATE'});
        this.props.submit();
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
                <h2>Thank You!</h2>
                <button onClick={this.setupNewFeedback}>Leave New Feedback</button>
            </div>
        )
    }
}

export default withRouter(connect()(Thanks));