import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import dataReducer from './reducers/reducers'

const loggerMiddleware = createLogger()

const middleware = [ thunkMiddleware ]

export default function configureStore(preloadedState) {
    return createStore(
        dataReducer,
        applyMiddleware(
            ...middleware
        )
    )
}