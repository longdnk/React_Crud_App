import initialState from "./initialState";
import * as CONSTANTS from "./constants";

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
        case CONSTANTS.FETCH_ACTION:
            return {
                ...state,
                fetch: {
                    ...state.fetch,
                    data: action.payload,
                    loading: false
                },
            }
        case CONSTANTS.FETCH_LOADING_ACTION:
            return {
                ...state,
                fetch: {
                    ...state.fetch,
                    data: action.payload,
                    loading: true
                },
            }
        default:
            return state;
    }
}