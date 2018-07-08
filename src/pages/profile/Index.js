import React, { Component } from 'react';
import Login from './Login';

class Index extends Component {
    render() {
        return (
            <Login nav={this.props.navigation}/>
        )
    }
}

export default Index