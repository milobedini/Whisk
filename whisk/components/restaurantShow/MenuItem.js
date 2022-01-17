import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch, useSelector } from 'react-redux'

export default function MenuItem({
  foods,
  restaurantName,
  hideCheckbox,
  marginLeft,
}) {
  const dispatch = useDispatch()
  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: 'ADD_TO_BASKET',
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    })

  const basketItems = useSelector(
    (state) => state.basketReducer.selectedItems.items
  )

  const isItemInBasket = (food, basketItems) =>
    Boolean(basketItems.find((item) => item.title === food.title))

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            {hideCheckbox ? null : (
              <BouncyCheckbox
                fillColor="#18cdba"
                unfillColor="#eef6ff"
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                isChecked={isItemInBasket(food, basketItems)}
              />
            )}
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
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
    justifyContent: 'space-evenly',
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: '600',
    color: '#eef6ff',
    maxWidth: 220,
  },
})

const FoodInfo = ({ food }) => (
  <View
    style={{
      width: 240,
      justifyContent: 'space-around',
    }}
  >
    <Text style={styles.titleStyle}>{food.title}</Text>
    <Text
      style={{
        color: '#eef6ff',
        maxWidth: 200,
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

const FoodImage = ({ food, marginLeft }) => (
  <View>
    <Image
      source={{ uri: food.image }}
      style={{
        width: 100,
        marginLeft: marginLeft,
        height: 100,
        borderRadius: 8,
      }}
    />
  </View>
)
