import React, { Component } from 'react';
import { Image, Dimensions, Text, View } from 'react-native';
import { Container, Button, Content} from 'native-base';
import Headermenu from '../component/HeaderComponent';

class Detail extends Component {
    render() {
        return (
            <Container>
                <Headermenu title="Dummy Produk" icon="arrow-back" nav={ () => this.props.navigation.goBack()} navcart={ () => this.props.navigation.navigate('Cartpage') }/>
                <Content>
                    <Image
                        source={{uri: 'https://lepetitsociety.com/pub/media/catalog/product/cache/image/1200x1200/e9c3970ab036de70892d86c6d221abfe/j/a/janod-abc-buggy-walking-trolley-01_large.jpg'}}
                        style={{width: Dimensions.get('window').width, height: 350}}
                        resizeMode="cover"
                    />
                    <View style={{padding : 10, flex : 1, flexDirection : 'column' }}>
                        <Text style={{fontWeight : 'bold', fontSize : 28, color : '#000'}}>Dummy Product</Text>
                        <Text style={{fontSize : 18, color : '#000'}}>Rp 75.000</Text>
                        <Text style={{ color : '#000'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis magna venenatis, viverra velit sit amet, ornare massa. Vestibulum vestibulum, dolor nec mattis bibendum, metus erat blandit arcu, eu efficitur sem massa eget turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Quisque finibus odio sed nulla ultricies, ornare efficitur augue dignissim. Proin dui nunc, maximus non ex convallis, venenatis consequat eros. Pellentesque faucibus faucibus nisl, non ultrices enim volutpat et. Sed in turpis ornare, porta augue nec, tincidunt turpis. Sed sit amet augue placerat, tempus augue a, lobortis arcu. Sed vel risus rhoncus, accumsan orci non, vehicula purus. Quisque sapien dui, pretium eu cursus eu, malesuada ac nulla. Curabitur sed condimentum massa. Vivamus a ullamcorper orci. Fusce varius nulla ut risus dapibus vehicula. Sed ullamcorper, ipsum nec dapibus blandit, neque dui viverra tellus, at efficitur nibh odio in ex.
                        </Text>
                        <Button block style={{marginTop : 15, marginBottom: 15}}>
                            <Text style={{fontWeight : 'bold', color : '#fff'}}>Tambah Ke Keranjang</Text>
                        </Button>
                    </View> 
                </Content>
            </Container>
        )
    }
}

export default Detail