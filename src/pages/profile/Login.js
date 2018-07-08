import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Item, Input, Container} from 'native-base';
import Entypoicons from 'react-native-vector-icons/Entypo';

class Login extends Component {
    render() {
        return (
            <View style={{flex : 1, alignItems : 'center', justifyContent : 'space-between', alignContent : 'center', backgroundColor : 'blue', alignSelf : 'stretch'}}>
                <View style={{ flex : 1}}>
                    <Text style={{ backgroundColor: 'transparent', textAlign: 'center', fontSize: 30, padding: 40, color : '#fff'}}>
                        Dini Shop
                    </Text>
                </View>
                <View style={{ flex : 1, padding : 30, marginBottom : 45, alignSelf : 'stretch'}}>
                    <Item rounded style={{backgroundColor : 'rgba(255, 255, 255, 0.25)', padding : 5, paddingLeft : 15, paddingRight : 15, borderColor : 'transparent', marginBottom : 15}}>
                        <Entypoicons name='user' color='#fff' size={18}/>
                        <Input placeholder='Username' 
                                style={{color : '#f2f2f2'}} 
                                placeholderTextColor='#f2f2f2'
                        />
                    </Item>
                    <Item rounded style={{backgroundColor : 'rgba(255, 255, 255, 0.25)', padding : 5, paddingLeft : 15, paddingRight : 15, borderColor : 'transparent', marginBottom : 15}}>
                        <Entypoicons name='key' color='#fff' size={18}/>
                        <Input placeholder='Password' 
                                style={{color : '#f2f2f2'}} 
                                secureTextEntry={true} 
                                placeholderTextColor='#f2f2f2'
                        />
                    </Item>
                    <Button full rounded style={{backgroundColor: '#3B5998', height : 50}}>
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
        )
    }
}

export default Login