import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { CardField, useStripe } from "@stripe/stripe-react-native";
import CartButton from "../components/CartButton";
import colors from "../utils/colors";
import { Alert } from "react-native";

export default function PaymentScreen({ navigation, route }) {
  const [card, setCard] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const { initPaymentSheet, presentPaymentSheet, createPaymentMethod } =
    useStripe();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    initializePaymentSheet();
    // handlePress();
  }, []);
  //   console.log(card);
  const fetchPaymentSheetParams = async () => {
    try {
      console.log("====================================");
      console.log("paymnet intent init");
      console.log("====================================");
      const response = await fetch(
        `https://murmuring-hamlet-85990.herokuapp.com/payment-sheet`,
        // "http://192.168.0.105:5000/payment-sheet",
        {
          method: "POST",
          body: JSON.stringify({
            amount: route.params.amount,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { paymentIntent, ephemeralKey, customer, status } =
        await response.json();
      if (status) return fetchPaymentSheetParams();
      setClientSecret(paymentIntent);
      return {
        paymentIntent,
        ephemeralKey,
        customer,
      };
    } catch (error) {
      console.error(error);
    }
  };
  const initializePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer } =
      await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
    });
    if (!error) {
      setLoading(true);
    }
  };

  // ...
  //   const clientSecret = "sk_test_4eC39HqLyjWDarjtT1zdp7dc";
  let handlePress = async () => {
    console.log("entering now");
    const { error } = await presentPaymentSheet({
      clientSecret: clientSecret,
      confirmPayment: true,
    });
    console.log("request done");
    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert("Success", "Your order is confirmed!");
      navigation.navigate("home");
    }
  };

  console.log("Order Payment", clientSecret);

  return (
    <View style={{ flex: 1, paddingHorizontal: 5, alignItems: "center" }}>
      {/* <CardField
        postalCodeEnabled={true}
        placeholder={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={{
          backgroundColor: "#FFFFFF",
          textColor: "#000000",
        }}
        style={{
          width: "100%",
          height: 50,
          //   borderRadius: 5,
          marginVertical: 30,
        }}
        onCardChange={(cardDetails) => {
          setCard(cardDetails);
        }}
        onFocus={(focusedField) => {
          console.log("focusField", focusedField);
        }}
      /> */}
      {loading ? (
        <View style={styles.buttonContainer}>
          <CartButton
            style={styles.button}
            titleStyle={{ color: "white" }}
            title={`Pay ${route.params.amount} Via Stripe`}
            onPress={handlePress}
          />
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <CartButton
            style={styles.button}
            titleStyle={{ color: "white" }}
            title={`Wait Processing.....`}
            onPress={() =>
              Alert.alert("Error", "You cant make payment right nows")
            }
          />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    height: 50,
    width: "100%",
    padding: 10,
    backgroundColor: colors.primary,
    borderWidth: 0,
  },
  buttonContainer: {
    width: "60%",
    top: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
});
