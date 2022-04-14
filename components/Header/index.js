import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

const Header = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo.png")}
      />
    </TouchableOpacity>
  );
};

export default Header;
