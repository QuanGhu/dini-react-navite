import React, { Component } from 'react';
import { Header, Left, Button, Icon, Body, Title , Right } from 'native-base';

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
                    <Button transparent onPress={this.props.navcart}>
                        <Icon name='ios-cart' />
                    </Button>
                </Right>
            </Header>
        )
    }
}

export default HeaderComponent