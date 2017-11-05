import fetch from 'isomorphic-fetch'
import PropTypes from 'prop-types';

// export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_GET = 'RECEIVE_GET'
export const CHANGE_NAME = 'CHANGE_NAME'
export const CHANGE_DONE = 'CHANGE_DONE'
// export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
// export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

/**
 * Receive GET query and put some data to state
 *
 * @param subreddit
 * @param json
 */
export function receiveGet(json){

    console.log("json >> ", json.tasks);

    return {
        type: RECEIVE_GET,
        lists: json.tasks.map((task,i) => task),
        receivedAt: Date.now()
    }
}

/**
 *
 * @returns {function(*, *)}
 */
export function receivedData(){
    return  (dispatch, state) => {
        alert("12322222222222222222222222222");
        fetch("http://boards-api.sys/app_dev.php/api/boards/")
             .then(response => response.json())
             .then(json => dispatch(receiveGet(json)));
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