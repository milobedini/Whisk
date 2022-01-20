import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { auth, signIn, signUp } from '../firebase'
import LottieView from 'lottie-react-native'

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState('signIn')

  const handlePress = async () => {
    if (mode === 'signUp') {
      await signUp(email, password)
      setMode('signIn')
    }
    if (mode === 'signIn') {
      await signIn(email, password)

      navigation.navigate('Home')
    }
  }

  return (
    <View
      style={{
        // justifyContent: 'center',
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
            color: '#18cdba',
            fontSize: 24,
            width: 300,
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
            color: '#18cdba',
            marginTop: 20,
            fontSize: 24,
          }}
        />
        <View style={{ marginTop: 20 }}>
          <Button
            title={mode === 'signUp' ? 'Sign Up' : 'Log In'}
            disabled={!password || !email}
            color="#18cdba"
            onPress={() => handlePress()}
          />
          <TouchableOpacity
            style={{ marginTop: 15 }}
            onPress={() =>
              mode === 'signUp' ? setMode('signIn') : setMode('signUp')
            }
          >
            <Text style={{ color: '#eef6ff', textAlign: 'center' }}>
              {mode === 'signUp'
                ? 'Already have an account? Sign In.'
                : "Don't have an account? Sign Up."}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SignIn
