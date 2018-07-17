import React, { Component } from 'react';
import Home from './pages/home/Index';
import Product from './pages/product/Index';
import Cart from './pages/cart/Index';
import Checkout from './pages/checkout/Index';
import Profile from './pages/profile/Index';
import ProductDetail from './pages/product/Detail';
import Register from './pages/profile/Register';
import Reset from './pages/profile/Reset';
import Login from './pages/profile/Login';
import { StackNavigator } from 'react-navigation';

const RootNav = StackNavigator(
    {
        Homepage : Home,
        Productpage : Product,
        Productdetailpage : ProductDetail,
        Cartpage : Cart,
        Profilepage : Profile,
        Registerpage : Register,
        Resetpage : Reset,
        Loginpage : Login,
        Checkoutpage : Checkout
    },
    {
        initialRouteName: 'Homepage',
        headerMode : 'none'
    }
);

class Main extends Component {
    render() {
        return (
          <RootNav />
        );
      }
}

export default Main