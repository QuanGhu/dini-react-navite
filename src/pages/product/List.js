import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, Image} from 'react-native';
import { Card, CardItem , Body } from 'native-base';

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
    render() {
        return (
            <View>
                <FlatList
                    data={ productData }
                    renderItem={({item}) =>
                        <Card>
                            <CardItem header style={{ alignContent : 'center', justifyContent : 'center' , alignItems : 'center'}}>
                                <Text style={{fontWeight : 'bold', fontSize : 16 }}>{item.name}</Text>
                            </CardItem>
                            <CardItem button onPress={ () => this.props.nav.navigate('Productdetailpage') }>
                                <Body style={{ alignContent : 'center', justifyContent : 'center' , alignItems : 'center'}}>
                                    <Image
                                        style={{width: 125, height: 125}}
                                        source={{uri: item.image}}
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
            </View>
        )
    }
}

export default List