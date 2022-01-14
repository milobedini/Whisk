import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import Categories from '../components/home/Categories'
import HeaderTabs from '../components/home/HeaderTabs'
import RestaurantCard from '../components/home/RestaurantCard'
import SearchBar from '../components/home/SearchBar'
import axios from 'axios'
import { YELP_API_KEY } from '../Environment'
import { Divider } from 'react-native-elements'
import FooterTabs from '../components/home/FooterTabs'

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState([])
  const [city, setCity] = useState('London')
  const [activeTab, setActiveTab] = useState('All')

  const getYelpRestaurants = async () => {
    const baseUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    }
    const response = await axios.get(baseUrl, apiOptions)

    if (activeTab === 'Best Rated') {
      const data = response.data.businesses
        .filter((business) => business.rating > 4.4)
        .sort((a, b) => b.rating - a.rating)

      setRestaurantData(data)
    } else {
      const data = response.data.businesses
      setRestaurantData(data)
    }
  }

  useEffect(() => {
    getYelpRestaurants()
  }, [city, activeTab])

  return (
    <SafeAreaView style={{ backgroundColor: '#0c1527', flex: 1 }}>
      <View style={{ backgroundColor: '#eef6ff', padding: 16 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <Divider width={1} />
        <RestaurantCard
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <FooterTabs />
    </SafeAreaView>
  )
}
