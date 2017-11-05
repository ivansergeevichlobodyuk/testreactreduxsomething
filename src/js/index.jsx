import React from 'react';
import ReactDOM from 'react-dom';
import Root from './modules/containers/root';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


// let taskList = [
//     { name: "Laern js 1", text:"text 33" },
//     { name: "Laern js 2", text:"text 22" },
//     { name: "Laern js 3", text:"text 11" },
// ];
//
// let jo = "45454";

ReactDOM.render(
        <Root />,
        document.getElementById('fofo')
);