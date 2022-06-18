import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import AllCategoriesScreen from "../screens/AllCategoriesScreen";
import OffersScreen from "../screens/OffersScreen";
import CartScreen from "../screens/CartScreen";
import SubCategoryScreen from "../screens/SubCategoryScreen";
import Customheader from "../components/Customheader";
import SearchScreen from "../screens/SearchScreen";
import checkoutScreen from "../screens/checkoutScreen";
import GooglePlaceSearch from "../screens/GooglePlaceSearch";
import OrdersScreen from "../screens/OrdersScreen";
import MapViewScreen from "../screens/MapViewScreen";
import AllAdressesScreen from "../screens/AllAdressesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import EditAddressScreen from "../screens/EditAddressScreen";
import PaymentScreen from "../screens/PaymentScreen";

export default function StackNavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: { fontFamily: "Quicksand_600SemiBold" },
      }}
    >
      <Stack.Screen
        name="home"
        component={HomeScreen}
        headerMode="Screen"
        options={{
          header: ({ scene, navigation }) => {
            return <Customheader navigation={navigation} />;
          },
          // headerStyle: { marginBottom: 120 },
        }}
      />
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
      <Stack.Screen
        name="Offers"
        component={OffersScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="cart"
        component={CartScreen}
        options={{ title: "Cart" }}
      />
      <Stack.Screen
        name="subcategory"
        component={SubCategoryScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerTitle: "" }}
      />
      <Stack.Screen name="checkout" component={checkoutScreen} />
      <Stack.Screen name="order" component={OrdersScreen} />
      <Stack.Screen
        name="map"
        component={MapViewScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="google" component={GooglePlaceSearch} />
      <Stack.Screen name="Addresses" component={AllAdressesScreen} />
      <Stack.Screen
        name="profile"
        component={ProfileScreen}
        options={{ title: "My Profile" }}
      />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="EditAddress" component={EditAddressScreen} />
      <Stack.Screen name="payment" component={PaymentScreen} />
    </Stack.Navigator>
  );
}
