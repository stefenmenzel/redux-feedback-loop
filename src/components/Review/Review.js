import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
// import {withRouter} from 'react-router-dom';

import FeedbackReview from '../Review/FeedbackReview.js';
import Thanks from '../Thanks/Thanks.js';

class Review extends Component{
    
    state = {
        isSubmitted: false
    }

    // isCompleteButton = () => {        
    //     let feelings = this.props.reduxState.feeling.value;
    //     let understanding = this.props.reduxState.understanding.value;
    //     let support = this.props.reduxState.support.value;
    //     let comment = this.props.reduxState.comment.newComment;
        
    //     if (feelings && understanding && support && comment) {
    //         return true;
    //     }
    //     return false;
    // }

    // conditionalButton(isComplete){                       
    //     return ((this.isCompleteButton()) ? 
    //         <button onClick={() => this.submitFeedback()}>SUBMIT</button> :
    //         <button disabled>INCOMPLETE</button>)
            
    // }

    // submitFeedback = () => {
    //     console.log('testing submit feedback');
    //     let objectToSend = {
    //         feeling: this.props.reduxState.feeling.value,
    //         understanding: this.props.reduxState.understanding.value,
    //         support: this.props.reduxState.support.value,
    //         comments: this.props.reduxState.comment.newComment
    //     }
    //     this.sendDataToServer(objectToSend);
    //     this.setState({
    //         isSubmitted: true
    //     })
    //     console.log('************current feedbackReview state:*****************', this.state);
    // }

    // sendDataToServer = (objectToSend) => {
    //     axios.post('/feedback', objectToSend)
    //     .then((response) => {
    //         console.log('response from POST request:', response);
    //     }).catch((error) => {
    //         console.log('error in POST request:', error);
    //     })
    // }

    toggleSubmitted = () => {
        this.setState({
            isSubmitted: !this.state.isSubmitted
        })
    }

    render(){        
        // this.isCompleteButton();
        return(
            <div>                
                {(!this.state.isSubmitted) ?
                <FeedbackReview  submit={this.toggleSubmitted}/> :
                <Thanks submit={this.toggleSubmitted}/>}
            </div>
            // <div>
            //     <h2>Review Your Feedback</h2>
            //     <br />
            //     <p>{`Feelings: ${this.props.reduxState.feeling.value}`}</p>
            //     <p>{`Understanding: ${this.props.reduxState.understanding.value}`}</p>
            //     <p>{`Support: ${this.props.reduxState.support.value}`}</p>
            //     <p>{`Comments: ${this.props.reduxState.comment.newComment}`}</p> 
            //     <div>{this.conditionalButton()}</div>               
            // </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {reduxState};
}

export default connect(mapStateToProps)(Review);