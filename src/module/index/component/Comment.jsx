import React from 'react';
import ReactDOM from 'react-dom';
import '../stylus/comment.styl';

export default class Comment extends React.Component {
    constructor() {
        super();

        this.state = {
            commentText: ''
        }
    }

    componentDidMount() {

    }

    add() {

        let text = this.commentInput.value;

        if (!text) return false;

        this.props.handleAddComment(text);


        this.commentInput.value = '';

    }

    render() {
        return (
            <div className="comment-section pure-form">
                <textarea ref={el => this.commentInput = el}
                          name="comment-input"
                          id="comment-input"
                          placeholder="add todo"></textarea>
                <button onClick={this.add.bind(this)} className="pure-button pure-button-primary">ADD</button>
            </div>
        )
    }

}

Comment.propTypes = {
    handleAddComment: React.PropTypes.func.isRequired
}