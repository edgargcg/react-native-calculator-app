import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
  backgroundColor?: "orange" | "gray" | "darkGray",
  fillAnchor?: boolean,
  fontColor?: "white" | "darkGray",
  text: string,
  onClick: (value: any) => void
}

export const Button = (props: Props) => {
  const { 
    backgroundColor = 'darkGray', 
    fillAnchor = false,
    fontColor = 'white', 
    text, 
    onClick
  } = props

  const setBackgroundColor =
    backgroundColor === 'orange'
      ? "#FF9427"
      : backgroundColor === 'darkGray'
        ? "#2D2D2D"
        : "#999999";

  const setFontColor = fontColor === "white"
    ? "white"
    : "#333333";

  return (
    <TouchableOpacity onPress={() => { onClick(text) }}>
      <View style={{
          ...styles.button,
          backgroundColor: setBackgroundColor,
          width: (fillAnchor ? 180 : 80)
        }}
      >
        <Text style={[
          styles.buttonText,
          { color: setFontColor }
        ]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333333",
    borderRadius: 100,
    height: 80,
    justifyContent: "center",
    marginHorizontal: 10,
    width: 80,
  },
  buttonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  }
})
