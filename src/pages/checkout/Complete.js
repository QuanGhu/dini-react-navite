import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Content, Container } from 'native-base';

class Complete extends Component {
    render() {
        return (
            <View style={{flex : 1, alignItems : 'center' , justifyContent : 'center', flexDirection : 'column'}}>
                <Text> Terima Kasih Telah Melakukan Pembayaran, Silakan Tunggu Barang Anda </Text>
                <Button block style={{marginTop : 15, marginBottom: 15}} onPress={ () => this.props.navigation.navigate('Homepage') } >
                    <Text style={{fontWeight : 'bold', color : '#fff'}}>Kembali</Text>
                </Button>
            </View>
            
        )
    }
}

export default Complete;