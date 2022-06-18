import React, { useContext } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";

import AppText from "./AppText";

import { Badge } from "react-native-elements";
import { Icon } from "react-native-elements";
import Constants from "expo-constants";

import colors from "../utils/colors";
import ShoppingCartContext from "../context/ShoppingCart";

export default function Customheader({ navigation }) {
  let context = useContext(ShoppingCartContext);

  let handleDimensions = (event) => {
    // console.log("event----->", event.nativeEvent.layout);
    const { height, y } = event.nativeEvent.layout;
    styles.header = { ...styles.header, marginBottom: y };
  };

  return (
    <>
      <View style={styles.header} onLayout={handleDimensions}>
        <View style={styles.content}>
          <Icon
            name="menu-outline"
            color="white"
            type="ionicon"
            size={35}
            onPress={() => navigation.openDrawer()}
          />
          <View style={{ paddingRight: 10 }}>
            <Icon
              name="shoppingcart"
              color="white"
              type="antdesign"
              size={25}
              onPress={() => navigation.navigate("cart")}
            />
            <Badge
              value={context.items.length}
              status="error"
              containerStyle={styles.badgeContainerStyle}
            />
          </View>
        </View>
        <View style={{ width: "100%" }}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Search")}
          >
            <View style={styles.searchContainer}>
              <Icon name="search" color="grey" type="evilicon" />
              <AppText style={{ color: "grey", marginLeft: 5 }}>
                Search Products
              </AppText>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    display: "flex",
    top: Constants.statusBarHeight,
    // position: "absolute",
    width: "100%",
    backgroundColor: colors.primary,
    // backgroundColor: "transparent",
    height: 120,
    alignItems: "flex-start",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    marginBottom: "8%",
  },
  content: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  badgeContainerStyle: {
    position: "absolute",
    top: -10,
    right: 2,
  },
  searchContainer: {
    width: "100%",
    flexDirection: "row",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",

    backgroundColor: "white",
  },
});
