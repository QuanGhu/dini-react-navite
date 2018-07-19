import { combineReducers } from  'redux';
import Auth from './Auth';
import Category from './Category';
import Product from './Product';
import ProductDetail from './ProductDetail';
import Profile from './Profile';
import Cart from './Cart';
import Order from './Order';

export default combineReducers ({
    auth : Auth,
    categories : Category,
    products : Product,
    productdetail : ProductDetail,
    profiledata : Profile,
    cart : Cart,
    order : Order
})