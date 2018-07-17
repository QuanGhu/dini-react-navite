import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import { getCartList } from '../../action/cart';
import { get, remove } from '../../config/fetch';

class ListCart extends Component {
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

  render() {
      console.log(this.props.cart)
    return (
        <View>
            {this.props.cart ? 
                <List>
                    {this.props.cart.data.map((data) => {
                        return (
                            <ListItem thumbnail key={data.id}>
                                <Left>
                                    <Thumbnail square source={{ uri: data.product.image }} />
                                </Left>
                                <Body>
                                    <Text>{data.product.name}</Text>
                                    <Text note numberOfLines={1}>{data.total_price}</Text>
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
        cart : state.cart
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
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListCart)