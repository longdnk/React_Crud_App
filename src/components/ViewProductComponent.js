import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent';
import LeftNavBar from './elements/LeftNavBar';
import PageNotFound from './404';
import Moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../store/actions';
import { connect } from 'react-redux';

class ViewProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            product: {},
            products: []
        }
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    formatMoney = (amt) => {
        var money = new Intl.NumberFormat("de-DE", { style: "currency", "currency": "VND" }).format(amt);
        return money;
    };

    notify = () => toast.success('Product deleted successfully!!!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: this.cancel.bind(this)
    });

    componentDidMount() {
        this.props.getProductById(this.state.id);
    }

    editProduct(id) {
        this.props.history.push(`/update-product/${id}`);
    }

    deleteProduct(id) {
        this.props.deleteProduct(id);
        this.notify();
    }

    cancel() {
        return this.props.history.push('/');
    }

    render() {
        let dataStore = this.props.example.detail.data;
        if (dataStore.products === null) {
            return <PageNotFound />
        }
        else {
            const infoData = dataStore;
            return (
                <div className="container nav-md body">
                    <div className="main_container">
                        <LeftNavBar />
                        <HeaderComponent />
                        <div className="right_col" role="main">
                            <div className="">
                                <div className="page-title">
                                    <div className="title_left">
                                        <h3>Products</h3>
                                    </div>
                                    <ToastContainer
                                        position="top-right"
                                        autoClose={2000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                    />
                                    <div className="title_right">
                                        <div className="col-md-5 col-sm-5   form-group pull-right top_search">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Search for..." />
                                                <span className="input-group-btn">
                                                    <button className="btn btn-secondary" type="button">Go!</button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="x_panel">
                                            <h4>Product Detail</h4>
                                            <div className="card-body">
                                                <table className="table table-bordered table-striped">
                                                    <tbody>
                                                        <tr>
                                                            <th className="col-2">Product Name</th>
                                                            {/* <td className="col-10">{this.state.product.name}</td> */}
                                                            <td className="col-10">{infoData.name}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Unit</th>
                                                            {/* <td>{this.state.product.unit}</td> */}
                                                            <td>{infoData.unit}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Price</th>
                                                            {/* <td>{this.state.product.price}</td> */}
                                                            {/* <td>{this.formatMoney(this.state.product.price)}</td> */}
                                                            <td>{this.formatMoney(infoData.price)}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Creator</th>
                                                            {/* <td>{this.state.product.created_user}</td> */}
                                                            <td>{infoData.created_user}</td>
                                                        </tr>

                                                        <tr>
                                                            <th>Date Created</th>
                                                            {/* <td>{this.state.product.created_at = Moment().format('DD-MM-YYYY')}</td> */}
                                                            <td>{infoData.created_at = Moment().format('DD-MM-YYYY')}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Updater</th>
                                                            {/* <td>{this.state.product.updated_user}</td> */}
                                                            <td>{infoData.updated_user}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Update Day</th>
                                                            {/* <td>{this.state.product.updated_at = Moment().format('DD-MM-YYYY')}</td> */}
                                                            <td>{infoData.updated_at = Moment().format('DD-MM-YYYY')}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Description</th>
                                                            {/* <td>{this.state.product.description}</td> */}
                                                            <td>{infoData.description}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className='row'>
                                                    <div className="col-auto mr-auto"> </div>
                                                    <div className="col-auto">
                                                        <div className="btn-group mr-2" role="group" aria-label="First group">
                                                            <button className="btn btn-info" onClick={() => this.editProduct(infoData.id)}>
                                                                <i className="fa fa-edit"></i>
                                                            </button>

                                                        </div>
                                                        <div className="btn-group mr-2" role="group" aria-label="First group">
                                                            <button className="btn btn-danger" data-toggle="modal" data-target=".ModalDelete">
                                                                <i className="fa fa-trash"></i>
                                                            </button>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="col-auto mr-auto"> <button onClick={this.cancel.bind(this)} className="btn btn-primary">Back</button></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="modal fade ModalDelete" tabIndex="-1" role="dialog" aria-hidden="true">
                        <div className="modal-dialog modal-md">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title" id="myModalLabel2">Delete Product</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p>Are you sure you want to delete the product?</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => this.deleteProduct(infoData.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getProducts: (PageNumber) => {
            dispatch(getProducts(PageNumber));
        },
        createProduct: (Product) => {
            dispatch(createProduct(Product));
        },
        getProductById: (ProductId) => {
            dispatch(getProductById(ProductId));
        },
        updateProduct: (Product, ProductId) => {
            dispatch(updateProduct(Product, ProductId));
        },
        deleteProduct: (ProductId) => {
            dispatch(deleteProduct(ProductId));
        },
        fetch: () => {
            dispatch(fetch());
        },
    };
}

function mapStateToProps(state) {
    return {
        example: state.example,
    }
}

// export default ViewProductComponent;

export default connect(mapStateToProps, mapDispatchToProps)(ViewProductComponent)