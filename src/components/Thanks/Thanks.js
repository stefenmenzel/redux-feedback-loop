import React, {Component} from 'react';
import {connect} from 'react-redux';

class Thanks extends Component {
    render(){
        return(
            <div>
                <h2>Thank You!</h2>
                <button onClick={this.setupNewFeedback}>Leave New Feedback</button>
            </div>
        )
    }
}

export default connect()(Thanks);