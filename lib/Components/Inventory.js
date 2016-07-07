import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Inventory extends Component {
    static propTypes = {
        inventory: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
        })),
        parse: PropTypes.func,
    }
    constructor(props) {
        super(props);
        this.handleInput = ::this.handleInput;
    }
    handleInput(text) {
        this.console.log(text);
        this.console.return();
        this.props.parse(text);
    }
    render() {
        const { inventory } = this.props;
        return (
            <div>
                <h3>{'Your inventory'}</h3>
                <ul>
                {inventory.map((item, idx) => (
                    <li key={idx}>{item.name}</li>
                ))}
                </ul>
            </div>
        );
    }
}

import parse from 'Actions/parser/parse';

const ConnectedInventory = connect(
    ({inventory}) => ({
        inventory
    }),
    (dispatch) => ({
        parse: bindActionCreators(parse, dispatch),
    })
)(Inventory);

export default Inventory;
export { ConnectedInventory };
