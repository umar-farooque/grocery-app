import { useNavigation } from "@react-navigation/core";
import React, { useState, useContext } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import Constants from "expo-constants";
import AppText from "../components/AppText";
import CartButton from "../components/CartButton";
import CartButtonGroup from "../components/CartButtonGroup";
import colors from "../utils/colors";
import ShoppingCartContext from "../context/ShoppingCart";

export default function DetailScreen({ route }) {
  const {
    availableQuantity,
    source,
    title,
    price,
    quantity,
    id,
    count,
    addedToCart,
    company,
  } = route.params.data;
  let { itemAdded, updatedPrice, updatedQuantity } = route.params;
  const navigation = useNavigation();
  let item = route.params.data;
  // console.log("DEtail Screen", item);
  let [selectedQuantity, setSelectedQuantity] = useState(
    updatedQuantity ? updatedQuantity : quantity
  );
  let [updatedprice, setUpdatedprice] = useState(
    updatedPrice ? updatedPrice : price
  );
  let context = useContext(ShoppingCartContext);
  // console.log("------>", route.params);
  let renderStyle = (item) => {
    if (addedToCart) {
      // console.log("Adding inside");
      return quantity == item.item.quantity
        ? styles.selectedQuantityContainer
        : styles.quantityContainer;
    }
    return selectedQuantity == item.item.quantity
      ? styles.selectedQuantityContainer
      : styles.quantityContainer;
  };
  let renderText = (item) => {
    if (addedToCart) {
      return quantity == item.item.quantity
        ? styles.selectedQuantityText
        : styles.quantityText;
    }
    return selectedQuantity == item.item.quantity
      ? styles.selectedQuantityText
      : styles.quantityText;
  };

  let renderItem = (item) => (
    <TouchableWithoutFeedback
      onPress={() => {
        if (!addedToCart) {
          setSelectedQuantity(item.item.quantity);
          setUpdatedprice(item.item.price);
        } else {
          context.updateQuantity(
            route.params.data,
            item.item.quantity,
            item.item.price
          );
        }
      }}
    >
      <View style={renderStyle(item)}>
        <AppText style={renderText(item)}>{item.item.quantity}</AppText>
      </View>
    </TouchableWithoutFeedback>
  );

  let handlePlus = () => context.increaseCount(item);

  let handleMinus = () => {
    if (count == 1) {
      // context.decreaseCount(item);
      return null;
    }
    context.decreaseCount(item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={source.url ? { uri: source.url } : source}
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
        />
      </View>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentStyle}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.details}>
          <View styles={{}}>
            <AppText style={styles.companyText}>{company}</AppText>
            <AppText
              style={{ marginVertical: 5, fontFamily: "Quicksand_700Bold" }}
            >
              {title}
            </AppText>
            <View style={styles.priceContainer}>
              <View style={styles.priceContainer}>
                <Icon
                  name="rupee"
                  color={colors.primary1}
                  type="font-awesome"
                  size={14}
                  iconStyle={styles.iconStyle}
                />
                <AppText style={styles.price}>
                  {addedToCart ? price : updatedprice}
                </AppText>
              </View>
            </View>
            <View style={styles.countContainer}>
              <>
                {addedToCart && (
                  <>
                    <AppText
                      style={{
                        marginBottom: 15,
                        fontFamily: "Quicksand_700Bold",
                      }}
                    >
                      Qty :
                    </AppText>
                    <CartButtonGroup
                      onPressPlus={handlePlus}
                      onPressMinus={handleMinus}
                      value={count ? count : 1}
                    />
                  </>
                )}
              </>
            </View>
          </View>
          <View>
            {availableQuantity && availableQuantity.length > 0 ? (
              <>
                <AppText
                  style={{
                    fontFamily: "Quicksand_700Bold",
                    marginVertical: 10,
                  }}
                >
                  Also Available in :
                </AppText>
                <FlatList
                  data={availableQuantity}
                  keyExtractor={(item) => item.quantity}
                  horizontal
                  renderItem={renderItem}
                  showsHorizontalScrollIndicator={false}
                />
              </>
            ) : (
              <AppText style={{ color: colors.primary }}>{quantity}</AppText>
            )}
          </View>
          <View style={{ marginTop: 15 }}>
            <AppText style={{ fontFamily: "Quicksand_700Bold" }}>
              About Product
            </AppText>
            <AppText style={{ marginTop: 5 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erit enim
              instructus.
            </AppText>
          </View>
          <View style={styles.buttonContainer}>
            {!addedToCart ? (
              <View style={{ width: "85%" }}>
                <CartButton
                  title={"Add To Cart"}
                  style={styles.cartButton}
                  titleStyle={{
                    color: "white",
                    fontFamily: "Quicksand_700Bold",
                  }}
                  onPress={
                    () => itemAdded(item, updatedprice, selectedQuantity)
                    // context.addItems(item, updatedprice, selectedQuantity)
                  }
                />
              </View>
            ) : (
              <View style={{ width: "85%" }}>
                <CartButton
                  title={"Go To Cart"}
                  style={styles.cartButton}
                  titleStyle={{
                    color: "white",
                    fontFamily: "Quicksand_700Bold",
                  }}
                  onPress={() => navigation.navigate("cart")}
                />
              </View>
            )}
          </View>
        </View>
      </ScrollView>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-with-circle-left"
            color="white"
            type="entypo"
            size={30}
            containerStyle={{ justifyContent: "center", alignItems: "center" }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.cartContainer}>
        <TouchableOpacity
          style={styles.cartIcon}
          onPress={() => navigation.navigate("cart")}
        >
          <Icon name="shoppingcart" color="white" type="antdesign" size={23} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: Constants.statusBarHeight,
  },
  companyText: {
    fontWeight: "600",
    color: colors.secondary,
    marginVertical: 10,
  },
  cartButton: {
    padding: 12,
    backgroundColor: colors.primary,
    borderWidth: 0,
  },
  priceContainer: {
    flexDirection: "row",
    marginVertical: 5,
    alignItems: "center",
  },
  priceContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  cartIcon: {
    padding: 3,
    borderRadius: 50,
    borderWidth: 1.5,
    overflow: "hidden",
    borderColor: "white",
  },
  price: {
    fontFamily: "Quicksand_700Bold",
    color: colors.primary1,
  },
  iconStyle: {
    marginTop: 4,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    height: "35%",
    width: "100%",
    backgroundColor: "white",
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    padding: 15,
  },
  countContainer: {
    width: "30%",
  },
  buttonContainer: {
    marginTop: 10,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  details: {
    flex: 1,
    borderRadius: 25,
    backgroundColor: "white",
    padding: 20,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 20,
  },
  contentStyle: {
    paddingBottom: "5%",
    paddingHorizontal: 5,
    paddingTop: 10,
  },
  iconContainer: {
    position: "absolute",
    top: "3%",
    left: 25,
    padding: 2,
    borderRadius: 50,
    backgroundColor: colors.primary1,
    justifyContent: "center",
    alignItems: "center",
  },
  cartContainer: {
    position: "absolute",
    top: "3%",
    right: 25,
    padding: 2,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary1,
  },
  quantityContainer: {
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    width: 75,
  },
  selectedQuantityContainer: {
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    width: 75,
    borderColor: colors.primary1,
  },
  selectedQuantityText: { color: colors.primary1 },
  quantityText: { color: "#000" },
});

{
  /* <View style={{ marginLeft: 15, flexDirection: "row" }}>
  <Icon
    name="rupee"
    color={colors.secondary}
    type="font-awesome"
    size={15}
    iconStyle={{
      marginTop: 3,
      justifyContent: "center",
      alignItems: "center",
      textDecorationLine: "line-through",
    }}
  />
  <AppText
    style={{
      color: colors.secondary,
      textDecorationLine: "line-through",
    }}
  >
    300
  </AppText>
</View> */
}
