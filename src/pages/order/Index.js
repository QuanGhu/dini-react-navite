import React, { Component } from 'react';
import ListOrderHistory from './ListOrderHistory';
import { Container, Content, Button, Text } from 'native-base';
import Headermenu from '../component/HeaderComponent';

class Index extends Component {
    render() {
        return (
            <Container>
                <Headermenu title="Riwayat Pemesanan" icon="arrow-back" nav={ () => this.props.navigation.goBack()} navcart={ () => this.props.navigation.navigate('Cartpage') }/>
                <Content>
                    <ListOrderHistory />
                </Content>
            </Container>
        )
    }
}

export default Index