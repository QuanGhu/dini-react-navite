import React, { Component } from 'react';
import Listcheckout from './ListCheckout';
import { Container, Content, Button, Text } from 'native-base';
import Headermenu from '../component/HeaderComponent';
import { connect } from 'react-redux';
import { get } from '../../config/fetch';

class Index extends Component {
    _onPressCheckout()
    {
        this.props.onOrderProcess(this.props.navigation);
    }
    render() {
        return (
            <Container>
                <Headermenu title="Keranjang Belanja" icon="arrow-back" nav={ () => this.props.navigation.goBack()} navcart={ () => this.props.navigation.navigate('Cartpage') }/>
                <Content>
                    <Listcheckout />
                    {this.props.profiledata.profile.address ?
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
        profiledata : state.profiledata
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOrderProcess : (url) => {
            get('order/create')
            .then((response) => response.json())
            .then((reponseData) => {
                if(reponseData.status) 
                {
                    url.navigate('Completepage');
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)