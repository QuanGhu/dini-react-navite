import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
import ListingProduct from './List';

class Index extends Component {
    render() {
        return (
            <Container>
                <Header>
                <Left>
                    <Button transparent onPress={ () => this.props.navigation.goBack() }>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Product Page</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='search' />
                    </Button>
                    <Button transparent>
                        <Icon name='ios-cart' />
                    </Button>
                </Right>
                </Header>
                <Content style={{ padding : 20}}>
                    <ListingProduct nav={this.props.navigation}/>
                </Content>
            </Container>
        )
    }
}

export default Index