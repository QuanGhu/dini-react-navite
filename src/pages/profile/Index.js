import React, { Component } from 'react';
import { AsyncStorage, Text, View} from 'react-native';
import Login from './Login';

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
        console.log(this.state.token);
        return (
            <Login nav={this.props.navigation} />
        )
    }
}

export default Index