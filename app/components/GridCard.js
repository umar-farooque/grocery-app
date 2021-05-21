import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Dimensions,
} from "react-native";
import AppText from "./AppText";

export default function GridCard({ style, source, text, onPress }) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View style={{ marginTop: 5 }}>
        <Image
          source={source}
          style={styles.image}
          resizeMode="contain"
          // resizeMethod="auto"
        />
      </View>
      <View style={styles.textContainer}>
        <AppText style={styles.text} lines={2}>
          {text}
        </AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    width: 160,
    height: 130,
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  image: { width: "100%", height: 85 },
  text: {
    textAlign: "center",
    marginVertical: 2,
    fontSize: 15,
  },
  textContainer: {
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
