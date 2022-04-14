import {
  Text,
  View,
  ImageBackground,
  Linking,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = (props) => {
  const {
    name,
    tagline,
    image,
    taglineCTA,
    buttonContent,
    buttonContent2,
    url1,
    url2,
  } = props.car;
  const openURL = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      console.log("Don't know how to open URI: " + url);
    }
  };
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{name}</Text>
        <Text style={styles.subTitleText}>
          {tagline}{" "}
          <TouchableOpacity
            onPress={() => {
              openURL(
                "https://www.tesla.com/support/taking-delivery?redirect=no"
              );
            }}
          >
            <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
          </TouchableOpacity>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type='primary'
          content={buttonContent}
          onPress={() => {
            openURL(url1);
          }}
        />
        <StyledButton
          type='secondary'
          content={buttonContent2}
          onPress={() => {
            openURL(url2);
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
