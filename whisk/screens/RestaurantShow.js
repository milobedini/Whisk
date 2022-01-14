import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantShow/About'
import MenuItem from '../components/restaurantShow/MenuItem'
import ViewBasket from '../components/restaurantShow/ViewBasket'

const foods = [
  {
    title: 'Royale with Cheese',
    description: 'That is a tasty burger.',
    price: '£12.99',
    image:
      'https://cdn-b.william-reed.com/var/wrbm_gb_hospitality/storage/images/publications/hospitality/bighospitality.co.uk/article/2019/09/20/how-five-guys-conquered-the-uk-burger-market/3169189-1-eng-GB/How-Five-Guys-conquered-the-UK-burger-market.jpg',
  },
  {
    title: 'Creamy Sausage & Pea Farfalle',
    description: 'A wonderfully simple and tasty dish.',
    price: '£9.99',
    image:
      'https://res.cloudinary.com/eevelynaa1/image/upload/v1637019983/SEI_Project3/2644---Creamy-Sausage--Pea-Farfalle-6985-1580124159194-x700_fkrquf.jpg',
  },
  {
    title: 'Creamy Pasta With Crispy Mushrooms',
    description: 'A beautiful Italian pasta.',
    price: '£11.50',
    image:
      'https://res.cloudinary.com/eevelynaa1/image/upload/v1636648410/SEI_Project3/Creamy-Pasta-Crispy-Mushroom-recipe-BA-091019_lxdxqs.webp',
  },
  {
    title: 'Pumpkin Soup',
    description: 'One for the soup lovers.',
    price: '£7.00',
    image:
      'https://simpleveganblog.com/wp-content/uploads/2019/11/Pumpkin-Soup-2.jpg',
  },
  {
    title: 'Aubergine Parmigiana Lasagne',
    description: 'A fulfilling seasonal dish.',
    price: '£11.99',
    image:
      'https://images.immediate.co.uk/production/volatile/sites/30/2021/07/Veggie-lasagne-f12ae1c.jpg?quality=90&webp=true&resize=300,272',
  },
  {
    title: 'Jammy Blackberry & Almond Crumble Cake',
    description: 'There is always room for pudding.',
    price: '£6.99',
    image:
      'https://images.immediate.co.uk/production/volatile/sites/30/2021/07/Jammy-blackberry-and-almond-crumble-cake-18c9873.jpg?quality=90&webp=true&resize=300,272',
  },
]

export default function RestaurantShow({ route, navigation }) {
  return (
    <View style={{ backgroundColor: '#0c1527', flex: 1 }}>
      <About route={route} navigation={navigation} />
      <Divider
        width={2}
        color="#18cdba"
        style={{
          marginVertical: 20,
        }}
      />
      <MenuItem restaurantName={route.params.name} foods={foods} />
      <ViewBasket navigation={navigation} restaurantName={route.params.name} />
    </View>
  )
}
