import { combineReducers } from  'redux';
import Auth from './Auth';
import Category from './Category';
import Product from './Product';
import ProductDetail from './ProductDetail';

export default combineReducers ({
    auth : Auth,
    categories : Category,
    products : Product,
    productdetail : ProductDetail
})