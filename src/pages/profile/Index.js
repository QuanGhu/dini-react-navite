import React, { Component } from 'react';
import { AsyncStorage, Text, View} from 'react-native';
import Login from './Login';
import { Container, Root, Thumbnail, Content, List, ListItem, Left, Right, Icon } from 'native-base';
import { connect } from 'react-redux';
import Headermenu from '../component/HeaderComponent';
import { getProfileData } from '../../action/profile';
import { get } from '../../config/fetch';

class Index extends Component {
    constructor() {
        super();
        this.state = {
            token : false
        }
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Homepage');
      };
  
    // Fetch the token from storage then navigate to our appropriate place
    componentWillMount = () => {
        this.setState({
            token : true
        })
        if(this.props.profiledata.login)
        {
            this.props.onGetMyData();
        }
    };

    render() {
        return (
            <Container>
                {this.props.profiledata.login 
                    ?
                        this.props.profiledata.profile ? 
                        <Root>
                            <Headermenu title="Profil Ku" icon="arrow-back" nav={ () => this.props.navigation.goBack()} navcart={ () => this.props.navigation.navigate('Cartpage') }/>
                            <Content>
                                <View style={{alignContent : 'center', justifyContent : 'center', alignItems : 'center', marginTop : 25, marginButtom : 45}}>
                                    <Thumbnail large source={{uri: 'https://randomuser.me/api/portraits/lego/4.jpg'}} />
                                    <Text style={{fontWeight : 'bold', marginTop : 15, marginBottom : 30}}>{this.props.profiledata.profile.fullname}</Text>
                                </View>
                                <List>
                                    <ListItem button onPress={ () => this.props.navigation.navigate('Orderpage') }>
                                        <Left>
                                            <Text>Riwayat Pemesanan</Text>
                                        </Left>
                                        <Right>
                                            <Icon name="arrow-forward" />
                                        </Right>
                                    </ListItem>
                                    <ListItem button onPress={ () => this.props.navigation.navigate('Changepasswordpage') }>
                                        <Left>
                                            <Text>Ganti Password</Text>
                                        </Left>
                                        <Right>
                                            <Icon name="arrow-forward" />
                                        </Right>
                                    </ListItem>
                                    <ListItem button onPress={this._signOutAsync}>
                                        <Left>
                                            <Text>Keluar</Text>
                                        </Left>
                                        <Right>
                                            <Icon name="arrow-forward" />
                                        </Right>
                                    </ListItem>
                                </List>
                            </Content>
                        </Root>
                        :
                        <View />
                    :
                    <Login nav={this.props.navigation} />
                }
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        profiledata : state.profiledata,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onGetMyData: () => {
            get('profile')
            .then((response) => response.json())
            .then((responseData) => {
               dispatch(getProfileData(responseData.data))
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)