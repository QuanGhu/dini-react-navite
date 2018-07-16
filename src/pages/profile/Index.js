import React, { Component } from 'react';
import { AsyncStorage, Text, View} from 'react-native';
import Login from './Login';
import { Container, Root, Thumbnail, Content, List, ListItem, Left, Right, Icon } from 'native-base';
import { connect } from 'react-redux';
import Headermenu from '../component/HeaderComponent';

class Index extends Component {
    constructor() {
        super();
        this.state = {
            token : false
        }
    }
  
    // Fetch the token from storage then navigate to our appropriate place
    componentWillMount = () => {
        this.setState({
            token : true
        })
    };

    render() {
        console.log(this.props.profiledata.login);
        return (
            <Container>
                {this.props.profiledata.login
                    ?
                        <Root>
                            <Headermenu title="Profil Ku" icon="arrow-back" nav={ () => this.props.navigation.goBack()} navcart={ () => this.props.navigation.navigate('Cartpage') }/>
                            <Content>
                                <View style={{alignContent : 'center', justifyContent : 'center', alignItems : 'center', marginTop : 25, marginButtom : 45}}>
                                    <Thumbnail large source={{uri: 'https://randomuser.me/api/portraits/lego/4.jpg'}} />
                                    <Text style={{fontWeight : 'bold', marginTop : 15, marginBottom : 30}}>Circular Thumbnail</Text>
                                </View>
                                <List>
                                    <ListItem>
                                        <Left>
                                            <Text>Riwayat Pemesanan</Text>
                                        </Left>
                                        <Right>
                                            <Icon name="arrow-forward" />
                                        </Right>
                                    </ListItem>
                                    <ListItem>
                                        <Left>
                                            <Text>Ganti Password</Text>
                                        </Left>
                                        <Right>
                                            <Icon name="arrow-forward" />
                                        </Right>
                                    </ListItem>
                                    <ListItem>
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

export default connect(mapStateToProps)(Index)