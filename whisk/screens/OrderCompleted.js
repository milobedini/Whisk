import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'
import LottieView from 'lottie-react-native'

export default function OrderCompleted() {
  const { items, restaurantName } = useSelector(
    (state) => state.basketReducer.selectedItems
  )
  const total = items
    .map((item) => Number(item.price.replace('£', '')))
    .reduce((prev, curr) => prev + curr, 0)

  const textTotal = total.toLocaleString('en', {
    style: 'currency',
    currency: 'GBP',
  })
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#0c1527',
      }}
    >
      <LottieView
        style={{
          height: 100,
          alignSelf: 'center',
          marginBottom: 30,
        }}
        source={require('../assets/animations/check-mark.json')}
      />
      <Text
        style={{
          color: '#eef6ff',
        }}
      >
        Your order at {restaurantName} has been placed for {textTotal}
      </Text>
    </SafeAreaView>
  )
}
