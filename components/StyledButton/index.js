import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

const StyledButton = (props) => {
  const type = props.type;
  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const textColor = type === "primary" ? "#FFFFFF" : "#171A20";
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={props.onPress}
      >
        <Text style={[styles.buttonText, { color: textColor }]}>
          {props.content}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default StyledButton;
