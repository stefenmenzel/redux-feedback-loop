import React, {Component} from 'react';

class FeedbackItem extends Component{

    deleteEntry = (idToDelete) => {
        alert('gonna have to do an "are you sure" before I delete this');    
    }

    render(){
        return(
            <tr>
                <td>{this.props.feedback.feeling}</td>
                <td>{this.props.feedback.understanding}</td>
                <td>{this.props.feedback.support}</td>
                <td>{this.props.feedback.comments}</td>
                <td><button onClick={() => this.deleteEntry(this.props.feedback.id)}>non-working delete button</button></td>
            </tr>
        )
    }
}

export default FeedbackItem;