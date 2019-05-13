import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Header.css';

class Header extends Component{

    conditionalHeader = () => {        
        return (
            (this.props.isSubmitted.isSubmitted) ?

            <div>
                <h1 className="finishedHeader">Feedback!</h1>
                <img src="images/Circle-icons-star.png" alt="star icon"></img>
            </div> :
            
            <div>
                <h1 className="App-title">Feedback!</h1>
                <h4><i>Don't forget it!</i></h4>
            </div>
        )
    }

    render(){
        return(
            <div>
                {this.conditionalHeader()}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return { isSubmitted: reduxState.submitted};
}

export default connect(mapStateToProps)(Header);