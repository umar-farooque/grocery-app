import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import ShoppingCartContext from "./app/context/ShoppingCart";

export default function App() {
  let [cart, setCart] = useState({ items: [] });

  let handleAddItems = (item) => {
    // ++item.count;
    // console.log("added to cart before ---->", item);
    item.count += 1;
    item.addedToCart = true;
    setCart({ items: [...cart.items, item] });
    // setCart((prevState) => ({ items: [...prevState.items, item] }));
  };

  let handleDeleteItems = (item) => {
    item.addedToCart = false;
    item.count = 0;
    console.log("item---->", item);
    let deletedItem = cart.items.filter((i) => i.id !== item.id);
    console.log("deleted------>", deletedItem);
    setCart({ items: deletedItem });
  };

  let handleIncrease = (item) => {
    let items = [...cart.items];
    let index = items.indexOf(item);
    items[index].count += 1;

    setCart({ items });

    // console.log("handleIncrease------", newItem);
  };
  let handleDecrease = (item) => {
    let items = [...cart.items];
    let index = items.indexOf(item);
    // console.log(items[index].count);
    if (items[index].count == 1) {
      handleDeleteItems(item);
      return;
    }

    items[index].count -= 1;
    setCart({ items });
  };

  let handleUpdateQuantity = (item, quantity, value) => {
    // console.log("before---------->", item.quantity);
    let items = [...cart.items];
    let index = items.indexOf(item);
    if (index != -1) {
      let newItem = items[index];
      newItem.quantity = quantity;
      newItem.price = value;
      setCart({ items });
      // console.log("after---------->", item.quantity, item.price);
      return;
    }
    console.log("not found");
    return;
  };
  let add = (a, b) => a + parseInt(b.price * b.count);
  let handleTotal = (coupon = null) => {
    let sum = cart.items.reduce(add, 0);
    console.log(sum);
    return sum;
  };
  // console.log("appCArt--+-----+--->", cart.items);
  return (
    <ShoppingCartContext.Provider
      value={{
        items: cart.items,
        addItems: handleAddItems,
        deleteItem: handleDeleteItems,
        increaseCount: handleIncrease,
        decreaseCount: handleDecrease,
        updateQuantity: handleUpdateQuantity,
        getTotal: handleTotal,
      }}
    >
      <NavigationContainer>
        <StatusBar style="auto" backgroundColor="white" />
        <AppNavigator />
      </NavigationContainer>
    </ShoppingCartContext.Provider>
  );
}
