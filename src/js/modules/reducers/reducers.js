import { combineReducers } from 'redux'

import {
    RECEIVE_GET,
    ADD_ITEM
} from '../actions.jsx';

const initialState = {
    lists:[],
    isFetched: false,
    filter: 'SHOW_ALL',
    receivedTime: Date.now()
}

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
                receivedTime: action.receivedTime
            };
        break;

        case ADD_ITEM:
            return Object.assign( { },
                state,
                {
                    lists: state.getState().lists.push(action.item),
                    addedTime: action.addedAt
                }
            )
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