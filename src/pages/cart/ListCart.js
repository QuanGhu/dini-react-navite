import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon } from 'native-base';

class ListCart extends Component {
  render() {
    return (
        <View>
            <List>
                <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={{ uri: 'https://lepetitsociety.com/pub/media/catalog/product/cache/image/1200x1200/e9c3970ab036de70892d86c6d221abfe/j/a/janod-abc-buggy-walking-trolley-01_large.jpg' }} />
                </Left>
                <Body>
                    <Text>Dummy Produk</Text>
                    <Text note numberOfLines={1}>Rp 75.000</Text>
                    <Text note numberOfLines={1}>Qty : 1</Text>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon size={30} style={{fontSize: 30, color: '#95a5a6'}} name='ios-trash' />
                    </Button>
                </Right>
                </ListItem>
            </List>
        </View>
    );
  }
}

export default ListCart