import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState('Delivery')

  return (
    <View style={styles.container}>
      <HeaderButton
        text="Delivery"
        buttonColour="#0a0908"
        textColour="#f2f4f3"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        buttonColour="#f2f4f3"
        textColour="#0a0908"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  )
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={
      (styles.header,
      {
        backgroundColor: props.buttonColour,
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      })
    }
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        color: props.textColour,
        fontSize: 15,
        fontWeight: '900',
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
})
