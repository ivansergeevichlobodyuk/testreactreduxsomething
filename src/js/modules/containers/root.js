import React, { Component } from 'react'
import { Provider } from 'react-redux'
import List from '../components/list.jsx';
import configureStore from '../store.jsx';

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