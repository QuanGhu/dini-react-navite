import React, { Component } from 'react';
import { Header, Left, Button, Icon, Body, Title , Right, Badge, Text } from 'native-base';
import { connect } from 'react-redux';

class HeaderComponent extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={this.props.nav}>
                        <Icon name={this.props.icon} />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='search' />
                    </Button>
                    <Button transparent badge onPress={this.props.profiledata.login ? this.props.navcart : null }>
                        <Icon name='ios-cart' />
                    </Button>
                </Right>
            </Header>
        )
    }
}

const mapStateToProps = state => {
    return {
        profiledata : state.profiledata,
    }
}


export default connect(mapStateToProps)(HeaderComponent)