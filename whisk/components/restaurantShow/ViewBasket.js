import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function ViewBasket({}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 40,
        zIndex: 999,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: '#18cdba',
            alignItems: 'center',
            padding: 13,
            borderRadius: 30,
            width: 300,
            position: 'relative',
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 20,
            }}
          >
            View Basket
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
