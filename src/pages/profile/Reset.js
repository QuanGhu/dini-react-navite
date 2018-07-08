import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Item, Input} from 'native-base';

class Reset extends Component {
    render() {
        return (
            <View style={{flex : 1, alignItems : 'center', justifyContent : 'space-between', alignContent : 'center', backgroundColor : 'blue', alignSelf : 'stretch'}}>
                <View style={{ flex : 1}}>
                    <Text style={{ backgroundColor: 'transparent', textAlign: 'center', fontSize: 30, padding: 40, color : '#fff'}}>
                        Atur Ulang Password
                    </Text>
                </View>
                <View style={{ flex : 1, padding : 30, marginBottom : 45, alignSelf : 'stretch'}}>
                    <Item rounded style={{backgroundColor : 'rgba(255, 255, 255, 0.25)', padding : 5, paddingLeft : 15, paddingRight : 15, borderColor : 'transparent', marginBottom : 15}}>
                        <Input placeholder='Email' 
                                style={{color : '#f2f2f2'}} 
                                placeholderTextColor='#f2f2f2'
                        />
                    </Item>
                    <Button full rounded style={{backgroundColor: '#3B5998', height : 50}}>
                        <Text style={{color : '#fff', fontSize : 16, fontWeight : 'bold'}}>Atur Ulang</Text>
                    </Button>
                    <View style={{flex : 1, flexDirection : 'row', justifyContent : 'space-between'}}>
                        <Button transparent onPress = { () => this.props.navigation.navigate('Profilepage') }>
                            <Text style={{ color : '#f2f2f2'}}>Masuk</Text>
                        </Button>
                    </View>
                </View> 
            </View>
        )
    }
}

export default Reset