import initialState from "./initialState";
import * as CONSTANTS from "./constants";
import axios from 'axios';

export function reducer(state = initialState, action) {
    switch (action.type) {
        case CONSTANTS.CREATE_PRODUCT_ACTION:
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        case CONSTANTS.UPDATE_PRODUCT_ACTION:
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        case CONSTANTS.DELETE_PRODUCT_ACTION:
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        case CONSTANTS.GET_PRODUCT_ACTION:
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        case CONSTANTS.GET_PRODUCT_BY_ID_ACTION:
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}