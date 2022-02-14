import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk"
import rootReducer from '../reducers/index'


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
    }
}


export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);
    // eslint-disable-next-line no-underscore-dangle
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        rootReducer,
        composeEnhancers(
            middleWareEnhancer
        ),
    );

    return store;
}