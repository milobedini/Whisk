import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'

export default function ViewBasket({}) {
  const items = useSelector((state) => state.basketReducer.selectedItems.items)
  const total = items
    .map((item) => Number(item.price.replace('£', '')))
    .reduce((prev, curr) => prev + curr, 0)

  const textTotal = total.toLocaleString('en', {
    style: 'currency',
    currency: 'GBP',
  })

  return (
    <>
      {total ? (
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
                borderRadius: 30,
                width: 300,
                position: 'relative',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                padding: 15,
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  marginRight: 30,
                }}
              >
                View Basket
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                }}
              >
                {textTotal}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </>
  )
}
