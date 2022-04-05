import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from '../reducers';

const middlewares = [thunk, logger];
export const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;