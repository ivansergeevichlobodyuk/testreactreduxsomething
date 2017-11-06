import { combineReducers } from 'redux'

import {
    RECEIVE_GET
} from '../actions.jsx';

const initialState = {
    lists:[],
    isFetched: false,
    filter: 'SHOW_ALL',
    receivedTime: Date()
};

/**
 * Gets data
 *
 * @param state
 * @param action
 * @returns {*}
 */
function getsData(state = initialState, action){
    switch (action.type){
        case RECEIVE_GET:
            console.log("redux receive get", state);
            return { ...state,
                lists: action.lists,
                filter: 'SHOW_ALL' ,
                isFetched: true,
                receivedTime: action.receivedAt
            };
        break;
        default:
                return state;
    }
}

/**
 *
 * @type {Reducer<S>}
 */
const dataReducer = combineReducers( {
   getsData
});

/**
 * Export the combined reducer
 */
export default dataReducer;