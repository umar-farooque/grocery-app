import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import AppText from "../components/AppText";
import CartButton from "../components/CartButton";
import colors from "../utils/colors";
import userContext from "../context/user";
export default function ProfileScreen({ navigation }) {
  // let user = useContext(userContext);

  const user = {
    fname: "Umar",
    lname: "Khan",
    email: "fakemail@gmail.com",
    mobile: "9632587412",
    address: "Lorem ipsum dolor sit amet,ate summum bonum poneret.",
  };
  return (
    <View style={styles.container}>
      <View style={styles.data}>
        <View style={styles.topContainer}>
          <View style={styles.icon}>
            <Icon name="user-circle" type="font-awesome" size={60} />
          </View>
          <View style={{ width: "65%", padding: 15 }}>
            <AppText style={{ marginBottom: 5 }}>
              {user.fname} {user.lname}
            </AppText>
            <AppText style={{ marginBottom: 5 }}>{user.email}</AppText>
            <AppText>{user.mobile}</AppText>
          </View>
          <View style={{ width: "10%" }}>
            <Icon
              name="pencil"
              type="ionicon"
              size={20}
              onPress={() =>
                navigation.navigate("EditProfile", {
                  data: {
                    fname: user.fname,
                    lname: user.lname,
                    mobile: user.mobile,
                    email: user.email,
                  },
                })
              }
            />
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={{ width: "10%" }}>
            <Icon
              name="location"
              type="evilicon"
              size={25}
              color={colors.primary}
            />
          </View>
          <View style={{ width: "70%" }}>
            <AppText>{user.address}</AppText>
          </View>
          <View style={{ width: "20%" }}>
            <CartButton
              title="Change"
              onPress={() => navigation.navigate("Addresses")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  data: { backgroundColor: "white", borderRadius: 5, width: "100%" },
  topContainer: {
    flexDirection: "row",
    paddingVertical: 20,
  },
  icon: {
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    padding: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
  },
});
