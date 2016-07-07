import React, { Component, PropTypes } from 'react';
import Console from 'react-console-component';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import parse from 'Actions/parser/parse';
import clearMessage from 'Actions/parser/clearMessage';
import 'react-console-component/main.css';
import 'style/Input.scss';

export default class Input extends Component {
    static defaultProps = {
        mapMessage: ''
    }
    static propTypes = {
        clearMessage: PropTypes.func,
        coordinates: PropTypes.arrayOf(PropTypes.number),
        mapMessage: PropTypes.arrayOf(PropTypes.string),
        parse: PropTypes.func
    }
    constructor(props) {
        super(props);
        this.handleInput = ::this.handleInput;
    }
    componentWillUpdate(nextProps) {
        if(nextProps.message) {
            nextProps.message.forEach(msg => this.console.log(msg));
            this.props.clearMessage();
        }
        if(nextProps.coordinates !== this.props.coordinates) {
            nextProps.mapMessage.forEach(msg => this.console.log(msg));
            nextProps.mapItemMessage.forEach(msg => this.console.log(msg));
        }
        return true;
    }
    handleInput(text) {
        this.props.parse(text);
        this.console.return();
    }
    render() {
        return (
            <Console
                autofocus
                handler={this.handleInput}
                ref={e => this.console = e}
                welcomeMessage={'You find yourself next to your home. Your foot hurts.'}
            />
        );
    }
}

const ConnectedInput = connect(
    ({ inventory, items, map, message }) => {
        const location = map.areas[map.coordinates[0]][map.coordinates[1]];
        return {
            coordinates: map.coordinates,
            mapMessage: Array.isArray(location.description) ? location.description : [location.description],
            mapItemMessage: Object.keys(location.descriptions || {})
                .map(item => {
                    return inventory.indexOf(items[item]) > -1 ? null : location.descriptions[item]
                })
                .filter(item => !!item),
            message: Array.isArray(message) ? message : [message]
        };
    },
    (dispatch) => ({
        clearMessage: bindActionCreators(clearMessage, dispatch),
        parse: bindActionCreators(parse, dispatch),
    })
)(Input);

export { ConnectedInput };
