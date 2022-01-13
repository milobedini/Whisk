import React from 'react'
import { View, Text, Image } from 'react-native'

const image = require('../../assets/images/rest.jpg')
const title = 'Five Guys'
const description = 'Burgers • American • Fast Food • ££ • 4 Stars (1,213)'

export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription text={description} />
    </View>
  )
}

const RestaurantImage = ({ image }) => (
  <Image
    source={image}
    style={{
      width: '100%',
      height: 180,
    }}
  />
)

const RestaurantTitle = ({ title }) => (
  <Text
    style={{
      color: '#18cdba',
      fontSize: 29,
      fontWeight: '600',
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {title}
  </Text>
)

const RestaurantDescription = ({ text }) => (
  <Text
    style={{
      color: '#eef6ff',
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: '400',
      fontSize: 16,
    }}
  >
    {text}
  </Text>
)
