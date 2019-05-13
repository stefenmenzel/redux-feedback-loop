import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Select, MenuItem, InputLabel, FormControl} from '@material-ui/core/';

import './ScaleForm.css';

class ScaleForm extends Component {

    //store value until we hit the next button
    state = {
        formValue: 1
    }

    //update local component state
    handleChange = (event) => {
        this.setState({
            formValue: event.target.value
        })
    }

    //send state to redux through action dispatch.
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: this.props.formType.type, payload: this.state })
        this.props.passedProps.history.push(`${this.props.formType.nextPage}`)
    }

    render() {
        return (
            <div>
                <h2>{this.props.formType.header}</h2>
                <form onSubmit={this.handleSubmit}>                    
                        <InputLabel htmlFor={this.props.formType.label}>{this.props.formType.label}?</InputLabel>
                        <Select className='formSelect' value={this.state.formValue} onChange={this.handleChange} inputProps={{ id: this.props.formType.label, name: this.props.formType.label }}>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                        <Button className='formButton' type="submit" variant="contained" color="primary">NEXT</Button>                    
                </form>
            </div>
        )
    }
}

export default connect()(ScaleForm);