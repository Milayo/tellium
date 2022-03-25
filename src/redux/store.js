import rootReducer from "./root-reducer.js";

import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

