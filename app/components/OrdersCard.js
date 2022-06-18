import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import AppText from "./AppText";
import CartButton from "./CartButton";

export default function OrdersCard({ source, title, items, total, status }) {
  //   let status = "cancelled";
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={{ width: "30%", height: 110 }}>
          <Image
            source={source.url ? { uri: source.url } : source}
            style={{ width: "100%", height: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View style={{ padding: 5 }}>
          <AppText style={{ marginBottom: 5 }}>{title}</AppText>
          <AppText style={{ marginBottom: 5 }}>qty : {items}</AppText>
          <AppText style={{ marginBottom: 5 }}>{total}</AppText>
          <View style={{ flexDirection: "row", marginVertical: 5 }}>
            <View style={styles[status]}>
              <AppText style={styles.text}>{status}</AppText>
            </View>
            {status == "pending" || status == "delivered" ? (
              <View style={{ marginLeft: 10, width: "45%" }}>
                {status == "pending" ? (
                  <CartButton
                    title="Cancel Order"
                    style={{ borderColor: "red" }}
                    titleStyle={{ color: "red" }}
                  />
                ) : (
                  <CartButton
                    title="Order Again"
                    style={{ borderColor: "green" }}
                    titleStyle={{ color: "green" }}
                  />
                )}
              </View>
            ) : null}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { padding: 5, backgroundColor: "white", flexDirection: "row" },
  pending: {
    padding: 5,
    justifyContent: "center",
    backgroundColor: "orange",
    borderRadius: 5,
  },
  delivered: {
    padding: 5,
    justifyContent: "center",
    backgroundColor: "green",
    borderRadius: 5,
  },
  cancelled: {
    padding: 5,
    justifyContent: "center",
    backgroundColor: "red",
    borderRadius: 5,
  },
  text: {
    fontSize: 13,
    color: "white",
    textTransform: "capitalize",
  },
});
