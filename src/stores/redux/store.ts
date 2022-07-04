import { applyMiddleware, createStore } from 'redux'
import reducers from './projectId'
import thunk from "redux-thunk"
export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)
