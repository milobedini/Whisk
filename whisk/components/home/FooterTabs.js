import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from 'react-native-vector-icons'

export default function FooterTabs() {
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between',
      }}
    >
      <Icon icon="home" name="Home" />
      <Icon icon="search" name="Browse" />
      <Icon icon="shopping-bag" name="Bag" />
      <Icon icon="receipt" name="Orders" />
      <Icon icon="user" name="Account" />
    </View>
  )
}

const Icon = ({ icon, name }) => (
  <TouchableOpacity>
    <FontAwesome5
      name={icon}
      size={25}
      style={{
        marginBottom: 3,
        alignSelf: 'center',
        color: '#eef6ff',
      }}
    />
    <Text
      style={{
        color: '#eef6ff',
      }}
    >
      {name}
    </Text>
  </TouchableOpacity>
)
