import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import RestaurantCard from '../components/RestaurantCard'
import SearchBar from '../components/SearchBar'

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: '#0c1527', flex: 1 }}>
      <View style={{ backgroundColor: '#eef6ff', padding: 16 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantCard />
      </ScrollView>
    </SafeAreaView>
  )
}
