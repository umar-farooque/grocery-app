import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import * as Location from "expo-location";
import DefaultAddressCard from "../components/DefaultAddressCard";
import CartButton from "../components/CartButton";
import Seperator from "../components/Seperator";
export default function checkoutScreen({ navigation, route }) {
  // console.log(props);
  return (
    <View>
      <DefaultAddressCard onPress={() => navigation.navigate("Addresses")} />
      <Seperator />
      <View style={{ backgroundColor: "white", padding: 10 }}>
        <View style={{ width: "80%", alignSelf: "center" }}>
          <CartButton
            title="Deliver To this Address"
            onPress={() =>
              navigation.navigate("payment", { amount: route.params.amount })
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

// const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
// const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
//   "Wait, we are fetching you location..."
// );
// useEffect(() => {
//   CheckIfLocationEnabled();
//   GetCurrentLocation();
// }, []);

// const GetCurrentLocation = async () => {
//   let { status } = await Location.requestPermissionsAsync();

//   if (status !== "granted") {
//     Alert.alert(
//       "Permission not granted",
//       "Allow the app to use location service.",
//       [{ text: "OK" }],
//       { cancelable: false }
//     );
//   }

//   let { coords } = await Location.getCurrentPositionAsync();

//   if (coords) {
//     //   console.log("Cords===============>", coords);
//     const { latitude, longitude } = coords;
//     let response = await Location.reverseGeocodeAsync({
//       latitude,
//       longitude,
//     });
//     //   console.log(response);
//     for (let item of response) {
//       let address = `${item.name},${item.district}, ${item.street}, ${item.city}, ${item.postalCode}, ${item.region}, ${item.country}, `;
//       console.log(address);

//       setDisplayCurrentAddress(address);
//       // Location.geocodeAsync(address).then((response) =>
//       //   console.log(response)
//       // );
//     } // const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
// const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
//   "Wait, we are fetching you location..."
// );
// useEffect(() => {
//   CheckIfLocationEnabled();
//   GetCurrentLocation();
// }, []);

// const GetCurrentLocation = async () => {
//   let { status } = await Location.requestPermissionsAsync();

//   if (status !== "granted") {
//     Alert.alert(
//       "Permission not granted",
//       "Allow the app to use location service.",
//       [{ text: "OK" }],
//       { cancelable: false }
//     );
//   }

//   let { coords } = await Location.getCurrentPositionAsync();

//   if (coords) {
//     //   console.log("Cords===============>", coords);
//     const { latitude, longitude } = coords;
//     let response = await Location.reverseGeocodeAsync({
//       latitude,
//       longitude,
//     });
//     //   console.log(response);
//     for (let item of response) {
//       let address = `${item.name},${item.district}, ${item.street}, ${item.city}, ${item.postalCode}, ${item.region}, ${item.country}, `;
//       console.log(address);

//       setDisplayCurrentAddress(address);
//       // Location.geocodeAsync(address).then((response) =>
//       //   console.log(response)
//       // );
//     }
//   }
// };
// const CheckIfLocationEnabled = async () => {
//   let enabled = await Location.hasServicesEnabledAsync();

//   if (!enabled) {
//     Alert.alert(
//       "Location Service not enabled",
//       "Please enable your location services to continue",
//       [{ text: "OK" }],
//       { cancelable: false }
//     );
//   } else {
//     setLocationServiceEnabled(enabled);
//   }
// };
//   }
// };
// const CheckIfLocationEnabled = async () => {
//   let enabled = await Location.hasServicesEnabledAsync();

//   if (!enabled) {
//     Alert.alert(
//       "Location Service not enabled",
//       "Please enable your location services to continue",
//       [{ text: "OK" }],
//       { cancelable: false }
//     );
//   } else {
//     setLocationServiceEnabled(enabled);
//   }
// };
