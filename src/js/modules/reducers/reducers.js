import { combineReducers } from 'redux'

import {
    RECEIVE_GET,
    ADD_ITEM,
    EDIT_ITEM,
    TOGGLE_EDIT,
    TOGGLE_EDIT_ITEM
} from '../actions.jsx';

const initialState = {
    lists:[],
    isFetched: false,
    isEdit: false,
    editedItems: [],
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
            console.log(" action received time ", action.receivedTime);
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

        case TOGGLE_EDIT:
            return Object.assign( { }, state, {
                isEdit:!state.isEdit
            })
            break;

        case TOGGLE_EDIT_ITEM:
            return Object.assign( { }, state, {
                editedItems: state.getState().editedItems.push(action.id)
             });
            break;


        case EDIT_ITEM:
            return Object.assign(  )
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