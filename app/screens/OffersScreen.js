import React from "react";
import { StyleSheet, View, ScrollView, FlatList } from "react-native";

import OfferCard from "../components/OfferCard";

import Seperator from "../components/Seperator";

export default function OffersScreen({ navigation, route }) {
  const { data } = route.params;
  // console.log();
  let renderItem = (item) => (
    <OfferCard
      item={item.item}
      onPress={() => navigation.navigate("detail", { data: item.item })}
    />
  );

  return (
    <ScrollView>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.toString() + index}
        renderItem={renderItem}
        ItemSeparatorComponent={Seperator}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
