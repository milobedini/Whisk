import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from 'react-native-vector-icons'

export const localRestaurants = [
  {
    name: 'Beachside Bar',
    image_url:
      'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
    categories: ['Cafe', 'Bar'],
    price: '££',
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: 'Benihana',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Cafe', 'Bar'],
    price: '££',
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Indian', 'Bar'],
    price: '£££',
    reviews: 700,
    rating: 4.9,
  },
]

export default function RestaurantCard() {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        marginBottom: 30,
      }}
    >
      {localRestaurants.map((restaurant, index) => (
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
        20-25 • min
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
