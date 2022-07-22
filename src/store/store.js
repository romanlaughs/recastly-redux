import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
// const reducerFn = (state = { videos: [],
//   currentVideo: null}, action) => {
//   return state;
// };

var callThunk = applyMiddleware(thunk);
const store = createStore(rootReducer, { currentVideo: exampleVideoData[0], videoList: exampleVideoData }, callThunk);


export default store;