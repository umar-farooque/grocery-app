import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import StackNavigation from "./StackNavigation";
import CustomDrawerScreen from "../screens/CustomDrawerScreen";
import { useNavigation } from "@react-navigation/core";

const Drawer = createDrawerNavigator();
function AppNavigator(props) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerScreen {...props} />}
    >
      <Drawer.Screen name="Home" component={StackNavigation} />
    </Drawer.Navigator>
  );
}

export default AppNavigator;
