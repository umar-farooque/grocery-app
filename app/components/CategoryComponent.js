import React from "react";
import { View, StyleSheet, FlatList, Platform } from "react-native";
import AppText from "../components/AppText";
import CategoryCard from "./CategoryCard";

function CategoryComponent({ data, title, onTextPress, onPress }) {
  let renderItem = (item) => (
    <View
      style={
        Platform.OS === "ios" ? styles.IosContainer : styles.AndroidContainer
      }
    >
      <CategoryCard
        source={item.item.source}
        text={item.item.title}
        onPress={onPress}
      />
    </View>
  );
  return (
    <View style={{ marginVertical: 10, paddingBottom: 5 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle} onPress={onTextPress}>
          see all
        </AppText>
      </View>
      <FlatList
        data={data}
        contentContainerStyle={{ paddingHorizontal: 5 }}
        keyExtractor={(item) => item.title}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 20,
    // fontWeight: "bold",
    // textAlign: "center",
    textTransform: "capitalize",
    marginVertical: 5,
    paddingHorizontal: 15,
    // color: "white",
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 5,
    paddingHorizontal: 15,
    textTransform: "capitalize",
    color: "#615E5E",
  },
  IosContainer: {
    marginHorizontal: 2,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  AndroidContainer: { marginHorizontal: 2, padding: 5 },
});

export default CategoryComponent;
