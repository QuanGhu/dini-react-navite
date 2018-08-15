import React, { Component } from 'react';
import Listcheckout from './ListCheckout';
import { Container, Content, Button, Text } from 'native-base';
import Headermenu from '../component/HeaderComponent';
import { connect } from 'react-redux';
import { post } from '../../config/fetch';

class Index extends Component {
    _onPressCheckout()
    {
        const { name , address, payment_method, ongkir } = this.props.order;
        const sendData = JSON.stringify({name, address, payment_method, ongkir})
        this.props.onOrderProcess(sendData, this.props.navigation);
    }
    render() {
        return (
            <Container>
                <Headermenu title="Keranjang Belanja" icon="arrow-back" nav={ () => this.props.navigation.goBack()} navcart={ () => this.props.navigation.navigate('Cartpage') }/>
                <Content>
                    <Listcheckout />
                    {this.props.order.name && this.props.order.address ?
                    <Button block style={{marginTop : 15, marginBottom: 15}} onPress={ () => this._onPressCheckout() } >
                        <Text style={{fontWeight : 'bold', color : '#fff'}}>Bayar</Text>
                    </Button>
                    :
                    <Button block style={{marginTop : 15, marginBottom: 15}} disabled>
                        <Text style={{fontWeight : 'bold', color : '#fff'}}>Bayar</Text>
                    </Button>
                    }
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        profiledata : state.profiledata,
        order : state.order
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOrderProcess : (data,url) => {
            console.log(data);
            post(data,'order/create')
            .then((response) => response.json())
            .then((reponseData) => {
                console.log(reponseData)
                if(reponseData.status) 
                {
                    url.navigate('Completepage');
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)