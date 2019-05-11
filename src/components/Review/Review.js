import React, { Component } from 'react';
import {connect} from 'react-redux';

class Review extends Component{
    
    state = {
        feelings: 0,
        understanding: 0,
        support: 0,
        comment: ''
    }

    fetchProps = () => {
        this.setState({
            ...this.state,
            feelings: this.props.reduxState.feeling.value,
            understanding: this.props.reduxState.understanding,
            support: this.props.reduxState.support.value,
            comment: this.props.reduxState.comment.newComment
        })
    }

    isCompleteButton = () => {
        this.fetchProps();
        if(this.state.feelings){
            console.log('feelings:', this.state.feelings);
            return false;
        }
        if (this.state.feelings && this.state.understanding && this.state.support && this.state.comment) {
            return true;
        }
        return false;
    }

    conditionalButton(isComplete){               
        if(!isComplete){
            return <button disabled>INCOMPLETE</button>;
        }
        else{
            return <button onClick={() => this.submitFeedback}>SUBMIT</button>;
        }
    }

    render(){        
        return(
            <div>
                <h2>Review Your Feedback</h2>
                <br />
                <p>{`Feelings: ${this.props.reduxState.feeling.value}`}</p>
                <p>{`Understanding: ${this.props.reduxState.understanding.value}`}</p>
                <p>{`Support: ${this.props.reduxState.support.value}`}</p>
                <p>{`Comments: ${this.props.reduxState.comment.newComment}`}</p>                
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {reduxState};
}

export default connect(mapStateToProps)(Review);