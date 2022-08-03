import axios from 'axios';

const Product_API_BASE_URL = "http://34.124.251.21:8000/api/v1/admin/products";
var retrievedObject = localStorage.getItem('token');
const token = retrievedObject;
const config = {
    headers: { Authorization: `Bearer ${token}` }
}


export function getData() {
    let khoaoccho = axios.get("http://34.124.251.21:8000/api/v1/admin/products/69", config).then((khoaoccho) => {
        console.log(khoaoccho.data.data);
        let info = khoaoccho.data.data;
        for (let x in info) {
            console.log(x, info[x]);
        }
    });
    console.log(khoaoccho);
}

export function getProducts(PageNumber) {
    return axios.get(Product_API_BASE_URL + '/?page=' + PageNumber, config);
}

export function createProduct(Product) {
    return axios.post(Product_API_BASE_URL, Product, config);
}

export function getProductById(ProductId) {
    return axios.get(Product_API_BASE_URL + '/' + ProductId, config);
}

export function updateProduct(Product, ProductId) {
    return axios.post(Product_API_BASE_URL + '/' + ProductId, Product, config);
}

export function deleteProduct(ProductId) {
    return axios.delete(Product_API_BASE_URL + '/' + ProductId, config);
}