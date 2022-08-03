import axios from 'axios';
import * as CONSTANTS from "./constants"

const Product_API_BASE_URL = "http://34.124.251.21:8000/api/v1/admin/products";
var retrievedObject = localStorage.getItem('token');
const token = retrievedObject;
const config = {
    headers: { Authorization: `Bearer ${token}` }
}

export function fetchAction(response) {
    return {
        type: CONSTANTS.FETCH_ACTION,
        payload: JSON.stringify(response.data) ?? ""
    };
}

export function fetchLoadingAction() {
    return {
        type: CONSTANTS.FETCH_LOADING_ACTION,
        payload: null
    };
}

export function fetch() {
    let url = Product_API_BASE_URL;
    return dispatch => {
        dispatch(fetchLoadingAction())
        return axios.get(url, {}).then(res => {
            dispatch(fetchAction(res))
        }).catch(e => {
            console.log(e);
        });
    }
}

export function getProducts(PageNumber) {
    let url = Product_API_BASE_URL;
    var retrievedObject = localStorage.getItem('token');
    const token = retrievedObject;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    return dispatch => {
        dispatch(getProductLoadingAction())
        return axios.get(url, config).then(res => {
            dispatch(getProductsAction(res))
        }).catch(e => {
            console.log(e);
        });
    }
}

export function getProductsAction(res) {
    return {
        type: CONSTANTS.GET_PRODUCT_ACTION,
        payload: res.data.data,
    };
}

export function getProductLoadingAction() {
    return {
        type: CONSTANTS.GET_PRODUCT_ACTION_LOADING,
        payload: null,
    };
}

export function createProduct(Product) {
    return {
        type: CONSTANTS.CREATE_PRODUCT_ACTION,
        payload: axios.post(Product_API_BASE_URL, Product, config),
    }
}

export function getProductById(ProductId) {
    return {
        type: CONSTANTS.GET_PRODUCT_BY_ID_ACTION,
        payload: axios.get(Product_API_BASE_URL + '/' + ProductId, config),
    }
}

export function updateProduct(Product, ProductId) {
    return {
        type: CONSTANTS.UPDATE_PRODUCT_ACTION,
        payload: axios.post(Product_API_BASE_URL + '/' + ProductId, Product, config),
    }
}

export function deleteProduct(ProductId) {
    return {
        type: CONSTANTS.DELETE_PRODUCT_ACTION,
        payload: axios.delete(Product_API_BASE_URL + '/' + ProductId, config),
    }
}