import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListProductComponent from './components/ListProductComponent';
import CreateProductComponent from './components/CreateProductComponent';
import ViewProductComponent from './components/ViewProductComponent';
import Login from './components/Login';
import PrivateRoute from './auth/PrivateRoute';
import PublicRoute from './auth/PublicRoute';
import PageNotFound from './components/404';
import UpdateProductComponent from './components/UpdateProductComponent';

function App() {

	return (
		<div>
			<Router>
				<Switch>
					<PublicRoute
						restricted={true}
						component={Login}
						path="/login"
						exact
					/>
					<PrivateRoute component={ListProductComponent} path="/" exact />
					<PrivateRoute component={ListProductComponent} path="/products" />
					<PrivateRoute component={CreateProductComponent} path="/add-product/" />
					<PrivateRoute component={UpdateProductComponent} path="/update-product/:id" />
					<PrivateRoute component={ViewProductComponent} path="/product/:id" />
					<PrivateRoute component={PageNotFound} />
				</Switch>
			</Router>

		</div>

	);
}

// function mapDispatchToProps(dispatch) {
// 	return {
// 		getProductsAction: () => {
// 			dispatch(getProductsAction());
// 		},
// 		createProductAction: () => {
// 			dispatch(createProductAction());
// 		},
// 		getProductByIdAction: () => {
// 			dispatch(getProductByIdAction());
// 		},
// 		updateProductAction: () => {
// 			dispatch(updateProductAction());
// 		},
// 		deleteProductAction: () => {
// 			dispatch(deleteProductAction());
// 		},
// 	};
// }

// function mapStateToProps(state) {
// 	return {
// 		example: state.example,
// 	}
// }

export default App;
