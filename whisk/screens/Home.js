import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import HeaderTabs from '../components/HeaderTabs'

export default function Home() {
  return (
    <SafeAreaView>
      <HeaderTabs />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
