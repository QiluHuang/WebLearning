import React from 'react';

const allMessages = [
    {id: 1, title: 'message001', content: "I LOVE Java"},
    {id: 3, title: 'message003', content: "I LOVE Coding"},
    {id: 5, title: 'message005', content: "I HATE Front-End"}
]

const MessageDetail = (props) => {
    // console.log('打印:' , props);

    const {id} = props.match.params;
    debugger;
    const message = allMessages.find((m) => m.id===id*1);

    return (
        
        <ul>
            <li>ID: {message.id}</li>
            <li>TITLE: {message.title}</li>
            <li>CONTENT: {message.content}</li>
        </ul>
    )
}

export default MessageDetail;