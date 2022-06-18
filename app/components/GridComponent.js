import React from "react";
import { StyleSheet, View, FlatList, Platform } from "react-native";
import AppText from "./AppText";
import GridCard from "./GridCard";

import { useNavigation } from "@react-navigation/core";

export default function GridComponent({
  data,
  title,
  numColumns = 2,
  textStyle,
  subtitle = true,
  onTextPress,
  onPressTitle,
}) {
  let navigation = useNavigation();
  // console.log(onPressTitle, onTextPress);

  let handlePress = (category) =>
    navigation.navigate("subcategory", {
      title: category.title,
      Title: onPressTitle,
      subtitle: category.onPressTitle,
    });

  let renderItem = (item) => (
    <View
      style={
        Platform.OS === "ios" ? styles.IosContainer : styles.AndroidContainer
      }
    >
      <GridCard
        source={item.item.source}
        text={item.item.title}
        onPress={() => handlePress(item.item)}
      />
      {/* <CategoryCard source={item.item.source} text={item.item.title} /> */}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        {title && <AppText style={[styles.title, textStyle]}>{title}</AppText>}
        {subtitle && (
          <AppText style={styles.subtitle} onPress={onTextPress}>
            see all
          </AppText>
        )}
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "orange",
        }}
      >
        <FlatList
          key={"#"}
          data={data}
          columnWrapperStyle={{
            paddingHorizontal: 15,
            overflow: "hidden",
          }}
          numColumns={numColumns}
          keyExtractor={(item) => "#" + item.title}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    marginVertical: 10,
    paddingVertical: 15,
    borderRadius: 25,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    textTransform: "capitalize",
    marginVertical: 5,
    paddingHorizontal: 15,
    fontFamily: "Quicksand_600SemiBold",
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 5,
    paddingHorizontal: 15,
    textTransform: "capitalize",
    color: "#615E5E",
    fontFamily: "Quicksand_600SemiBold",
  },
  AndroidContainer: {
    padding: 5,
    // backgroundColor: "orange",
  },
  IosContainer: {
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
});
