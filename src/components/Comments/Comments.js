import React, {Component} from 'react';
import {connect} from 'react-redux';

class Comments extends Component{

    //store comment in local component state while collecting string
    state = {
        newComment: ''
    }

    //collect comment from user
    handleChange = (event) => {
        this.setState({
            newComment: event.target.value
        })
    }

    //submit comment and send to redux state via dispatching action.
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'SET_COMMENT', payload: this.state})
        this.props.history.push('/review');
    }

    render(){
        return(
            <div>
                <h2>Any comments you want to leave?</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='comments'>Comments</label>
                    <input onChange={this.handleChange} type="text" placeholder="Comments" />
                    <button>NEXT</button>
                </form>                
            </div>
        )
    }
}

export default connect()(Comments);