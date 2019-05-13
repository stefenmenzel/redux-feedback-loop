import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Input, InputBase, InputLabel, TextField} from '@material-ui/core';

import './Comment.css';

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
        if(this.state.newComment === ''){
            alert('Please add a comment');
            return;
        }
        this.props.dispatch({type: 'SET_COMMENT', payload: this.state})
        this.props.history.push('/review');
    }

    render(){
        return(
            <div>
                <h2>Any comments you want to leave?</h2>
                <form onSubmit={this.handleSubmit}>
                    <InputLabel htmlFor='comments' classes>Comments?</InputLabel>
                    <Input className='formInput' onChange={this.handleChange} id='comments' type="text" />
                    <Button className='formButton' type='submit' variant='contained' color='primary'>NEXT</Button>
                </form>                
            </div>
        )
    }
}

export default connect()(Comments);