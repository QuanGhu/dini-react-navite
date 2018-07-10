import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Button, Item, Input, Container, Toast} from 'native-base';
import Entypoicons from 'react-native-vector-icons/Entypo';
import { emailChanged,passwordChanged,nameChanged, doRegister, registerDone} from '../../action/register';
import { postNoAuth } from '../../config/fetch';
import { connect } from 'react-redux';

class Register extends Component {
    _onChangeName = (value) => {
        this.props.onChangeName(value);
    }

    _onChangeEmail = (value) => {
        this.props.onChangeEmail(value);
    }

    _onChangePassword = (value) => {
        this.props.onChangePassword(value);
    }

    onPressThenRegister(){
        const {fullname, email, password} = this.props
        const sendData = JSON.stringify({fullname, email, password})
        this.props.onDoRegisterProcess(sendData, this.props.navigation)
    }

    render() {
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
                            Daftar
                        </Text>
                    </View>
                    <View style={{ flex : 1, padding : 30, marginBottom : 45, alignSelf : 'stretch'}}>
                        <Item rounded style={{backgroundColor : 'rgba(255, 255, 255, 0.25)', padding : 5, paddingLeft : 15, paddingRight : 15, borderColor : 'transparent', marginBottom : 15}}>
                            <Input placeholder='Nama Lengkap' 
                                    style={{color : '#f2f2f2'}} 
                                    placeholderTextColor='#f2f2f2'
                                    value={this.props.fullname}
                                    onChangeText ={this._onChangeName.bind(this)}
                            />
                        </Item>
                        <Item rounded style={{backgroundColor : 'rgba(255, 255, 255, 0.25)', padding : 5, paddingLeft : 15, paddingRight : 15, borderColor : 'transparent', marginBottom : 15}}>
                            <Input placeholder='Email' 
                                    style={{color : '#f2f2f2'}} 
                                    placeholderTextColor='#f2f2f2'
                                    value={this.props.email}
                                    onChangeText={this._onChangeEmail.bind(this)}
                            />
                        </Item>
                        <Item rounded style={{backgroundColor : 'rgba(255, 255, 255, 0.25)', padding : 5, paddingLeft : 15, paddingRight : 15, borderColor : 'transparent', marginBottom : 15}}>
                            <Entypoicons name='key' color='#fff' size={18}/>
                            <Input placeholder='Password' 
                                    style={{color : '#f2f2f2'}} 
                                    secureTextEntry={true} 
                                    placeholderTextColor='#f2f2f2'
                                    value={this.props.password}
                                    onChangeText={this._onChangePassword.bind(this)}
                            />
                        </Item>
                        <Button full rounded style={{backgroundColor: '#3B5998', height : 50}} onPress = { () => this.onPressThenRegister() }>
                            <Text style={{color : '#fff', fontSize : 16, fontWeight : 'bold'}}>Daftar</Text>
                        </Button>
                        <View style={{flex : 1, flexDirection : 'row', justifyContent : 'space-between'}}>
                            <Button transparent onPress = { () => this.props.navigation.navigate('Profilepage') }>
                                <Text style={{ color : '#f2f2f2'}}>Masuk</Text>
                            </Button>
                            <Button transparent onPress = { () => this.props.navigation.navigate('Resetpage') }>
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
        fullname : state.auth.fullname,
        email : state.auth.email,
        password : state.auth.password,
        loading : state.auth.loading
    }
}

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
        onChangeEmail: (email) => dispatch(emailChanged(email)),
        onChangePassword : (password) => dispatch (passwordChanged(password)),
        onChangeName : (name) => dispatch (nameChanged(name)),
        onDoRegisterProcess : (data, url) => {
            dispatch(doRegister())
            return postNoAuth(data, 'register')
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData)
                if(responseData.status == 'success') {
                    // this._signInAsync('Bearer '+responseData.data.token)
                    url.navigate('Profilepage')
                } else {
                    this.showNotification(responseData.message,"OK","top","danger")
                }
            })
            .then(() => dispatch(registerDone()))
            // .then(() => url.navigate('App'))
            .catch(() => {
                this.showNotification('Failed To CallBack',"OK","top","danger")
            }) 
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)