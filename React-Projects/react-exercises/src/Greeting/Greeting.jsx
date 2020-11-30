import React from 'react';
import GuestGreeting from './GuestGreeting/GuestGreeting.jsx';
import UserGreeting from './UserGreeting/UserGreeting.jsx';

function Greeting(props) {
    

    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />    
    }
    return <GuestGreeting />
}

export default Greeting;