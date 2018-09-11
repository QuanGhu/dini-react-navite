import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { List, ListItem, ActionSheet, Thumbnail, Text, Left, Body, Right, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import { getHistory } from '../../action/order';
import { get, remove, putImg } from '../../config/fetch';
import ImagePicker from 'react-native-image-crop-picker';

var BUTTONS = ["Camera", "From Gallery", "Cancel"];
var DESTRUCTIVE_INDEX = 1;
var CANCEL_INDEX = 2;

class ListOrderHistory extends Component {
    componentWillMount()
    {
        this.props.getHistoryList();
    }

    onOpenLibrary = (id) =>
    {
        ImagePicker.openPicker({
            multiple: false,
            includeBase64: true
        }).then(image => {
            this.props.uploadSinglePhoto(image, id)            
        })
    }

    onOpenCamera = (id) =>
    {
        ImagePicker.openCamera({
            cropping : true
        }).then(image => {
            this.props.uploadSinglePhoto(image, id)
        });
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
                                    {value.payment_method === 'transfer' ? 
                                    <Button full rounded style={{backgroundColor: '#3B5998', height : 50, marginTop : 15}} onPress={() =>
                                        ActionSheet.show(
                                        {
                                            options: BUTTONS,
                                            cancelButtonIndex: CANCEL_INDEX,
                                            destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                            title: "Edit Photo"
                                        },
                                        buttonIndex => {
                                            if(buttonIndex == 0)
                                            {
                                                this.onOpenCamera(value.id)
                                            }else if(buttonIndex == 1) {
                                                this.onOpenLibrary(value.id)
                                            }
                                        })}>
                                        <Text style={{color : '#fff', fontSize : 16, fontWeight : 'bold'}}>Upload Bukti Transfter</Text>
                                    </Button>
                                    : null }
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
        },
        uploadSinglePhoto : (image, id) => {
            const data = new FormData();
            data.append('attachment', {
                uri: image.path,
                type: image.mime,
                name: 'attachment.png'
            });
            data.append('id',id)
            putImg(data, 'order/upload')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                alert(responseJson.Message)
            })
            .catch((error) => {
                console.log(error)
            })
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListOrderHistory)