import React, {Component} from 'react';
import axios from 'axios';

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
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Get info from the database and map it here. */}
                    {this.state.feedback.map((feedbackItem) => {
                        return <FeedbackItem key={feedbackItem.id} feedback={feedbackItem} getFeedback={this.getFeedbackFromServer}/>
                    })}
                </tbody>
            </table>
        )
    }
}

export default Admin;