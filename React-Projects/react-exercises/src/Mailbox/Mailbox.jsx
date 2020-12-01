import React from 'react';

const messages = ['React', 'Re: React', 'Re:Re: React'];


function Mailbox(props) {
    const unreadMessages = ['React', 'Re: React', 'Re:Re: React'];
    return (
        <div>
            <h1>Hello!</h1>
            {/* 之所以能这样做，是因为在 JavaScript 中，true && expression 总是会返回 expression, 而 false && expression 总是会返回 false。 */}
            {unreadMessages.length > 0 && 
                <h2>You have {unreadMessages.length} unread messages</h2>
            }
        </div>
    );
}

export default Mailbox;