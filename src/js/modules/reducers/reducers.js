import { combineReducers } from 'redux'

import {
    RECEIVE_GET
} from '../actions.jsx'

const initialState = {
    tasks:[
        { text: "Laern js 1", completed:true },
        { text: "Laern js 2", completed:false },
        { text: "Laern js 3", completed:true },
    ]
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
            return { ...state, lists: action.lists, filter: 'SHOW_ALL' , receivedTime: action.receivedAt};
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