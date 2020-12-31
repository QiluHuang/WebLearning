import React, { Component } from 'react';
import styles from './Square.module.css';

// class Square extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value = null,
//         };
//     }

//     render() {
//         return (
//             <button
//              className={styles.square}
//              onClick={() => this.props.onClick()}
//             >
//                 {this.props.value}
//             </button>
//         );
//     }
// }

function Square(props) {


    return (
        <button className={styles.square} onClick={props.onClick}>
            {props.value}
        </button>
    );
}


export default Square;