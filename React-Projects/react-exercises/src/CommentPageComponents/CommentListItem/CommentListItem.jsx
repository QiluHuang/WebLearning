import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './CommentListItem.css';

class CommentListItem extends Component {
    constructor (props) {
        super(props);
        
    }

    deleteComment () {
        let username = this.props.comment.username;
        if (window.confirm(`Are you sure to delete${username}\'s comments`)) {
            this.props.delete(this.props.index);
        }
    }

    render() {
        let comment = this.props.comment;
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:" onClick={this.deleteComment}>Delete</a>
                </div>
            </li>
        );
    }
}

CommentListItem.propsType = {
    comment: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    delete: PropTypes.func.isRequired
}

export default CommentListItem;