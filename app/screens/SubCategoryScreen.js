import React from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";

import OfferCard from "../components/OfferCard";
import Seperator from "../components/Seperator";

import { masala, getData } from "../utils/Items";

function SubCategoryScreen(props) {
  let renderItem = (item) => (
    <OfferCard
      item={item.item}
      onPress={() => navigation.navigate("detail", { data: item.item })}
    />
  );
  console.log(getData("bakery", "cakes"));
  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          data={masala}
          keyExtractor={(item, index) => item.toString() + index}
          renderItem={renderItem}
          ItemSeparatorComponent={Seperator}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SubCategoryScreen;
