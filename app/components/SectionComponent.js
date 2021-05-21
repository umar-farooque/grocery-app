import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AppText from "../components/AppText";
import CategoryCard from "./CategoryCard";

function SectionComponent({ data, title }) {
  let renderItem = (item) => (
    <View style={{ marginHorizontal: 5 }}>
      <CategoryCard source={item.item.source} text={item.item.title} />
    </View>
  );
  return (
    <View style={{ marginVertical: 5 }}>
      <AppText style={styles.title}>{title}</AppText>
      <FlatList
        data={data}
        contentContainerStyle={{ paddingHorizontal: 10 }}
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
    fontWeight: "bold",
    // textAlign: "center",
    textTransform: "capitalize",
    marginVertical: 5,
    paddingHorizontal: 15,
  },
});

export default SectionComponent;
