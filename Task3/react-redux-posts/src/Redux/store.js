import {
    combineReducers,
    configureStore
} from '@reduxjs/toolkit'
import postsReducer from '../Features/posts/postSlice'
const rootReducer = combineReducers({
    posts: postsReducer,
})

// // initialState
// const initialState = {
// }

export const store = configureStore({
    reducer: rootReducer,
    // preloadedState: initialState
})