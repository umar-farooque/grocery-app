import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import AppText from "./AppText";

function CategoryCard({ text, source, style, onPress }) {
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
      <View style={{ paddingHorizontal: 5 }}>
        <AppText style={styles.text}>{text}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    width: 100,
    // height: 105,
    borderRadius: 15,
    backgroundColor: "white",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  image: { width: "100%", height: 70 },
  text: {
    textAlign: "center",
    marginVertical: 8,
    fontSize: 15,

    // fontWeight: "600",
  },
});

export default CategoryCard;
