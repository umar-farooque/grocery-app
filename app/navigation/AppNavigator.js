import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import AllCategoriesScreen from "../screens/AllCategoriesScreen";
import OffersScreen from "../screens/OffersScreen";
import CartScreen from "../screens/CartScreen";
import SubCategoryScreen from "../screens/SubCategoryScreen";

const Stack = createStackNavigator();

function AppNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen
        name="detail"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AllCategories"
        component={AllCategoriesScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen name="Offers" component={OffersScreen} />
      <Stack.Screen name="cart" component={CartScreen} />
      <Stack.Screen
        name="subcategory"
        component={SubCategoryScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
