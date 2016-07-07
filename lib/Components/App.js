import React, { Component } from 'react';
import { ConnectedInput } from 'Components/Input';
import { ConnectedInventory } from 'Components/Inventory';
import { ConnectedLocation } from 'Components/Location';
import Console from 'react-console-component';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import 'react-console-component/main.css';


class App extends Component {
    render() {
        const { inventory } = this.props;
        return (
            <div>
                <ConnectedInput />
                <ConnectedInventory />
                <ConnectedLocation />
            </div>
        );
    }
}

const ConnectedApp = connect(
    (state) => ({ }),
    (dispatch) => ({ })
)(App);

export default App;
export { ConnectedApp };
