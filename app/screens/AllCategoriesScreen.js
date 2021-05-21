import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import GridComponent from "../components/GridComponent";

export default function AllCategoriesScreen({ route, navigation }) {
  let data = route.params.data;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <GridComponent data={data} subtitle={false} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, alignItems: "center" },
});
