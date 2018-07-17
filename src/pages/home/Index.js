import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Content } from 'native-base';
import CategoryList from '../category/Index';
import Headermenu from '../component/HeaderComponent';
import { connect } from 'react-redux';
import { userLogin, getProfileData } from '../../action/profile';
import { get } from '../../config/fetch';

class Index extends Component {
  componentWillMount()
  {
    this.props.checkLogined();
  }
  render() {
    return (
      <Container>
        <Headermenu title="Dini Shop" nav={ () => this.props.navigation.navigate('Profilepage') } navcart={ () => this.props.navigation.navigate('Cartpage') } icon="ios-contact"/>
        <Content style={{ padding : 20}}>
          <CategoryList nav={this.props.navigation}/>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
      profiledata : state.profiledata,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkLogined : async () => {
      console.log('abasd');
      var userToken = await AsyncStorage.getItem('token');
      if(userToken) {
        await dispatch(userLogin())
        return get('profile')
        .then((response) => response.json())
        .then((responseData) => {
           dispatch(getProfileData(responseData.data))
        })
        .catch((error) => console.log(error))
      } else {
        console.log('user not login yet')
      }
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index)