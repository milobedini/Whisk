import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import { useSelector } from 'react-redux'

export default function ViewBasket({}) {
  const [modalVisible, setModalVisible] = useState(false)

  const items = useSelector((state) => state.basketReducer.selectedItems.items)
  const total = items
    .map((item) => Number(item.price.replace('£', '')))
    .reduce((prev, curr) => prev + curr, 0)

  const textTotal = total.toLocaleString('en', {
    style: 'currency',
    currency: 'GBP',
  })

  const checkoutModalContent = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}
      >
        <View
          style={{
            backgroundColor: '#0c1527',
            padding: 10,
            borderRadius: 30,
            width: 150,
            alignItems: 'center',
          }}
        >
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text
              style={{
                color: 'white',
              }}
            >
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
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
              onPress={() => setModalVisible(true)}
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
