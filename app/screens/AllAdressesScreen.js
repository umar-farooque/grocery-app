import React, { useState } from "react";

import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { Icon } from "react-native-elements";
import AddressCard from "../components/AddressCard";
import AppText from "../components/AppText";
import CartButton from "../components/CartButton";
import colors from "../utils/colors";

export default function AllAdressesScreen({ navigation }) {
  let items = [1, 2];
  let addresses = [
    {
      id: 1,
      title: "home",
      name: "MR john Braith",
      address:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur",
      mobile: "8956232563",
      selected: true,
    },
    {
      id: 2,
      title: "office",
      name: "MR john Braith",
      address:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur",
      mobile: "8956232563",
      selected: false,
    },
  ];
  let [current, setCurrent] = useState({ item: addresses[0].id });
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <AppText>Saved Addresses</AppText>
        <View>
          <CartButton
            title="Add New"
            onPress={() => navigation.navigate("EditAddress")}
          />
        </View>
      </View>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("map")}>
        <View style={styles.location}>
          <View style={{ marginRight: 10 }}>
            <Icon name="location" type="ionicon" color="black" size={20} />
          </View>
          <AppText>Use Current Location</AppText>
        </View>
      </TouchableWithoutFeedback>
      {addresses.map((item, index) => (
        <View style={{ marginBottom: 10, marginHorizontal: 5 }}>
          <AddressCard
            key={item.id}
            // state={current.item == item.id}
            state={item.selected}
            title={item.title}
            address={item.address}
            name={item.name}
            mobile={item.mobile}
            onPress={() => {
              setCurrent({ item: item });
              navigation.goBack();
            }}
          />
        </View>
      ))}
      {/* <View style={{ width: "50%", alignSelf: "center" }}>
        <CartButton
          title="Pay"
          style={{
            padding: 13,
            backgroundColor: colors.primary,
            borderWidth: 0,
          }}
          titleStyle={{ color: "white", fontSize: 20 }}
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 15,
  },
  topContainer: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    alignItems: "center",
    backgroundColor: "white",
  },
  location: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 5,
    padding: 10,
    justifyContent: "center",
    backgroundColor: "white",
  },
});
