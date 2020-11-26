import React, {Component} from 'react';
import CommentAdd from '../CommentAdd/CommentAdd.jsx';
import CommentList from '../CommentList/CommentList.jsx';

class CommentPage extends Component {
    constructor (props) {
        super(props)
    
        this.state = {
          comments: []
        }
    
        this.delete = this.delete.bind(this)
    }

    componentDidMount () {
        //模拟异步获取数据
        setTimeout(() => {
          const comments = [
            {
              username: "Tom",
              content: "It's hard to learn ReactJS!",
              id: Date.now()
            },
            {
              username: "JACK",
              content: "I agree with you.",
              id: Date.now() + 1
            }
          ]
          this.setState({
            comments
          })
        }, 1000)
    }

    add = (comment) => {
        let comments = this.state.comments
        comments.unshift(comment)
        this.setState({ comments })
    }
    
      delete (index) {
        let comments = this.state.comments
        comments.splice(index, 1)
        this.setState({ comments })
    }

    render() {
        return (
            <div>
            <header className="site-header jumbotron">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <h1>Please evaluate React</h1>
                  </div>
                </div>
              </div>
            </header>
            <div className="container">
              <CommentAdd add={this.add}/>
              <CommentList comments={this.state.comments} delete={this.delete}/>
            </div>
          </div>
        );
    }
}

export default CommentPage;