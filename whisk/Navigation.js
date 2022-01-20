import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import RestaurantShow from './screens/RestaurantShow'
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from './redux/store'
import OrderCompleted from './screens/OrderCompleted'
import SignIn from './screens/SignIn'
import { auth } from './firebase'

const store = configureStore()

export default function RootNavigation() {
  const Stack = createStackNavigator()

  const screenOptions = {
    headerShown: false,
  }

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="RestaurantShow" component={RestaurantShow} />
          <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  )
}
