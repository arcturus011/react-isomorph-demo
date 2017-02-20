import React from 'react';
import ReactDOM from 'react-dom';
import '../stylus/modal.styl';

export default class ConfirmModal extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }



    onConfirm() {

        this.props.resolve(true);
    }

    onCancel() {
        this.props.reject(false);

    }

    render() {
        return (
            <div className="modal" style={{display: this.props.show ? 'block' : 'none'}}>
                <div className="modal-inner">
                    <h3>确认删除？</h3>
                    <div className="btn-action">
                        <button className="pure-button" onClick={this.onConfirm.bind(this)}>确认</button>
                        <button className="pure-button" onClick={this.onCancel.bind(this)}>取消</button>
                    </div>
                </div>
            </div>
        )
    }

}
