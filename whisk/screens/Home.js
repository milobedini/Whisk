import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import RestaurantCard, { localRestaurants } from '../components/RestaurantCard'
import SearchBar from '../components/SearchBar'
import axios from 'axios'
import { YELP_API_KEY } from '../Environment'

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants)

  const getYelpRestaurants = async () => {
    const baseUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=London`

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    }
    const response = await axios.get(baseUrl, apiOptions)
    const data = response.data.businesses
    setRestaurantData(data)
  }

  useEffect(() => {
    getYelpRestaurants()
  }, [])

  return (
    <SafeAreaView style={{ backgroundColor: '#0c1527', flex: 1 }}>
      <View style={{ backgroundColor: '#eef6ff', padding: 16 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantCard restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  )
}
