import React, { Component } from 'react';
import { View, Text, AsyncStorage, ActivityIndicator} from 'react-native';
import { Button, Item, Input, Container, Toast} from 'native-base';
import Entypoicons from 'react-native-vector-icons/Entypo';
import { emailChanged, passwordChanged , doLogin, loginDone, saveToken } from '../../action/login';
import { userLogin } from '../../action/profile';
import { connect } from 'react-redux';
import { postNoAuth } from '../../config/fetch';

class Login extends Component {
    _onChangeEmail = (value) => {
        this.props.onChangeEmail(value);
    }
    
    _onChangePassword = (value) => {
        this.props.onChangePassword(value);
    }

    onPressThenLogin(){
        const {email, password} = this.props
        const sendData = JSON.stringify({email, password})
        this.props.onDoLoginProcess(sendData, this.props.nav)
    }

    render() {
        console.log(this.props.token)
        return (
            <View style={{flex : 1, alignItems : 'center', justifyContent : 'space-between', alignContent : 'center', backgroundColor : 'blue', alignSelf : 'stretch'}}>
                { this.props.loading ? 
                    <View style={{flex : 1, justifyContent : 'center', alignItems: 'center'}}> 
                        <ActivityIndicator size="large" color="#f75400" />
                    </View>
                :
                <View style={{flex : 1, alignItems : 'center', justifyContent : 'space-between', alignContent : 'center', backgroundColor : 'blue', alignSelf : 'stretch'}}>
                    <View style={{ flex : 1}}>
                        <Text style={{ backgroundColor: 'transparent', textAlign: 'center', fontSize: 30, padding: 40, color : '#fff'}}>
                            Fashion Kid
                        </Text>
                    </View>
                    <View style={{ flex : 1, padding : 30, marginBottom : 45, alignSelf : 'stretch'}}>
                        <Item rounded style={{backgroundColor : 'rgba(255, 255, 255, 0.25)', padding : 5, paddingLeft : 15, paddingRight : 15, borderColor : 'transparent', marginBottom : 15}}>
                            <Entypoicons name='user' color='#fff' size={18}/>
                            <Input placeholder='email' 
                                    style={{color : '#f2f2f2'}} 
                                    placeholderTextColor='#f2f2f2'
                                    value = {this.props.email}
                                    onChangeText ={this._onChangeEmail.bind(this)}
                            />
                        </Item>
                        <Item rounded style={{backgroundColor : 'rgba(255, 255, 255, 0.25)', padding : 5, paddingLeft : 15, paddingRight : 15, borderColor : 'transparent', marginBottom : 15}}>
                            <Entypoicons name='key' color='#fff' size={18}/>
                            <Input placeholder='Password' 
                                    style={{color : '#f2f2f2'}} 
                                    secureTextEntry={true} 
                                    placeholderTextColor='#f2f2f2'
                                    value = {this.props.password}
                                    onChangeText ={this._onChangePassword.bind(this)}
                            />
                        </Item>
                        <Button full rounded style={{backgroundColor: '#3B5998', height : 50}} onPress={ () => this.onPressThenLogin()}>
                            <Text style={{color : '#fff', fontSize : 16, fontWeight : 'bold'}}>Masuk</Text>
                        </Button>
                        <View style={{flex : 1, flexDirection : 'row', justifyContent : 'space-between'}}>
                            <Button transparent onPress = { () => this.props.nav.navigate('Registerpage')}>
                                <Text style={{ color : '#f2f2f2'}}>Daftar</Text>
                            </Button>
                            <Button transparent onPress = { () => this.props.nav.navigate('Resetpage')}>
                                <Text style={{ color : '#f2f2f2'}}>Lupa Password</Text>
                            </Button>
                        </View>
                    </View> 
                </View>
                }
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        email : state.auth.email,
        password : state.auth.password,
        loading : state.auth.loading,
        token : state.auth.token
    }
}

_signInAsync = async (token) => {
    await AsyncStorage.setItem('token', token);
};

showNotification = (text, buttonText, position, type) => {
    Toast.show({
        text: text,
        buttonText: buttonText,
        position: position,
        type : type
    })
}


const mapDispatchToProps = (dispatch) => {
    return {
        onChangeEmail: (email) => dispatch (emailChanged(email)),
        onChangePassword : (password) => dispatch (passwordChanged(password)),
        onDoLoginProcess : (data, url) => {
            dispatch(doLogin())
            return postNoAuth(data, 'login')
            .then((response) => response.json())
            .then((responseData) => {
                if(responseData.success) {
                    this._signInAsync(responseData.token)
                    dispatch (userLogin())
                } else {
                    this.showNotification(responseData.message,"OK","top","danger")
                }
            })
            .then(() => dispatch(loginDone()))
            .then(() => url.navigate('Homepage'))
            // .then(() => url.navigate('App'))
            .catch((error) => {
                console.log(error)
                this.showNotification('Failed To CallBack',"OK","top","danger")
            }) 
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)