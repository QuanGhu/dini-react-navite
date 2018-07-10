import React, { Component } from 'react';
import { Card, CardItem, Body, Text, Root} from 'native-base';
import { View , ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { getList } from '../../action/category';
import { getNoAuth } from '../../config/fetch';

class List extends Component {

    componentWillMount()
    {
        this.props.getCategoriesData();
    }
    _renderList = () => {
        return this.props.categories.map((category) => {
            return (
                <Card key={category.id} style={{paddingTop : 25, paddingBottom : 25}}>
                    <CardItem button onPress={() => this.props.nav.navigate('Productpage', { id : category.id }) }>
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
                {!this.props.categories ? 
                    <View style={{flex : 1, justifyContent : 'center', alignItems: 'center'}}> 
                        <ActivityIndicator size="large" color="#f75400" />
                    </View>
                : this._renderList() }
            </Root>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories : state.categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCategoriesData: () => {
            getNoAuth('categories')
            .then((response) => response.json())
            .then(async (responseData) => {
                console.log(responseData)
                if(responseData.status)
                {
                    dispatch(getList(responseData.data))
                } else {
                    console.log('something error')      
                }
            })
            .catch((error) => {
                console.log(error)
            })
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List)