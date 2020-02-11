import React from 'react'
import {Text, View, Button} from 'react-native'
import NavBar from '../../organisms/NavBar'

const Orders = (props) => {
    return(
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Text>Orders Page</Text>
                <Button title="Detail" onPress={() => props.navigation.navigate('OrderDetail')}/>
            </View>
            <NavBar/>
        </View>
    )
}

export default Orders;