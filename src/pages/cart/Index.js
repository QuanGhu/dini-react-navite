import React, { Component } from 'react';
import Listcart from './ListCart';
import { Container, Content, Button, Text } from 'native-base';
import Headermenu from '../component/HeaderComponent';

class Index extends Component {
    render() {
        return (
            <Container>
                <Headermenu title="Keranjang Belanja" icon="arrow-back" nav={ () => this.props.navigation.goBack()} navcart={ () => this.props.navigation.navigate('Cartpage') }/>
                <Content>
                    <Listcart />
                    <Button block style={{marginTop : 15, marginBottom: 15}}>
                        <Text style={{fontWeight : 'bold', color : '#fff'}}>Lanjutkan Pembayaran</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default Index