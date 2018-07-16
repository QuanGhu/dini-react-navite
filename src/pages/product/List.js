import React, { Component } from 'react';
import { FlatList, Text, View, Image, ActivityIndicator} from 'react-native';
import { Card, CardItem , Body } from 'native-base';
import { getList } from '../../action/product';
import { connect } from 'react-redux';
import { getNoAuth } from '../../config/fetch';

class List extends Component {
    componentWillMount() 
    {
        this.props.getProductsData(this.props.nav.getParam('id'));
    }
    render() {
        console.log(this.props.product)
        return (
            <View>
                { this.props.product ?
                <FlatList
                    data={ this.props.product }
                    renderItem={({item}) =>
                        <Card>
                            <CardItem header style={{ alignContent : 'center', justifyContent : 'center' , alignItems : 'center'}}>
                                <Text style={{fontWeight : 'bold', fontSize : 16 }}>{item.name}</Text>
                            </CardItem>
                            <CardItem button onPress={ () => this.props.nav.navigate('Productdetailpage', { id : item.id }) }>
                                <Body style={{ alignContent : 'center', justifyContent : 'center' , alignItems : 'center'}}>
                                    <Image
                                        style={{width: 125, height: 125}}
                                        source={{uri: item.image }}
                                    />
                                </Body>
                            </CardItem>
                            <CardItem footer style={{ alignContent : 'center', justifyContent : 'center' , alignItems : 'center'}}>
                                <Text>{item.price}</Text>
                            </CardItem>
                        </Card>  
                    }
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    />
                    : 
                        <View style={{flex : 1, justifyContent : 'center', alignItems: 'center'}}> 
                            <ActivityIndicator size="large" color="#f75400" />
                        </View> 
                    }
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        product : state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProductsData: (id) => {
            getNoAuth('product/list/'+id)
            .then((response) => response.json())
            .then(async (responseData) => {
                console.log(responseData)
                if(responseData.status)
                {
                    dispatch(getList(responseData.data))
                } else {
                    console.log('something error')      
                }
            })
            .catch((error) => {
                console.log(error)
            })
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(List)