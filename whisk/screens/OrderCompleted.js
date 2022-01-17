import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
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
      querySnapshot.forEach((doc) => {
        console.log(doc.id, doc.data())
      })
      querySnapshot.docs.map((doc) => {
        setLastOrder(doc.data().items)
      })
    }
    getLastOrder()
  }, [])
  console.log(lastOrder)

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
        autoPlay
        speed={0.5}
        loop={false}
      />
      <Text
        style={{
          color: '#eef6ff',
        }}
      >
        Your order at {restaurantName} has been placed for {textTotal}
      </Text>
      {lastOrder.length > 0 ? (
        <MenuItem foods={lastOrder} hideCheckbox={true} />
      ) : null}
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
    </SafeAreaView>
  )
}
