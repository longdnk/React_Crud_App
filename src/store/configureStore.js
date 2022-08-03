import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from "redux";
import { reducer } from './reducer';

// Create root reducer
const rootReducer = combineReducers({
    "example": reducer
})

// NOTE: Do not change middleares delaration pattern since rekit plugins may register middlewares to it.
const middlewares = [thunk];

function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middlewares),
        ),
    );

    return store
}

export default configureStore();
