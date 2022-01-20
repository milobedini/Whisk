import { signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from 'react-native-vector-icons'
import { auth, logOut } from '../../firebase'

export default function FooterTabs({ navigation, setIsLoggedIn, isLoggedIn }) {
  const handleLogout = async () => {
    await logOut()
    setIsLoggedIn(false)
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between',
      }}
    >
      <Icon icon="home" name="Home" />
      <Icon icon="search" name="Browse" />
      <Icon icon="shopping-bag" name="Bag" />
      <Icon icon="receipt" name="Orders" />
      <TouchableOpacity
        onPress={
          auth.currentUser ? handleLogout : () => navigation.navigate('SignIn')
        }
      >
        <Icon icon="user" name={isLoggedIn ? 'Sign Out' : 'Sign In'} />
      </TouchableOpacity>
    </View>
  )
}

const Icon = ({ icon, name }) => (
  <View>
    <FontAwesome5
      name={icon}
      size={25}
      style={{
        marginBottom: 3,
        alignSelf: 'center',
        color: '#eef6ff',
      }}
    />
    <Text
      style={{
        color: '#eef6ff',
      }}
    >
      {name}
    </Text>
  </View>
)
