import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Ionicons, AntDesign } from 'react-native-vector-icons'

export default function SearchBar() {
  return (
    <View style={{ marginTop: 15, flexDirection: 'row' }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        placeholderTextColor="white"
        styles={{
          textInput: {
            backgroundColor: '#e0e9f3',
            color: '#0c1527',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#e0e9f3',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 8,
              padding: 9,
              borderRadius: 30,
              backgroundColor: '#eef6ff',
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{
                marginRight: 6,
              }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  )
}
