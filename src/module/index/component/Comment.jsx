import React from 'react';
import ReactDOM from 'react-dom';
import '../stylus/comment.styl';

export default class Comment extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="comment-section pure-form">
                <textarea name="comment-input" id="comment-input" placeholder="add todo"></textarea>
                <button className="pure-button pure-button-primary">ADD</button>
            </div>
        )
    }

}

Comment.propTypes = {
    handleAddComment: React.PropTypes.func.isRequired
}