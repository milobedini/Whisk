import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
} from 'react-native'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem'

export default function ViewBasket({ route }) {
  const [modalVisible, setModalVisible] = useState(false)
  const { image } = route.params

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

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: '#0c1527',
    },
    modalCheckoutContainer: {
      backgroundColor: 'white',
      padding: 16,
      height: 500,
      borderWidth: 1,
    },
    restaurantName: {
      textAlign: 'center',
      fontWeight: '600',
      fontSize: 18,
      marginBottom: 10,
    },
    subtotalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
    },
    subtotalText: {
      textAlign: 'left',
      fontWeight: '600',
      fontSize: 15,
      marginBottom: 10,
      color: '#18cdba',
    },
  })

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View
            style={{
              alignItems: 'center',
            }}
          >
            <Image
              source={{ uri: image }}
              style={{
                width: 200,
                height: 200,
                borderRadius: 50,
                marginBottom: '14%',
              }}
            ></Image>
          </View>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text>{textTotal}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: '#0c1527',
                  alignItems: 'center',
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: 'relative',
                }}
                onPress={() => setModalVisible(false)}
              >
                <Text style={{ color: '#18cdba', fontSize: 20 }}>Checkout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
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
