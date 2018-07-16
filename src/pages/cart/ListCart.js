import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import { getCartList } from '../../action/cart';
import { get } from '../../config/fetch';

class ListCart extends Component {
    componentWillMount()
    {
        this.props.getCartList();
    }

  render() {
      console.log(this.props.cart)
    return (
        <View>
            {this.props.cart ? 
                <List>
                    {this.props.cart.map((data) => {
                        return (
                            <ListItem thumbnail key={data.id}>
                                <Left>
                                    <Thumbnail square source={{ uri: data.product.image }} />
                                </Left>
                                <Body>
                                    <Text>{data.product.name}</Text>
                                    <Text note numberOfLines={1}>{data.product.price}</Text>
                                    <Text note numberOfLines={1}>Qty : {data.qty}</Text>
                                </Body>
                                <Right>
                                    <Button transparent>
                                        <Icon size={30} style={{fontSize: 30, color: '#95a5a6'}} name='ios-trash' />
                                    </Button>
                                </Right>
                            </ListItem>
                        )
                    })}
                </List>
            :
                <View style={{flex : 1, justifyContent : 'center', alignItems: 'center'}}> 
                    <ActivityIndicator size="large" color="#f75400" />
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
                console.log(responseData)
                if(responseData.status) {
                    dispatch(getCartList(responseData.data))
                }
            })
            .catch((error) => {
                console.log(error)
            }) 
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListCart)