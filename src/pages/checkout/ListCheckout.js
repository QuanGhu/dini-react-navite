import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import { getCartList } from '../../action/cart';
import { changeAddress, changeName } from '../../action/order';
import { get, remove } from '../../config/fetch';

class ListCheckout extends Component {
    componentWillMount()
    {
        this.props.getCartList();
    }

    onPressDelete(id){
        const sendData = JSON.stringify({
            "id" : id
        });
        this.props.removeItem(sendData);
    }

    _changeName = (text) => {
        this.props.onChangeName(text)
    }

    _changeAddress = (text) => {
        this.props.onChangeAddress(text)
    }

  render() {
      console.log(this.props.order)
    return (
        <View>
            {this.props.cart ? 
                <View>
                    <List>
                        {this.props.cart.data.map((data) => {
                            return (
                                <ListItem thumbnail key={data.id}>
                                    <Left>
                                        <Thumbnail square source={{ uri: data.product.image }} />
                                    </Left>
                                    <Body>
                                        <Text>{data.product.name}</Text>
                                        <Text note numberOfLines={1}>{data.total_price_per_product}</Text>
                                        <Text note numberOfLines={1}>Qty : {data.qty}</Text>
                                    </Body>
                                    <Right>
                                        <Button transparent onPress={() => this.onPressDelete(data.id)}>
                                            <Icon size={30} style={{fontSize: 30, color: '#95a5a6'}} name='ios-trash' />
                                        </Button>
                                    </Right>
                                </ListItem>
                            )
                        })}
                    </List>
                    <View style={{flex: 1, flexDirection : 'row', alignItems : 'center', justifyContent : 'space-between', padding : 15}}>
                        <Text style={{fontWeight : 'bold'}}>Total</Text>
                        <Text>{this.props.cart.total_price_cart}</Text>
                    </View>
                    <View style={{flex: 1, flexDirection : 'row', alignItems : 'center', justifyContent : 'space-between', padding : 15, marginTop : 25}}>
                        <Text style={{fontWeight : 'bold'}}>Detail Pemesan</Text>
                    </View>
                    <View style={{flex: 1, flexDirection : 'row', alignItems : 'center', justifyContent : 'space-between', padding : 15, marginTop : 15}}>
                        <Text style={{fontWeight : 'bold'}}>Nama Pemesan</Text>
                        <TextInput
                            editable={true}
                            placeholder="Mohon Di Isi Dulu"
                            style={{width : '60%'}}
                            onChangeText={(value) => this._changeName(value)}
                            value={this.props.order.name} />
                    </View>
                    <View style={{flex: 1, flexDirection : 'row', alignItems : 'center', justifyContent : 'space-between', padding : 15, marginTop : 5}}>
                        <Text style={{fontWeight : 'bold'}}>Alamat</Text>
                        <TextInput
                            editable={true}
                            multiline={true}
                            numberOfLines={3}
                            style={{width : '80%'}}
                            placeholder="Mohon Di Isi Dulu"
                            onChangeText={(value) => this._changeAddress(value)}
                            value={this.props.order.address} />
                    </View>
                </View>
            :
                <View style={{flex : 1, justifyContent : 'center', alignItems: 'center'}}> 
                    <Text> Keranjang Belanja Kosong </Text>
                </View>
            }
            
        </View>
    );
  }
}



const mapStateToProps = state => {
    return {
        cart : state.cart,
        profiledata : state.profiledata,
        order : state.order
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCartList : () => {
            get('cart/list')
            .then((response) => response.json())
            .then((responseData) => {
                if(responseData.status) {
                    dispatch(getCartList(responseData))
                }
            })
            .catch((error) => {
                console.log(error)
            }) 
        },
        removeItem : (data) => {
            remove(data,'cart/remove')
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                if(responseData.status)
                {
                    get('cart/list')
                    .then((response) => response.json())
                    .then((responseData) => {
                        if(responseData.status) {
                            dispatch(getCartList(responseData))
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                    }) 
                } else {
                    console.log('error')
                }
            })
            .catch((error) => {
                console.log(error)
            })
        },
        onChangeName : (text) => dispatch(changeName(text)),
        onChangeAddress : (text) => dispatch(changeAddress(text))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListCheckout)