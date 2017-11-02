import fetch from 'isomorphic-fetch'

// export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_GET = 'RECEIVE_POSTS'
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
export function receiveGet(subreddit, json){
    type: RECEIVE_GET,
    subreddit,
    lists: json.data.children.map(child => child.data),
    receivedAt: Date.now()
}

/**
 * Changes name
 *
 * @param id
 * @param name
 */
export function changeName(id,name){
    type: CHANGE_NAME,
    id,
    name
}
