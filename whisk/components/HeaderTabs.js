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
        backgroundColor: props.activeTab === props.text ? '#0c1527' : '#eef6ff',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      })
    }
    // change active tab based on text of pressed button
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTab === props.text ? '#eef6ff' : '#0c1527',
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
