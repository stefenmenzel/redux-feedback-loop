import React, {Component} from 'react';
import axios from 'axios';
import {Table, TableBody, TableHead, TableRow, TableCell} from '@material-ui/core';

import FeedbackItem from '../FeedbackItem/FeedbackItem.js';

class Admin extends Component{

    state = {
        feedback: []
    }

    componentDidMount(){
        this.getFeedbackFromServer();
    }

    getFeedbackFromServer = () => {
        axios.get('/feedback')
        .then((response) => {
            console.log('response from GET request:', response.data);
            //from here we could stash all this information in redux...but no other part of this
            //web app needs this data...so I'm gonna store it in local state
            this.setState({
                feedback: response.data
            });
        }).catch((error) => {
            console.log('error in GET request:', error);
        })
    }

    render(){
        return(
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Feeling</TableCell>
                        <TableCell>Comprehension</TableCell>
                        <TableCell>Support</TableCell>
                        <TableCell>Comments</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* Get info from the database and map it here. */}
                    {this.state.feedback.map((feedbackItem) => {
                        return <FeedbackItem key={feedbackItem.id} feedback={feedbackItem} getFeedback={this.getFeedbackFromServer}/>
                    })}
                </TableBody>
            </Table>
        )
    }
}

export default Admin;