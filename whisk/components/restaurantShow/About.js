import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from 'react-native-vector-icons'

export default function About({ route, navigation }) {
  const { name, image, price, reviews, rating, categories } = route.params

  const formattedCategories = categories
    .map((category) => category.title)
    .join(' | ')

  const star = '⭐️'

  const description = `${formattedCategories} ${
    price ? ` | ${price}` : ''
  } | ${rating}* ${star.repeat(rating.toFixed(0))}(${reviews})`

  return (
    <View>
      <RestaurantImage image={image} navigation={navigation} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  )
}

const RestaurantImage = ({ image, navigation }) => (
  <View
    style={{
      position: 'relative',
    }}
  >
    <Image
      source={{ uri: image }}
      style={{
        width: '100%',
        height: 180,
      }}
    ></Image>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <MaterialCommunityIcons
        name="backburger"
        color="#18cdba"
        size={40}
        style={{
          position: 'absolute',
          bottom: 0,
        }}
      />
    </TouchableOpacity>
  </View>
)

const RestaurantName = ({ name }) => (
  <Text
    style={{
      color: '#18cdba',
      fontSize: 29,
      fontWeight: '600',
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {name}
  </Text>
)

const RestaurantDescription = ({ description }) => (
  <Text
    style={{
      color: '#eef6ff',
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: '400',
      fontSize: 16,
      lineHeight: 30,
    }}
  >
    {description}
  </Text>
)
