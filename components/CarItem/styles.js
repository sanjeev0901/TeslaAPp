import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  titleContainer: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  titleText: {
    fontSize: 40,
    fontWeight: "500",
  },
  subTitleText: {
    fontSize: 16,
    color: "#5c5e62",
  },
  subTitleCTA: {
    textDecorationLine: "underline",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
});

export default styles;
