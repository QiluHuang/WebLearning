import React, {useState} from 'react';
import { Route, NavLink, Link } from 'react-router-dom';

import MessageDetail from '../MessageDetail/MessageDetail.jsx';

const Messages = () => {
    

    let messages = [                
        {id: 1, title: 'message001'},
        {id: 3, title: 'message003'},
        {id: 5, title: 'message005'}
    ]
    
    

    return (
        <div>
            <ul>
                {
                    messages.map((m, index) => (
                        <li key={index}>
                            <Link to={`/home/messages/messagedetail/${m.id}`}>{m.title}</Link>
                        </li>
                    ))
                }
            </ul>
            <Route path="/home/messages/messagedetail/:id" component={MessageDetail}/>
        </div>
        
    );
}

export default Messages;