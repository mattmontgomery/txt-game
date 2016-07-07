import React from 'react';
import { render } from 'react-dom';
import { App, ConnectedApp } from './Components';
import { Provider } from 'react-redux';
import store from './store';

// rendering

const div = document.createElement('div')
document.body.appendChild(div);
render(
    <Provider store={store}><ConnectedApp /></Provider>
, div);
