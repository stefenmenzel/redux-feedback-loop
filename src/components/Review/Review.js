import React, { Component } from 'react';
import {connect} from 'react-redux';

import FeedbackReview from '../Review/FeedbackReview.js';
import Thanks from '../Thanks/Thanks.js';

class Review extends Component{
    
    state = {
        isSubmitted: false
    }

    toggleSubmitted = () => {
        this.setState({
            isSubmitted: !this.state.isSubmitted
        })
    }

    render(){                
        return(
            <div>                
                {/* if the form has not been submitted display the feedback review else, display thanks page */}
                {(!this.state.isSubmitted) ?
                <FeedbackReview  submit={this.toggleSubmitted}/> :
                <Thanks submit={this.toggleSubmitted}/>}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {reduxState};
}

export default connect(mapStateToProps)(Review);