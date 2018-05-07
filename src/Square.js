import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    
};

// class Squre extends Component {
//     render() {
//         return (
//             <button className="square" onClick={()=> this.props.onClick()}>
//                 {this.props.value}
//             </button>
//         );
//     }
// }

function Square(props) {
    reutrn (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}
export default Squre;
