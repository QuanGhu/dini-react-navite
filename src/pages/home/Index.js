import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import CategoryList from '../category/Index';
import Headermenu from '../component/HeaderComponent';

class Index extends Component {
  render() {
    return (
      <Container>
        <Headermenu title="Dini Shop" navcart={ () => this.props.navigation.navigate('Cartpage') }/>
        <Content style={{ padding : 20}}>
          <CategoryList nav={this.props.navigation}/>
        </Content>
      </Container>
    );
  }
}

export default Index