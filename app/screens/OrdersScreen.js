import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import OrdersCard from "../components/OrdersCard";
import Seperator from "../components/Seperator";
import useApi from "../hooks/useApi";
import apiListing from "../api/listings";
import LoadingIndicator from "../components/LoadingIndicator";

let orderList = [
  {
    id: 1,
    items: 2,
    source: require("../assets/images/detergent.jpg"),
    title: "Detergent",
    status: "cancelled",
    total: "Rs. 125",
  },
  {
    id: 2,
    source: require("../assets/images/cakes.jpeg"),
    items: 2,
    title: "Britania Cakes",
    status: "pending",
    total: "Rs. 125",
  },
  {
    id: 3,
    source: require("../assets/images/cookingOil.jpg"),
    title: "Cooking Oil",
    status: "delivered",
    total: "Rs. 425",
    items: 1,
  },
];

export default function OrdersScreen() {
  let getOrderListing = useApi(apiListing.getOrders);
  useEffect(() => {
    getOrderListing.request();
  }, []);
  // console.log("====================================");
  // console.log(getOrderListing.data);
  // console.log("====================================");
  // console.log(getOrderListing.loading);
  return (
    <>
      <LoadingIndicator visible={getOrderListing.loading} />
      <View style={{ flex: 1 }}>
        {/* <Text>Orders Screen</Text> */}
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={getOrderListing.data}
          ItemSeparatorComponent={Seperator}
          renderItem={(item) => (
            <OrdersCard
              title={item.item.title}
              source={item.item.source}
              status={item.item.status}
              items={item.item.items}
              total={item.item.total}
            />
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
