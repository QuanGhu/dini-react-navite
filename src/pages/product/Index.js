import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import ListingProduct from './List';
import Headermenu from '../component/HeaderComponent';

class Index extends Component {
    render() {
        return (
            <Container>
                <Headermenu title="Produk Page" icon="arrow-back" nav={ () => this.props.navigation.goBack()} navcart={ () => this.props.navigation.navigate('Cartpage') }/>
                <Content style={{ padding : 20}}>
                    <ListingProduct nav={this.props.navigation}/>
                </Content>
            </Container>
        )
    }
}

export default Index