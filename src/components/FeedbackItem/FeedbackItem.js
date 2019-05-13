import React, {Component} from 'react';
import axios from 'axios';

class FeedbackItem extends Component{

    checkDeleteEntry = (idToDelete, event) => {        
        window.confirm("are you sure you wish to delete this item?") && this.deleteEntry(idToDelete);
    }

    deleteEntry = (idToDelete) => {
        console.log('made it into delete entry');
        axios.delete(`/feedback/delete/${idToDelete}`)
        .then((response) => {
            console.log('response from DELETE request:', response);
            this.props.getFeedback();
        }).catch((error) => {
            console.log('Error in DELETE request:', error);
        });
    }

    render(){
        return(
            <tr>
                <td>{this.props.feedback.feeling}</td>
                <td>{this.props.feedback.understanding}</td>
                <td>{this.props.feedback.support}</td>
                <td>{this.props.feedback.comments}</td>
                <td><button onClick={(e) => this.checkDeleteEntry(this.props.feedback.id, e)}>non-working delete button</button></td>
            </tr>
        )
    }
}

export default FeedbackItem;