import React, { useEffect } from "react";
import { StyleSheet, View, FlatList, Platform } from "react-native";

import { useNavigation } from "@react-navigation/core";

import AppText from "./AppText";
import ItemCard from "./ItemCard";

export default function ItemComponent({ data, title, onPress }) {
  const navigation = useNavigation();

  let renderItem = (item) => (
    <View
      style={
        Platform.OS === "ios" ? styles.IosContainer : styles.AndroidContainer
      }
    >
      <ItemCard
        item={item.item}
        onPress={() => navigation.navigate("detail", { data: item.item })}
      />
    </View>
  );
  // useEffect(() => {
  //   console.log("==========****************============****==============");
  //   console.log(data);
  //   console.log("====================================");
  // }, []);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle} onPress={onPress}>
          See All
        </AppText>
      </View>
      <FlatList
        data={data}
        // onLayout={(e) =>
        //   console.log(
        //     "<==================>",
        //     e.nativeEvent.layout,
        //     "<==================>"
        //   )
        // }
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: 5 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        // ListEmptyComponent={<View style={{ height: 50, width: "100%" }}></View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderRadius: 25,
    backgroundColor: "#fff",
    paddingVertical: 15,
  },
  title: {
    fontSize: 20,
    marginVertical: 5,
    paddingHorizontal: 15,
    fontFamily: "Quicksand_600SemiBold",
  },
  subtitle: {
    color: "#615E5E",
    fontSize: 18,
    marginVertical: 5,
    paddingHorizontal: 15,
    fontFamily: "Quicksand_600SemiBold",
  },
  AndroidContainer: { marginHorizontal: 5, paddingVertical: 5 },
  IosContainer: {
    marginHorizontal: 5,
    paddingVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
