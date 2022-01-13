import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantShow/About'
import MenuItem from '../components/restaurantShow/MenuItem'

export default function RestaurantShow() {
  return (
    <View style={{ backgroundColor: '#0c1527', flex: 1 }}>
      <About />
      <Divider
        width={2}
        color="#18cdba"
        style={{
          marginVertical: 20,
        }}
      />
      <MenuItem />
    </View>
  )
}
