import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'

// const foods = [
//   {
//     title: 'Burger',
//     description: 'That is a tasty burger',
//     price: '£12.99',
//     image:
//       'https://cdn-b.william-reed.com/var/wrbm_gb_hospitality/storage/images/publications/hospitality/bighospitality.co.uk/article/2019/09/20/how-five-guys-conquered-the-uk-burger-market/3169189-1-eng-GB/How-Five-Guys-conquered-the-UK-burger-market.jpg',
//   },
//   {
//     title: 'Burger',
//     description: 'That is a tasty burger',
//     price: '£12.99',
//     image:
//       'https://cdn-b.william-reed.com/var/wrbm_gb_hospitality/storage/images/publications/hospitality/bighospitality.co.uk/article/2019/09/20/how-five-guys-conquered-the-uk-burger-market/3169189-1-eng-GB/How-Five-Guys-conquered-the-UK-burger-market.jpg',
//   },
// ]

export default function MenuItem({ foods, restaurantName }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.3}
            style={{
              marginHorizontal: 16,
            }}
          />
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: '600',
    color: '#eef6ff',
  },
})

const FoodInfo = ({ food }) => (
  <View
    style={{
      width: 240,
      justifyContent: 'space-evenly',
    }}
  >
    <Text style={styles.titleStyle}>{food.title}</Text>
    <Text
      style={{
        color: '#eef6ff',
      }}
    >
      {food.description}
    </Text>
    <Text
      style={{
        color: '#eef6ff',
      }}
    >
      {food.price}
    </Text>
  </View>
)

const FoodImage = ({ food }) => (
  <View>
    <Image
      source={{ uri: food.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
      }}
    />
  </View>
)
