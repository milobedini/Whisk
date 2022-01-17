import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import LottieView from 'lottie-react-native'
import MenuItem from '../components/restaurantShow/MenuItem'
import { db } from '../firebase'
import {
  collection,
  getDoc,
  getDocs,
  limit,
  limitToLast,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore'

export default function OrderCompleted() {
  const { items, restaurantName } = useSelector(
    (state) => state.basketReducer.selectedItems
  )
  const [lastOrder, setLastOrder] = useState({})
  const total = items
    .map((item) => Number(item.price.replace('£', '')))
    .reduce((prev, curr) => prev + curr, 0)

  const textTotal = total.toLocaleString('en', {
    style: 'currency',
    currency: 'GBP',
  })

  useEffect(() => {
    const getLastOrder = async () => {
      const q = query(
        collection(db, 'orders'),
        orderBy('created', 'desc'),
        limit(1)
      )
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {})
      querySnapshot.docs.map((doc) => {
        setLastOrder(doc.data().items)
      })
    }
    getLastOrder()
  }, [])

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#0c1527',
      }}
    >
      <View
        style={{
          margin: 15,
          alignItems: 'center',
          height: '100%',
        }}
      >
        <LottieView
          style={{
            height: 100,
            alignSelf: 'center',
            marginBottom: 30,
          }}
          source={require('../assets/animations/check-mark.json')}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text
          style={{
            color: '#eef6ff',
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          Your order at {restaurantName} has been placed for {textTotal}.
        </Text>
        <ScrollView>
          {lastOrder.length > 0 ? (
            <MenuItem foods={lastOrder} hideCheckbox={true} />
          ) : null}
        </ScrollView>

        <LottieView
          style={{
            height: 200,
            alignSelf: 'center',
          }}
          source={require('../assets/animations/cooking.json')}
          autoPlay
          speed={0.5}
          loop={false}
        />
      </View>
    </SafeAreaView>
  )
}
