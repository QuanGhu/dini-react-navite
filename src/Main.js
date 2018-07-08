import React, { Component } from 'react';
import Home from './pages/home/Index';
import Product from './pages/product/Index';
import Cart from './pages/cart/Index';
import Profile from './pages/profile/Index';
import ProductDetail from './pages/product/Detail';
import Register from './pages/profile/Register';
import Reset from './pages/profile/Reset';
import { StackNavigator } from 'react-navigation';

const RootNav = StackNavigator(
    {
        Homepage : Home,
        Productpage : Product,
        Productdetailpage : ProductDetail,
        Cartpage : Cart,
        Profilepage : Profile,
        Registerpage : Register,
        Resetpage : Reset
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