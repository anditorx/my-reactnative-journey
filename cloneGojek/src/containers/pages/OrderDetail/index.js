import React from 'react'
import { Text , View} from 'react-native'
import NavBar from '../../organisms/NavBar'

const OrderDetail = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text>Orders Detail Page</Text>

            </View>
            <NavBar />
        </View>
    )
}

export default OrderDetail;