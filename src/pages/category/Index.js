import React, { Component } from 'react';
import List from './List';


class Index extends Component {
    render(){
        return (
            <List nav={this.props.nav}/>
        )
    }
}

export default Index