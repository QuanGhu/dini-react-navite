import React, { Component } from 'react';
import { Image, Dimensions, Text, View, ActivityIndicator } from 'react-native';
import { Container, Button, Content, Toast} from 'native-base';
import Headermenu from '../component/HeaderComponent';
import { getDetail,onAddToCart,didAddToCart } from '../../action/productdetail';
import { connect } from 'react-redux';
import { getNoAuth,get,post } from '../../config/fetch';
import { getCartList } from '../../action/cart';

class Detail extends Component {
    componentWillMount() 
    {
        this.props.getProductsDetail(this.props.navigation.getParam('id'));
        if(this.props.profiledata.login) 
        {
            this.props.getCartList();
        }
    }

    onPressAddToCart(id){
        const sendData = JSON.stringify({
            "qty" : "1",
            "product_id" : id
        });
        this.props.addProductToCart(sendData);
    }

    render() {
        console.log(this.props.cart);
        return (
            <Container>
                <Headermenu title="Dummy Produk" icon="arrow-back" cardbadge={this.props.cart ? this.props.cart.cart_badge : null} nav={ () => this.props.navigation.goBack()} navcart={ () => this.props.navigation.navigate('Cartpage') }/>
                { this.props.detail ?
                    !this.props.detail.loading ?
                        <Content>
                            <Image
                                source={{uri: this.props.detail.product.image}}
                                style={{width: Dimensions.get('window').width, height: 400}}
                                resizeMode="cover"
                            />
                            <View style={{padding : 10, flex : 1, flexDirection : 'column' }}>
                                <Text style={{fontWeight : 'bold', fontSize : 28, color : '#000'}}>{this.props.detail.product.name}</Text>
                                <Text style={{fontSize : 18, color : '#000'}}>{this.props.detail.product.price}</Text>
                                <Text style={{ color : '#000'}}>
                                    {this.props.detail.product.description}
                                </Text>
                                { this.props.profiledata.login ?
                                    <Button block style={{marginTop : 15, marginBottom: 15}} onPress={ () => this.onPressAddToCart(this.props.detail.product.id)}>
                                        <Text style={{fontWeight : 'bold', color : '#fff'}}>Tambah Ke Keranjang</Text>
                                    </Button>
                                :
                                    <Button block style={{marginTop : 15, marginBottom: 15}} onPress={() => this.props.navigation.navigate('Profilepage')}>
                                        <Text style={{fontWeight : 'bold', color : '#fff'}}>Tambah Ke Keranjang</Text>
                                    </Button>
                                }
                            </View> 
                        </Content>
                    :
                        <View style={{flex : 1, justifyContent : 'center', alignItems: 'center'}}> 
                            <ActivityIndicator size="large" color="#f75400" />
                        </View>
                : 
                <View style={{flex : 1, justifyContent : 'center', alignItems: 'center'}}> 
                    <ActivityIndicator size="large" color="#f75400" />
                </View>
                }
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        detail : state.productdetail,
        profiledata : state.profiledata,
        cart : state.cart
    }
}

_getCartList = () => {
    get('cart/list')
    .then((response) => response.json())
    .then((responseData) => {
        if(responseData.success) {
            dispatch(getCartList(responseData.data))
        }
    })
    .catch((error) => {
        console.log(error)
    }) 
}

showNotification = (text, buttonText, position, type) => {
    Toast.show({
        text: text,
        buttonText: buttonText,
        position: position,
        type : type
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProductsDetail: (id) => {
            getNoAuth('product/detail/'+id)
            .then((response) => response.json())
            .then(async (responseData) => {
                dispatch(getDetail(responseData.data))
            })
            .catch((error) => {
                console.log(error)
            })
        },
        addProductToCart : (data) => {
            dispatch(onAddToCart())
            return post(data, 'product/addtocart')
            .then((response) => response.json())
            .then((responseData) => {
                if(responseData.status) {
                    this._getCartList();
                }
            })
            .then(() => dispatch(didAddToCart()))
            .catch((error) => {
                console.log(error)
            }) 
        },
        getCartList : () => {
            get('cart/list')
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData)
                if(responseData.success) {
                    dispatch(getCartList(responseData.data))
                }
            })
            .catch((error) => {
                console.log(error)
            }) 
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)