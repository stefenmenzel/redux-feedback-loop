import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button} from '@material-ui/core';

import './Thanks.css';

class Thanks extends Component {

    setupNewFeedback = () => {
        this.props.dispatch({type: 'RESET_STATE'});
        this.props.dispatch({ type: 'SUBMIT_FEEDBACK' });
        this.props.submit();
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
                <h2>Thank You!</h2>
                {/* For some reason the CSS wasn't applying font-size...weird, material UI is bossy */}
                <Button className='formButton' style={{fontSize: '11px' }} variant='contained' color='primary' onClick={this.setupNewFeedback}>Leave New Feedback</Button>
            </div>
        )
    }
}

export default withRouter(connect()(Thanks));