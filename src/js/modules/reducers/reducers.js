import { combineReducers } from 'redux'

import {
    RECEIVE_GET
} from '../actions.jsx'

/**
 * Gets data
 *
 * @param state
 * @param action
 * @returns {*}
 */
function getsData(state = {}, action){
    switch (action.type){
        case RECEIVE_GET:
            return Object.assign({}, state, {lists: action.lists, receivedAt: action.receivedAt})
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