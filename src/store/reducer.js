import initialState from "./initialState";
import * as CONSTANTS from "./constants";

export function reducer(state = initialState, action) {
    switch (action.type) {
        case CONSTANTS.CREATE_PRODUCT_ACTION:
            return {
                ...state,
                products: action.payload,
                loading: false,
            }
        case CONSTANTS.UPDATE_PRODUCT_ACTION:
            return {
                ...state,
                products: action.payload,
                loading: false,
            }
        case CONSTANTS.DELETE_PRODUCT_ACTION:
            return {
                ...state,
                products: action.payload,
                loading: false,
            }
        case CONSTANTS.GET_PRODUCT_ACTION:
            return {
                ...state,
                products: {
                    data: action.payload.data,
                    length: action.payload.total,
                    loading: false,
                }
            }
        case CONSTANTS.GET_PRODUCT_ACTION_LOADING:
            return {
                ...state,
                products: {
                    data: [],
                    length: 0,
                    loading: true,
                }
            }
        case CONSTANTS.GET_PRODUCT_BY_ID_ACTION:
            return {
                ...state,
                products: {
                    data: action.payload,
                },
                loading: false,
            }
        case CONSTANTS.GET_PRODUCT_BY_ID_ACTION_LOADING:
            return {
                ...state,
                products: {
                    data: [],
                    loading: true,
                }
            }
        default:
            return state;
    }
}