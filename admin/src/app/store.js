import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers.js';

const middleware = [thunk];
const store = createStore(reducers, compose(applyMiddleware(...middleware)))

export default store;
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()