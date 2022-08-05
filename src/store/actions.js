import axios from 'axios';
import * as CONSTANTS from "./constants"
import { ToastContainer, toast } from 'react-toastify';

const Product_API_BASE_URL = "http://34.124.251.21:8000/api/v1/admin/products";
var retrievedObject = localStorage.getItem('token');
const token = retrievedObject;
const config = {
    headers: { Authorization: `Bearer ${token}` }
}

export function getProducts(PageNumber) {
    let url = Product_API_BASE_URL + "/?page=" + PageNumber;
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
    return dispatch => {
        dispatch(createProductLoadingAction());
        return axios.post(url, Product, config).then(res => {
            dispatch(createProductAction(res.data.data));
            res.data.code == 200 ? notifySucess("Create Product Success") : notifyError("Create Product Error !!!");
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
    return dispatch => {
        dispatch(updateProductActionLoading())
        return axios.post(url, Product, config).then(res => {
            dispatch(updateProductAction(res));
            res.data.code == 200 ? notifySucess("Update Success") : notifyError("Update Error !!!");
        }).catch(e => {
            console.log(e);
            notifyError(e.message);
        });
    }
}

function notifyError(message) {
    toast.error(message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

function notifySucess(message) {
    toast.success(message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export function updateProductAction(res) {
    return {
        type: CONSTANTS.UPDATE_PRODUCT_ACTION,
        payload: res.data.message,
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
    return dispatch => {
        dispatch(deleteProductActionLoading())
        return axios.delete(url, config).then(res => {
            dispatch(deleteProductAction(res))
        }).catch(e => {
            console.log(e.message);
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