import axios from 'axios';
import * as CONSTANTS from "./constants"

const Product_API_BASE_URL = "http://34.124.251.21:8000/api/v1/admin/products";

export function getProducts(PageNumber) {
    let url = Product_API_BASE_URL + "/?page=" + PageNumber;
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

export function getProductById(ProductId) {
    let url = Product_API_BASE_URL + '/' + ProductId;
    var retrievedObject = localStorage.getItem('token');
    const token = retrievedObject;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    return dispatch => {
        dispatch(getProductByIdLoadingAction())
        return axios.get(url, config).then(res => {
            dispatch(getProductsByIdAction(res))
        }).catch(e => {
            console.log(e);
        });
    }
}

export function getProductsByIdAction(res) {
    return {
        type: CONSTANTS.GET_PRODUCT_BY_ID_ACTION,
        payload: res.data.data,
    };
}

export function getProductByIdLoadingAction() {
    return {
        type: CONSTANTS.GET_PRODUCT_BY_ID_ACTION_LOADING,
        payload: null,
    };
}

export function createProduct(Product) {
    let url = Product_API_BASE_URL;
    var retrievedObject = localStorage.getItem('token');
    const token = retrievedObject;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    return dispatch => {
        dispatch(createProductLoadingAction());
        return axios.post(url, Product, config).then(res => {
            dispatch(createProductAction(res.data.data));
        }).catch(e => {
            console.log(e);
        });
    }
}

export function createProductAction(res) {
    return {
        type: CONSTANTS.CREATE_PRODUCT_ACTION,
        payload: res,
    };
}

export function createProductLoadingAction() {
    return {
        type: CONSTANTS.CREATE_PRODUCT_ACTION_LOADING,
        payload: null,
    };
}

export function updateProduct(Product, ProductId) {
    let url = Product_API_BASE_URL + '/' + ProductId;
    var retrievedObject = localStorage.getItem('token');
    const token = retrievedObject;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    return dispatch => {
        dispatch(updateProductActionLoading())
        return axios.post(url, Product, config).then(res => {
            dispatch(updateProductAction(res))
        }).catch(e => {
            console.log(e);
        });
    }
}

export function updateProductAction(res) {
    return {
        type: CONSTANTS.UPDATE_PRODUCT_ACTION,
        payload: res.data.data,
    };
}

export function updateProductActionLoading() {
    return {
        type: CONSTANTS.UPDATE_PRODUCT_ACTION_LOADING,
        payload: null,
    };
}

export function deleteProduct(ProductId) {
    let url = Product_API_BASE_URL + '/' + ProductId;
    var retrievedObject = localStorage.getItem('token');
    const token = retrievedObject;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    return dispatch => {
        dispatch(deleteProductActionLoading())
        return axios.delete(url, ProductId, config).then(res => {
            dispatch(deleteProductAction(res))
        }).catch(e => {
            console.log(e);
        });
    }
}

export function deleteProductAction(res) {
    return {
        type: CONSTANTS.DELETE_PRODUCT_ACTION,
        payload: res.data.data,
    };
}

export function deleteProductActionLoading() {
    return {
        type: CONSTANTS.DELETE_PRODUCT_ACTION_LOADING,
        payload: null,
    };
}