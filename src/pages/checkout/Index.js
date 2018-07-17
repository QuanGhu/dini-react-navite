import React, { Component } from 'react';
import Listcheckout from './ListCheckout';
import { Container, Content, Button, Text } from 'native-base';
import Headermenu from '../component/HeaderComponent';
import { connect } from 'react-redux';

class Index extends Component {
    render() {
        return (
            <Container>
                <Headermenu title="Keranjang Belanja" icon="arrow-back" nav={ () => this.props.navigation.goBack()} navcart={ () => this.props.navigation.navigate('Cartpage') }/>
                <Content>
                    <Listcheckout />
                    {this.props.profiledata.profile.address ?
                    <Button block style={{marginTop : 15, marginBottom: 15}} >
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

export default connect(mapStateToProps)(Index)