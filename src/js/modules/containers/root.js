import React, { Component } from 'react'
import { Provider } from 'react-redux'
import List from '../components/list';
import configureStore from '../store.jsx';
import {receivedData} from '../actions.jsx';

const store = configureStore();


export default class Root extends Component {
    render(){
        return (
            <Provider store={store}>
                <List />
            </Provider>
        )
    }
}