import React, {Component} from 'react';
import axios from 'axios';
import {Button, TableCell, TableRow} from '@material-ui/core';

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
            <TableRow>
                <TableCell>{this.props.feedback.feeling}</TableCell>
                <TableCell>{this.props.feedback.understanding}</TableCell>
                <TableCell>{this.props.feedback.support}</TableCell>
                <TableCell>{this.props.feedback.comments}</TableCell>
                <TableCell><Button variant="contained" color="primary" onClick={(e) => this.checkDeleteEntry(this.props.feedback.id, e)}>X</Button></TableCell>
            </TableRow>
        )
    }
}

export default FeedbackItem;