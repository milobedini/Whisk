import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from 'react-native-vector-icons'

export default function RestaurantCard({ restaurantData }) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        marginBottom: 30,
      }}
    >
      {restaurantData.map((restaurant, index) => (
        <View
          key={index}
          style={{
            marginTop: 10,
            padding: 8,
            // borderBottomWidth: 1,
            // borderBottomColor: 'white',
          }}
        >
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  )
}

// sub-components for image and info
const RestaurantImage = ({ image }) => (
  <>
    <Image
      source={{ uri: image }}
      style={{
        width: '100%',
        height: 180,
      }}
    />
    <TouchableOpacity
      style={{
        position: 'absolute',
        right: 20,
        top: 20,
      }}
    >
      <MaterialCommunityIcons name="heart" size={40} color="#18cdba" />
    </TouchableOpacity>
  </>
)

const RestaurantInfo = ({ name, rating }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 16,
    }}
  >
    <View style={{}}>
      <Text
        style={{
          color: '#eef6ff',
          fontSize: 15,
          fontWeight: 'bold',
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          color: '#a6adbb',
          fontSize: 13,
        }}
      >
        20-25 mins
      </Text>
    </View>
    <View
      style={{
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        backgroundColor: '#18cdba',
        marginRight: 10,
      }}
    >
      <Text
        style={{
          color: '#eef6ff',
        }}
      >
        {rating}
      </Text>
    </View>
  </View>
)
