import React from 'react'
import { View, Text, Image } from 'react-native'

const yelpRestaurantDetail = {
  name: 'Five Guys',
  image: 'image',
  price: '££',
  reviews: 1500,
  rating: 4.7,
  categories: [{ title: 'Burger' }, { title: 'Fast Food' }],
}

export default function About({ route }) {
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
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  )
}

const RestaurantImage = ({ image }) => (
  <Image
    source={{ uri: image }}
    style={{
      width: '100%',
      height: 180,
    }}
  />
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
