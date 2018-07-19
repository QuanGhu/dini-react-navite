import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import { getHistory } from '../../action/order';
import { get, remove } from '../../config/fetch';

class ListOrderHistory extends Component {
    componentWillMount()
    {
        this.props.getHistoryList();
    }

  render() {
      console.log(this.props.order.data)
    return (
        <View>
            {this.props.order.data ? 
                <List>
                    {this.props.order.data.map((value) => {
                        return (
                            <ListItem thumbnail key={value.id}>
                                <Body>
                                    <Text>Nomor Pemesanan : {value.order_number}</Text>
                                    <Text>Alamat Pemesanan : {value.address}</Text>
                                    <Text>Status Pemesanan : {value.status}</Text>
                                </Body>
                            </ListItem>
                        )
                    })}
                </List>
            :
                <View style={{flex : 1, justifyContent : 'center', alignItems: 'center'}}> 
                    <Text> Anda Belum Memesan Apapun </Text>
                </View>
            }
        </View>
    );
  }
}



const mapStateToProps = state => {
    return {
        order : state.order
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getHistoryList : () => {
            get('order/history')
            .then((response) => response.json())
            .then((responseData) => {
                if(responseData.status) {
                    dispatch(getHistory(responseData.data))
                }
            })
            .catch((error) => {
                console.log(error)
            }) 
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListOrderHistory)