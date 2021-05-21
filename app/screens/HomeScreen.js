import React from "react";
import { StyleSheet, FlatList, View, ScrollView } from "react-native";
import AppText from "../components/AppText";
import Card from "../components/Card";
import CategoryComponent from "../components/CategoryComponent";
import GridComponent from "../components/GridComponent";
import ItemComponent from "../components/ItemComponent";
import SectionComponent from "../components/SectionComponent";
import {
  BeautyStore,
  Grains,
  bakery,
  brands,
  personal,
  Snacks,
  cleaning,
  GourmetStore,
  Drinks,
} from "../utils/data";

import { masala } from "../utils/Items";

const HomeScreen = ({ navigation }) => {
  let handleTextPress = (title, data) =>
    navigation.navigate("AllCategories", {
      title: title,
      data: data,
    });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.categoryContainer}>
        <CategoryComponent
          data={Grains}
          title="Categories"
          onTextPress={() => handleTextPress("Categories", Grains)}
          onPress={() => console.log("CArd Pressed")}
        />
      </View>
      <ItemComponent
        data={masala}
        title="Top Selling"
        onPress={() => navigation.navigate("Offers", { data: masala })}
      />
      <ItemComponent data={masala} title="Top Deals" />
      <GridComponent
        data={BeautyStore.slice(0, 4)}
        title="Beauty Store"
        onTextPress={() => handleTextPress("Beauty Store", BeautyStore)}
        // onPress={() => handlePress("Beauty")}
      />
      <ItemComponent data={masala} title="Skin Care Deals" />
      <GridComponent
        data={personal.slice(0, 4)}
        title="Personal Care"
        onTextPress={() => handleTextPress("Personal Care", personal)}
      />
      <ItemComponent data={masala} title="Hair Care Deals" />
      <GridComponent
        data={Drinks.slice(0, 4)}
        title="Drinks & Beverages"
        onTextPress={() => handleTextPress("Drinks & Beverages", Drinks)}
      />
      <ItemComponent data={masala} title="Ready to bake" />
      <GridComponent
        data={Snacks.slice(0, 4)}
        title="Snacks Store"
        onTextPress={() => handleTextPress("Snacks Store", Snacks)}
      />
      <GridComponent
        data={GourmetStore.slice(0, 4)}
        title="The Gourmet Store"
        onTextPress={() => handleTextPress("The Gourmet Store", GourmetStore)}
      />
      <GridComponent
        data={bakery.slice(0, 4)}
        title="Bakery Store"
        onTextPress={() => handleTextPress("Bakery Store", bakery)}
      />
      <ItemComponent data={masala} title="Household Deals" />
      <GridComponent
        data={cleaning.slice(0, 4)}
        title="Cleaning & Household"
        onTextPress={() => handleTextPress("Cleaning & Household", cleaning)}
      />
      <GridComponent
        data={brands.slice(0, 4)}
        title="Shop By Brands"
        onTextPress={() => handleTextPress("Shop By Brands", brands)}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 10 },
  categoryContainer: {
    marginVertical: 10,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "#fff",
    // backgroundColor: "#D6EAF8",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    // textAlign: "center",
    textTransform: "capitalize",
    marginVertical: 5,
  },
});
