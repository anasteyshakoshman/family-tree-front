import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { } from '../reducers';

const rootReducer = combineReducers({
   // reducers list
});

const index = () => {
    const isDev = process.env.NODE_ENV !== 'production';

    /* eslint-disable no-underscore-dangle */
    return createStore(
        rootReducer,
        compose(
            applyMiddleware(thunk),
            isDev && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
    );
}

export const store = index();
