import React, {Component} from 'react';
import {connect} from 'react-redux';

class ScaleForm extends Component{

    //store value until we hit the next button
    state ={
        formValue: 0
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
        this.props.dispatch({type:this.props.formType.type, payload: this.state })
        this.props.passedProps.history.push(`${this.props.formType.nextPage}`)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>{this.props.formType.header}</h2>
                    <label htmlFor={this.props.formType.label}>{this.props.formType.label}?</label>
                    <select onChange={this.handleChange} id={this.props.formType.label} name={this.props.formType.label}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button>NEXT</button>
                </form>
            </div>
        )
    }
}

export default connect()(ScaleForm);