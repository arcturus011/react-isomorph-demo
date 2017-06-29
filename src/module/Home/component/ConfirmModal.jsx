import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class ConfirmModal extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                hello
            </div>
        )
    }

}

ConfirmModal.propTypes = {
    resolve: PropTypes.func.isRequired,
    reject: PropTypes.func.isRequired,
    show: PropTypes.bool
}

ConfirmModal.contextTypes = {
    store: React.PropTypes.object
};