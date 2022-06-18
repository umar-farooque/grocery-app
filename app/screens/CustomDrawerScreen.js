import React, { useContext } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import colors from "../utils/colors";
import AppText from "../components/AppText";
import userContext from "../context/user";
import Constants from "expo-constants";
import { TouchableOpacity } from "react-native";
function CustomDrawerScreen(props) {
  //
  let user = useContext(userContext);
  // console.log("user DEtails :", user);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={{ padding: 15, backgroundColor: colors.primary }}>
          <AppText style={{ color: "white" }}>
            Hello {user.user.fname ? user.user.fname : "user"} !
          </AppText>
        </View>
        <>
          {user.user.address ? (
            <View style={styles.topContainer}>
              <View style={styles.icon}>
                <Icon name="location" color="black" type="evilicon" size={30} />
              </View>
              <View style={{ width: "70%" }}>
                <AppText style={{ color: "black", textAlign: "left" }}>
                  {user.user.address}
                </AppText>
              </View>
              <TouchableWithoutFeedback
                onPress={() => props.navigation.navigate("map")}
              >
                <View style={styles.icon}>
                  <Icon
                    name="pencil"
                    type="evilicon"
                    size={35}
                    color="black"
                    onPress={() => props.navigation.navigate("map")}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
          ) : null}
        </>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="home-outline"
              color={color}
              size={size}
              type="ionicon"
            />
          )}
          label="Home"
          labelStyle={styles.label}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="gift-outline"
              color={color}
              size={size}
              type="ionicon"
            />
          )}
          label="Orders"
          labelStyle={styles.label}
          onPress={() => props.navigation.navigate("order")}
        />

        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="user" color={color} size={size} type="antdesign" />
          )}
          label="My Profile"
          // labelStyle={{ fontSize: 20 }}
          labelStyle={styles.label}
          onPress={() => props.navigation.navigate("profile")}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="medicinebox"
              color={color}
              size={size}
              type="antdesign"
            />
          )}
          // labelStyle={{ fontSize: 20 }}
          label="Products"
          labelStyle={styles.label}
          onPress={() => {}}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="log-out-outline"
              color={color}
              size={30}
              type="ionicon"
            />
          )}
          // labelStyle={{ fontSize: 15 }}
          label="Sign Out"
          labelStyle={styles.label}
          onPress={() => {}}
        />
      </DrawerContentScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    // height: "18%",
    // padding: 10,
    width: "100%",
    // backgroundColor: "yellow",
    top: Constants.statusBarHeight,
    // justifyContent: "flex-end",
  },
  label: { fontFamily: "Quicksand_700Bold" },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 5,
    width: "100%",
  },
  icon: {
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomDrawerScreen;
