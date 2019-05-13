import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Button} from '@material-ui/core';

import './FeedbackReview.css';

class FeedbackReview extends Component {

    // Check if the form has been completed 
    isCompleteButton = () => {
        let feelings = this.props.reduxState.feeling.value;
        let understanding = this.props.reduxState.understanding.value;
        let support = this.props.reduxState.support.value;
        let comment = this.props.reduxState.comment.newComment;

        if (feelings && understanding && support && comment) {
            return true;
        }
        return false;
    }

    //alter the button based on whether or not the form has been completed
    conditionalButton() {
        return ((this.isCompleteButton()) ?
            <Button className='formButton' variant='contained' color='primary' onClick={() => this.submitFeedback()}>SUBMIT</Button> :
            <Button className='formButton' variant='contained' color='primary' disabled>INCOMPLETE</Button>)

    }

    //submit feedback to the server, toggle review page.
    submitFeedback = () => {
        console.log('testing submit feedback');
        let objectToSend = {
            feeling: this.props.reduxState.feeling.value,
            understanding: this.props.reduxState.understanding.value,
            support: this.props.reduxState.support.value,
            comments: this.props.reduxState.comment.newComment
        }
        this.sendDataToServer(objectToSend);
        this.props.submit();
        this.props.dispatch({type: 'SUBMIT_FEEDBACK'});
        console.log('exiting submit')
    }

    //the nitty gritty of actually sending data to the server
    sendDataToServer = (objectToSend) => {
        axios.post('/feedback', objectToSend)
            .then((response) => {
                console.log('response from POST request:', response);
            }).catch((error) => {
                console.log('error in POST request:', error);
            })
    }

    render() {        
        return (
            <div>
                <h2>Review Your Feedback</h2>
                <br />
                <p>{`Feelings: ${this.props.reduxState.feeling.value}`}</p>
                <p>{`Understanding: ${this.props.reduxState.understanding.value}`}</p>
                <p>{`Support: ${this.props.reduxState.support.value}`}</p>
                <p>{`Comments: ${this.props.reduxState.comment.newComment}`}</p>
                <div>{this.conditionalButton()}</div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return { reduxState };
}

export default connect(mapStateToProps)(FeedbackReview);