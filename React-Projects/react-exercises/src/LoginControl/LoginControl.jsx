import React from 'react';
import LoginButton from '../Button/LoginButton/LoginButton';
import LogoutButton from '../Button/LogoutButton/LogoutButton';
import Greeting from '../Greeting/Greeting.jsx';

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            isLoggedIn: false
        }
    }

    handleLoginClick() {
        this.setState({
            isLoggedIn: true
        })
    }

    handleLogoutClick() {
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        // if (isLoggedIn) {
        //     button = <LogoutButton onClick={this.handleLogoutClick}/>
        // } else {
        //     button = <LoginButton onClick={this.handleLoginClick}/>
        // }


        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {/* 三目运算符 */}
                <div>The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.</div>
                {isLoggedIn 
                    ? <LogoutButton onClick={this.handleLogoutClick}/>
                    : <LoginButton onClick={this.handleLoginClick}/>
                }
            </div>
        );
    }
}

export default LoginControl;