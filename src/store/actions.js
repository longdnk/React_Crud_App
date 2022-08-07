import axios from 'axios';
import * as CONSTANTS from "./constants"
import { toast } from 'react-toastify';

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
            pushMessage(res.data.code, "Create");
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
            pushMessage(res.data.code, "Update");
        }).catch(e => {
            console.log(e);
            notifyError(e.message);
        });
    }
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
            pushMessage(res.data.code, "Delete");
        }).catch(e => {
            console.log(e.message);
            pushMessage(141, "Error Message");
        });
    }
}

export function deleteProductAction(res) {
    return {
        type: CONSTANTS.DELETE_PRODUCT_ACTION,
        payload: res.data.data,
        reload: true,
    };
}

export function deleteProductActionLoading() {
    return {
        type: CONSTANTS.DELETE_PRODUCT_ACTION_LOADING,
        payload: null,
        reload: false,
    };
}

function pushMessage(code, actionMessage) {
    let message = "";
    switch (actionMessage) {
        case "Create":
            message = "Create ";
            break;
        case "Delete":
            message = "Delete ";
            break;
        case "Update":
            message = "Update ";
            break;
        default:
            message = "ERR";
            break;
    }
    code === 200 ? notifySucess(message + "Success") : notifyError(message + "Error !!!");
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