import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { signIn, signUp } from '../firebase'
import LottieView from 'lottie-react-native'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState('signUp')

  const handlePress = async () => {
    if (mode === 'signUp') {
      await signUp(email, password)
    }
    if (mode === 'signIn') {
      await signIn(email, password)
    }
  }

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#0c1527',
      }}
    >
      <Text style={{ color: '#eef6ff', fontSize: 24, marginBottom: 20 }}>
        Welcome to Whisk
      </Text>
      <LottieView
        style={{
          width: 240,
          height: 240,
        }}
        source={require('../assets/animations/stir.json')}
        autoPlay
        loop
        resizeMode="cover"
      />
      <View style={{ marginTop: 20 }}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor={'#18cdba'}
          style={{
            borderBottomColor: '#18cdba',
            borderBottomWidth: 2,
            width: 200,
            color: '#18cdba',
          }}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor={'#18cdba'}
          style={{
            borderBottomColor: '#18cdba',
            borderBottomWidth: 2,
            width: 200,
            color: '#18cdba',
            marginTop: 20,
          }}
        />
      </View>
    </View>
  )
}

export default SignIn
