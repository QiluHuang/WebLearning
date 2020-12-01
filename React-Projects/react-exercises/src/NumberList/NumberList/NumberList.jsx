import React from 'react';
import ListItem from '../ListItem/ListItem.jsx';

function NumberList(props) {
    // const numbers = props.numbers;
    const numbers = [1, 2, 3, 4, 5];
    // 当你创建一个元素时，必须包括一个特殊的 key 属性
    const listItems = numbers.map((number) => 
        // <li key={number.toString()}>{number}</li> 
        <ListItem key={numbers.toString()} value={number}/>
    );
    return (<ul>{listItems}</ul>);
}

export default NumberList;