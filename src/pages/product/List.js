import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, Image, ActivityIndicator} from 'react-native';
import { Card, CardItem , Body } from 'native-base';
import { getList } from '../../action/product';
import { connect } from 'react-redux';
import { getNoAuth } from '../../config/fetch';

const productData = [
    {
        'id' : '1',
        'name' : 'Dummy Product',
        'price' : 'Rp 75.000',
        'image' : 'https://lepetitsociety.com/pub/media/catalog/product/cache/image/1200x1200/e9c3970ab036de70892d86c6d221abfe/j/a/janod-abc-buggy-walking-trolley-01_large.jpg'
    },
    {
        'id' : '2',
        'name' : 'Dummy Product',
        'price' : 'Rp 75.000',
        'image' : 'https://lepetitsociety.com/pub/media/catalog/product/cache/image/1200x1200/e9c3970ab036de70892d86c6d221abfe/j/a/janod-abc-buggy-walking-trolley-01_large.jpg'
    },
    {
        'id' : '3',
        'name' : 'Dummy Product',
        'price' : 'Rp 75.000',
        'image' : 'https://lepetitsociety.com/pub/media/catalog/product/cache/image/1200x1200/e9c3970ab036de70892d86c6d221abfe/j/a/janod-abc-buggy-walking-trolley-01_large.jpg'
    },
    {
        'id' : '4',
        'name' : 'Dummy Product',
        'price' : 'Rp 75.000',
        'image' : 'https://lepetitsociety.com/pub/media/catalog/product/cache/image/1200x1200/e9c3970ab036de70892d86c6d221abfe/j/a/janod-abc-buggy-walking-trolley-01_large.jpg'
    },
    {
        'id' : '5',
        'name' : 'Dummy Product',
        'price' : 'Rp 75.000',
        'image' : 'https://lepetitsociety.com/pub/media/catalog/product/cache/image/1200x1200/e9c3970ab036de70892d86c6d221abfe/j/a/janod-abc-buggy-walking-trolley-01_large.jpg'
    },
    {
        'id' : '6',
        'name' : 'Dummy Product',
        'price' : 'Rp 75.000',
        'image' : 'https://lepetitsociety.com/pub/media/catalog/product/cache/image/1200x1200/e9c3970ab036de70892d86c6d221abfe/j/a/janod-abc-buggy-walking-trolley-01_large.jpg'
    },
    {
        'id' : '7',
        'name' : 'Dummy Product',
        'price' : 'Rp 75.000',
        'image' : 'https://lepetitsociety.com/pub/media/catalog/product/cache/image/1200x1200/e9c3970ab036de70892d86c6d221abfe/j/a/janod-abc-buggy-walking-trolley-01_large.jpg'
    },
    {
        'id' : '8',
        'name' : 'Dummy Product',
        'price' : 'Rp 75.000',
        'image' : 'https://lepetitsociety.com/pub/media/catalog/product/cache/image/1200x1200/e9c3970ab036de70892d86c6d221abfe/j/a/janod-abc-buggy-walking-trolley-01_large.jpg'
    }
]

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
                                        source={{uri: 'https://lepetitsociety.com/pub/media/catalog/product/cache/image/1200x1200/e9c3970ab036de70892d86c6d221abfe/j/a/janod-abc-buggy-walking-trolley-01_large.jpg'}}
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