import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableRipple } from "react-native-paper";

const Button = props => {
  return (
    <TouchableRipple
      onPress={props.onPress}
      rippleColor="rgba(0, 0, 0, .32)"
      style={styles.buttonWrapper}
    >
      <Text style={styles.buttonText}>
        {props.title}
      </Text>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: "#E8E8E8",
    paddingVertical: 15,
    borderRadius: 5
  },
  buttonText: { 
    color: "#000", 
    textAlign: "center", 
    fontWeight: "bold" 
  }
})

export default Button;
