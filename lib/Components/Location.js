import React, { Component } from 'react';
import Console from 'react-console-component';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import cx from 'classnames';

import 'react-console-component/main.css';
import 'style/Location.scss';

class Location extends Component {
    render() {
        const { areas, coordinates } = this.props;
        return (
            <div>
                <h3>{'Your location'}</h3>
                {'x: '}{coordinates[0]}
                {'y: '}{coordinates[1]}
                <table className="map">
                    <tbody>
                    {areas.map((row, rowIdx) => (
                        <tr key={rowIdx}>
                        {row.map((cell, colIdx) => (
                            <td
                                className={cx({
                                    'map__cell': true,
                                    'map__cell--active': coordinates[0] === rowIdx && coordinates[1] === colIdx
                                })}
                                key={colIdx}
                            >.</td>
                        ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

import parse from 'Actions/parser/parse';

const ConnectedLocation = connect(
    ({map}) => ({
        ...map
    }),
    (dispatch) => ({
        parse: bindActionCreators(parse, dispatch),
    })
)(Location);

export default Location;
export { ConnectedLocation };
