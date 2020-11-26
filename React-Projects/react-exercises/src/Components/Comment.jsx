import React from 'react';
import Avatar from './Avatar';
import UserInfo from './UserInfo';


/**  该组件用于描述一个社交媒体网站上的评论功能，
     它接收 author（对象），text （字符串）以及 date（日期）作为 props。*/

// function Comment(props) {
//     return (
//       <div className="Comment">
//         <div className="UserInfo">
//           <img className="Avatar"
//             src={props.author.avatarUrl}
//             alt={props.author.name}
//           />
//           <div className="UserInfo-name">
//             {props.author.name}
//           </div>
//         </div>
//         <div className="Comment-text">
//           {props.text}
//         </div>
//         <div className="Comment-date">
//           {formatDate(props.date)}
//         </div>
//       </div>
//     );
//   }



function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author}/>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
}

export default Comment;