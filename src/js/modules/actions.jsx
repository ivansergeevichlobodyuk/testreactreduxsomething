import fetch from 'isomorphic-fetch'
import PropTypes from 'prop-types';

// export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_GET = 'RECEIVE_GET'
export const CHANGE_NAME = 'CHANGE_NAME'
export const CHANGE_DONE = 'CHANGE_DONE'
export const ADD_ITEM = 'ADD_ITEM'
export const EDIT_ITEM = 'EDIT_ITEM'
export const TOGGLE_EDIT = 'TOGGLE_EDIT'
export const TOGGLE_EDIT_ITEM = 'TOGGLE_EDIT_ITEM'
// export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
// export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

/**
 * Receive GET query and put some data to state
 *
 * @param subreddit
 * @param json
 */
export function receiveGet(json){
    return {
        type: RECEIVE_GET,
        lists: json.tasks.map((task,i) => task),
        receivedTime: Date.now()
    }
}

/**
 *
 * @param json
 * @returns {{type: string, item: *, addedAt: number}}
 */
export function addItem(json){
    return {
        type: ADD_ITEM,
        item: json.item,
        addedAt: Date.now()
    }
}

/**
 * Edit item
 *
 * @param json
 * @returns {{type: *, item: *, editedAt: number}}
 */
export function editItem ( json ) {
    return {
        type: EDIT_ITEM,
        item: json.item,
        editedAt: Date.now()
    }
}

/**
 * Turn on edit mode
 *
 * @returns {{type: string, isEdit: number}}
 */
export function toggleEdit( ){
    return {
        type: TOGGLE_EDIT,
    }
}

/**
 * Toggle edited item
 *
 * @param id
 * @returns {{type: string, id: *}}
 */
export function toggleEditItem( id ){
    return {
        type: TOGGLE_EDIT_ITEM,
        id
    }
}

/**
 * Edit item data
 *
 * @param data
 * @returns {function(*, *)}
 */
export function editItemData(data){
    return (dispatch, getState) => {
        fetch("http://boards-api.sys/app_dev.php/api/tasks/".data.id, {method: "PUT", data: {data}})
            .then(response => response.json())
            .then(json => dispatch(editItem(json)))
    }
}

/**
 * Adds item data
 *
 * @param data
 * @returns {function(*, *)}
 */
export function addItemData(data){
    return (dispatch, getState) => {
        fetch("http://boards-api.sys/app_dev.php/api/board", {method: "POST", data: {data}})
            .then(response=>response.json())
            .then(json => dispatch(addItem(json)))
    }
}

/**
 *
 * @returns {function(*, *)}
 */
export function receivedData(){
    return  (dispatch, getState) => {
        console.log('is fetched', getState().getsData.isFetched);
        if ( getState().getsData.isFetched == false ){
            fetch("http://boards-api.sys/app_dev.php/api/boards/")
                .then(response => response.json())
                .then(json => dispatch(receiveGet(json)));
        }
    }
}

/**
 * Changes name
 *
 * @param id
 * @param name
 */
export function changeName(id,name){
    return {
        type: CHANGE_NAME,
        id,
        name
    }
}