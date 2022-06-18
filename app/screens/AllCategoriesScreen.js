import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import GridComponent from "../components/GridComponent";
import listingsApi from "../api/listings";
import useApi from "../hooks/useApi";

export default function AllCategoriesScreen({ route, navigation }) {
  let { data, onPressTitle } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <GridComponent
          data={data}
          subtitle={false}
          onPressTitle={onPressTitle}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
