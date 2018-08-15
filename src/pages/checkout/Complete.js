import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Content, Container } from 'native-base';

class Complete extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <View style={{flex : 1, alignItems : 'center' , justifyContent : 'center', flexDirection : 'column'}}>
                        <Text> Terima Kasih Telah Melakukan Pemesanan, Silakan Melakukan Konfirmasi Pembayaran </Text>
                        <Button block style={{marginTop : 15, marginBottom: 15}} onPress={ () => this.props.navigation.navigate('Homepage') } >
                            <Text style={{fontWeight : 'bold', color : '#fff'}}>Kembali</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
            
        )
    }
}

export default Complete;