import React, { useEffect, useState, useRef, useContext } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import AppText from "../components/AppText";
import CartButton from "../components/CartButton";

import { Icon } from "react-native-elements/dist/icons/Icon";
import Constants from "expo-constants";
import userContext from "../context/user";

export default function MapViewScreen({ navigation }) {
  let user = useContext(userContext);
  let mapRef = useRef();
  let markerRef = useRef();
  let [location, setLocation] = useState({
    latitude: 19.66328,
    longitude: 75.300293,
  });
  let [region, setRegion] = useState({});
  let [address, setAddress] = useState("Fetching Your Current Location...... ");
  useEffect(() => {
    GetCurrentLocation();
    // console.log("starting exec");
  }, []);

  // const getAdressByCoords = async(latitude, longitude)=>{
  //   await Location.reverseGeocodeAsync({
  //     latitude,
  //     longitude,
  //   });
  // }

  const handleDrag = async ({ nativeEvent }) => {
    let { latitude, longitude } = nativeEvent.coordinate;
    // console.log("latitude and longitude", latitude, longitude);
    // setLocation({ latitude, longitude });
    // mapRef.current.animateCamera({ latitude, longitude });
    let response = await Location.reverseGeocodeAsync({ latitude, longitude });
    // console.log("response====>", response);

    for (let item of response) {
      let address = `${item.name},${item.district},${item.city}, ${item.postalCode}, ${item.region}, ${item.country} `;
      // console.log(address);
      setAddress(address);
    }
  };

  let getBackCurrentLocation = async () => {
    // const { latitude, longitude } = location;
    let { coords } = await Location.getCurrentPositionAsync();
    const { latitude, longitude } = coords;
    // mapRef.current.animateToRegion({ latitude, longitude }, 300);
    mapRef.current.fitToCoordinates(
      [{ latitude: latitude, longitude: longitude }],
      false
    );
    setLocation({ latitude, longitude });
    let response = await Location.reverseGeocodeAsync({
      latitude: location.latitude,
      longitude: location.longitude,
    });
    // console.log(response);
    for (let item of response) {
      let address = `${item.name},${item.district}, ${item.street}, ${item.city}, ${item.postalCode}, ${item.region}, ${item.country} `;
      setAddress(address);
    }
  };

  const GetCurrentLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Allow the app to use location service.",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }

    let { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      // console.log("Cords===============>", coords);
      const { latitude, longitude } = coords;
      // let response = await mapRef.current.addressForCoordinate({
      //   latitude,
      //   longitude,
      // });
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      // console.log(response);
      for (let item of response) {
        let address = `${item.name},${item.district}, ${item.street}, ${item.city}, ${item.postalCode}, ${item.region}, ${item.country} `;
        // console.log(address);

        // setDisplayCurrentAddress(address);
        // Location.geocodeAsync(address).then((response) =>
        //   console.log(response)
        // );
        setLocation({ latitude, longitude });
        setAddress(address);
      }
      mapRef.current.fitToCoordinates(
        [{ latitude: latitude, longitude: longitude }],
        false
      );
      // console.log("ended set loc");
    }
  };
  // console.log(location);
  return (
    <>
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          style={styles.map}
          showsUserLocation={true}
          showsMyLocationButton={true}
          scrollEnabled={true}
          // onPanDrag={handleDrag}
          // onRegionChange={(event)=> console.log()}
          // mapType="terrain"
        >
          <Marker.Animated
            ref={markerRef}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            draggable
            onDragEnd={handleDrag}
          />
        </MapView>
        <View style={styles.bottomView}>
          <View style={{ marginBottom: 5 }}>
            <AppText style={{ fontSize: 23 }}> Your Current Location</AppText>
          </View>
          <View>
            <AppText style={{ textTransform: "capitalize" }}>{address}</AppText>
          </View>

          <View style={styles.button}>
            <CartButton
              title="Select Location"
              onPress={() => {
                // navigation.navigate("Addresses");
                user.updateAddress(address);
                navigation.goBack();
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.back}>
        <Icon
          name="arrow-back"
          type="ionicon"
          size={25}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.globe}>
        <Icon
          name="location"
          type="ionicon"
          size={25}
          color="red"
          onPress={() => getBackCurrentLocation()}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#fff",
  },
  button: {
    width: "80%",
    marginTop: 20,
    alignSelf: "center",
  },
  back: {
    position: "absolute",
    marginTop: Constants.statusBarHeight,
    top: 15,
    left: 25,
  },
  globe: {
    position: "absolute",
    marginTop: Constants.statusBarHeight,
    top: "60%",
    right: "10%",
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 50,
    borderWidth: 0.3,
  },
  bottomView: {
    width: "100%",
    height: "30%",
    backgroundColor: "white",
    padding: 5,
  },
});
