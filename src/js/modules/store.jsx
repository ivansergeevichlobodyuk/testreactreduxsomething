import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import dataReducer from './reducers/reducers'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
    console.log('dsatra reducers ', dataReducer);
    return createStore(
        dataReducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
}