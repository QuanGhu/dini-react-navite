import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
import CategoryList from '../category/Index';

class Index extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='ios-menu' />
            </Button>
          </Left>
          <Body>
            <Title>Dini Shop</Title>
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
          <CategoryList nav={this.props.navigation}/>
        </Content>
      </Container>
    );
  }
}

export default Index