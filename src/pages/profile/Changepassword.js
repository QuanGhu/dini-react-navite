import React, { Component } from 'react';
import { Text, View} from 'react-native';
import { Container, Button,Content, Item, Input,Toast } from 'native-base';
import { connect } from 'react-redux';
import Entypoicons from 'react-native-vector-icons/Entypo';
import Headermenu from '../component/HeaderComponent';
import { onChangeConfirmPassword,onChangeNewPassword,onChangeOldPassword } from '../../action/changepassword';
import { put } from '../../config/fetch';

class Changepassword extends Component {

    getValueOldPassword = (value) => {
        this.props.changeOldPassword(value);
    }

    getValueNewPassword = (value) => {
        this.props.changeNewPassword(value)
    }

    getValueConfirmPassword = (value) => {
        this.props.changeConfirmPassword(value)
    }

    onSendDataChangePassword = () => {
        const { old_password, new_password, confirm_password} = this.props.changepassword
        const sendData = JSON.stringify({old_password, new_password, confirm_password})
        this.props.changeMyPassword(sendData, this.props.navigation);
    }

    render() {
        return (
            <Container>
                <Headermenu title="Ganti Password" icon="arrow-back" nav={ () => this.props.navigation.goBack()} navcart={ () => this.props.navigation.navigate('Cartpage') }/>
                <Content>
                <View style={{ flex : 1, padding : 30, marginBottom : 45, alignSelf : 'stretch'}}>
                        <Item rounded style={{backgroundColor : 'rgba(255, 255, 255, 0.25)', padding : 5, paddingLeft : 15, paddingRight : 15, borderColor : 'transparent', marginBottom : 15}}>
                            <Entypoicons name='key' color='#000' size={18}/>
                            <Input placeholder='Password Lama' 
                                    style={{color : '#000'}} 
                                    secureTextEntry={true} 
                                    placeholderTextColor='#000'
                                    value = {this.props.changepassword.old_password}
                                    onChangeText ={this.getValueOldPassword.bind(this)}
                            />
                        </Item>
                        <Item rounded style={{backgroundColor : 'rgba(255, 255, 255, 0.25)', padding : 5, paddingLeft : 15, paddingRight : 15, borderColor : 'transparent', marginBottom : 15}}>
                            <Entypoicons name='key' color='#000' size={18}/>
                            <Input placeholder='Password Baru' 
                                    style={{color : '#000'}} 
                                    secureTextEntry={true} 
                                    placeholderTextColor='#000'
                                    value = {this.props.changepassword.new_password}
                                    onChangeText ={this.getValueNewPassword.bind(this)}
                            />
                        </Item>
                        <Item rounded style={{backgroundColor : 'rgba(255, 255, 255, 0.25)', padding : 5, paddingLeft : 15, paddingRight : 15, borderColor : 'transparent', marginBottom : 15}}>
                            <Entypoicons name='key' color='#000' size={18}/>
                            <Input placeholder='Ulangi Password Baru' 
                                    style={{color : '#000'}} 
                                    secureTextEntry={true} 
                                    placeholderTextColor='#000'
                                    value = {this.props.changepassword.confirm_password}
                                    onChangeText ={this.getValueConfirmPassword.bind(this)}
                            />
                        </Item>
                        <Button full rounded style={{backgroundColor: '#3B5998', height : 50}} onPress={ () => this.onSendDataChangePassword() }>
                            <Text style={{color : '#fff', fontSize : 16, fontWeight : 'bold'}}>Ganti Password</Text>
                        </Button>
                    </View> 
                </Content>
            </Container>
        )
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

const mapStateToProps = state => {
    return {
        changepassword : state.changepassword,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeOldPassword : (data) => dispatch(onChangeOldPassword(data)),
        changeNewPassword : (data) => dispatch(onChangeNewPassword(data)),
        changeConfirmPassword : (data) => dispatch(onChangeConfirmPassword(data)),
        changeMyPassword: (data, url) => {
            put(data,'profile/changepassword')
            .then((response) => response.json())
            .then((responseData) => {
               if(responseData.success) 
               {
                    url.navigate('Profilepage')
               } else {
                    alert(responseData.message)
               }
            })
            .catch((err) => {
                alert('something went wrong')
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Changepassword)