import React, { Component } from 'react';
import { Card, CardItem, Body, Text, Root} from 'native-base';

const data = [
    {
        'id' : '1',
        'name' : 'Celana',
        'description' : 'Celana Berkualitas International'
    },
    {
        'id' : '2',
        'name' : 'Baju',
        'description' : 'Baju Berkualitas International'
    },
    {
        'id' : '3',
        'name' : 'Sepatu',
        'description' : 'Sepatu Berkualitas International'
    },
    {
        'id' : '4',
        'name' : 'Jaket',
        'description' : 'Jaket Jaket Korea'
    },
    {
        'id' : '5',
        'name' : 'Topi',
        'description' : 'Topi Saya Bundar'
    }
]

class List extends Component {

    _renderList = () => {
        return data.map((category) => {
            return (
                <Card key={category.id} style={{paddingTop : 25, paddingBottom : 25}}>
                    <CardItem button onPress={() => this.props.nav.navigate('Productpage') }>
                        <Body style={{ alignContent : 'center', justifyContent : 'center' , alignItems : 'center'}}>
                            <Text style = {{fontWeight : 'bold', fontSize : 20}}>
                                {category.name}
                            </Text>
                            <Text style = {{fontSize : 18}}>
                                {category.description}
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            )
          })
    }

    render(){
        return (
            <Root>
                {this._renderList()}
            </Root>
        )
    }
}

export default List