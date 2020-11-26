import React, {Component} from 'react';
import PropTypes from 'prop-types'
import CommentListItem from '../CommentListItem/CommentListItem.jsx';
import './CommentList.css';

class CommentList extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        let comments = this.props.comments;
        let display = comments.length > 0 ? 'none' : 'block';
        return (
            <div className="col-md-8">
                <h3 className="comments">Comments:</h3>
                <h2 style={{ display: display }}>No comments. please leave your thoughts in the left box and submit it. </h2>
                <ul className={{ display: display}}>
                    {
                        comments.map((comment, index) => {
                            console.log(comment)
                            return <CommentListItem comment={comment} key={index} index={index} delete={this.props.delete}/>
                        })
                    }
                </ul>
            </div>
        );
    }
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired,
    delete: PropTypes.func.isRequired
  }

export default CommentList;