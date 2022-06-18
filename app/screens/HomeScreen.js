import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import CategoryComponent from "../components/CategoryComponent";
import GridComponent from "../components/GridComponent";
import ItemComponent from "../components/ItemComponent";
import FocusAwareStatusBar from "../components/FocusedAwareStatusBar";
import listingsApi from "../api/listings";
import useApi from "../hooks/useApi";

import colors from "../utils/colors";
import LoadingIndicator from "../components/LoadingIndicator";

import {
  BeautyStore,
  Grains,
  bakery,
  brands,
  personal,
  Snacks,
  cleaning,
  GourmetStore,
  Drinks,
} from "../utils/data";

import {
  masala,
  topSelling,
  topDeals,
  readyToBake,
  household,
  hairCare,
  skinCare,
} from "../utils/Items";

const HomeScreen = ({ navigation }) => {
  let [loading, setLoading] = useState(false);

  // let getCategory = useApi(listingsApi.getCategory);
  // let getTopSelling = useApi(listingsApi.getTopSelling);
  // let getTopDeals = useApi(listingsApi.getTopDeals);
  // let getBeautyStore = useApi(listingsApi.getBeautyStore);
  // let getSkinCareDeals = useApi(listingsApi.getSkinCareDeals);
  // let getPersonalStore = useApi(listingsApi.getPersonalStore);
  // let getHairCareDeals = useApi(listingsApi.getHairCareDeals);
  // let getDrinksStore = useApi(listingsApi.getDrinksStore);
  // let getBakeryDeals = useApi(listingsApi.getBakeryDeals);
  // let getSnackStore = useApi(listingsApi.getSnackStore);
  // let getGourmetStore = useApi(listingsApi.getGourmetStore);
  // let getBakeryStore = useApi(listingsApi.getBakeryStore);
  // let getHouseHoldDeals = useApi(listingsApi.getHouseHoldDeals);
  // let getCleaningStore = useApi(listingsApi.getCleaningStore);
  // let getBrands = useApi(listingsApi.getBrands);

  useEffect(() => {
    setLoading(true);
    let timer = setTimeout(() => setLoading(false), 5000);
    // clearTimeout(timer);
  }, []);
  // useEffect(() => {
  //   console.log("Execution started");
  //   var startTime = new Date().getTime();
  //   // setLoading(true);
  //   getCategory.request();
  //   getTopSelling.request();
  //   getTopDeals.request();
  //   getBeautyStore.request();
  //   getSkinCareDeals.request();
  //   getPersonalStore.request();
  //   getHairCareDeals.request();
  //   getDrinksStore.request();
  //   getBakeryDeals.request();
  //   getSnackStore.request();
  //   getGourmetStore.request();
  //   getBakeryStore.request();
  //   getHouseHoldDeals.request();
  //   getCleaningStore.request();
  //   getBrands.request();
  //   // setLoading(false);
  //   var endTime = new Date().getTime();
  //   console.log("Execution completed");
  //   var timeDiff = endTime - startTime; //in ms
  //   console.log("Total Time in ms =========>", timeDiff);
  //   timeDiff /= 1000;
  //   console.log("Total Time  in seconds =========>", timeDiff);
  // }, []);

  let handleTextPress = (title, data, onPressTitle) =>
    navigation.navigate("AllCategories", {
      title,
      data,
      onPressTitle,
    });

  // let loading =
  //   getCategory.loading ||
  //   getTopSelling.loading ||
  //   getTopDeals.loading ||
  //   getBeautyStore.loading ||
  //   getSkinCareDeals.loading ||
  //   getPersonalStore.loading ||
  //   getHairCareDeals.loading ||
  //   getDrinksStore.loading ||
  //   getBakeryDeals.loading ||
  //   getSnackStore.loading ||
  //   getGourmetStore.loading ||
  //   getBakeryStore.loading ||
  //   getHouseHoldDeals.loading ||
  //   getCleaningStore.loading ||
  //   getBrands.loading;
  // console.log(getCategory.data);

  return (
    <>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={colors.primary}
      />
      <LoadingIndicator visible={loading} />
      <ScrollView
        style={styles.container}
        // contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={styles.categoryContainer}>
          <CategoryComponent
            // data={getCategory.data}
            data={Grains}
            title="Categories"
            // onPressTitle="Category"
            onPressTitle="Grains"
            onTextPress={() =>
              // handleTextPress("Categories", getCategory.data, "Category")
              handleTextPress("Categories", Grains, "Grains")
            }
          />
        </View>
        <ItemComponent
          key={1}
          // data={getTopSelling.data}
          data={topSelling}
          title="Top Selling"
          onPress={() =>
            navigation.navigate("Offers", {
              // data: getTopSelling.data,
              data: topSelling,
              title: "Top Selling",
            })
          }
        />

        <ItemComponent
          key={2}
          // data={getTopDeals.data}
          data={topDeals}
          title="Top Deals"
          onPress={() =>
            navigation.navigate("Offers", {
              // data: getTopDeals.data,
              data: topSelling,
              title: "Top Deals",
            })
          }
        />

        <GridComponent
          // data={getBeautyStore.data.slice(0, 4)}
          data={BeautyStore}
          title="Beauty Store"
          onTextPress={() =>
            handleTextPress("Beauty Store", BeautyStore, "BeautyStore")
          }
          onPressTitle="BeautyStore"
        />

        <ItemComponent
          key={3}
          // data={getSkinCareDeals.data}
          data={skinCare}
          title="Skin Care Deals"
          onPress={() =>
            navigation.navigate("Offers", {
              // data: getSkinCareDeals.data,
              data: skinCare,
              title: "Skin care Deals",
            })
          }
        />

        <GridComponent
          // data={getPersonalStore.data.slice(0, 4)}
          data={personal}
          title="Personal Care"
          onPressTitle="personal"
          onTextPress={() =>
            handleTextPress("Personal Care", personal, "personal")
          }
        />

        <ItemComponent
          key={4}
          // data={getHairCareDeals.data}
          data={hairCare}
          title="Hair Care Deals"
          onPress={() =>
            navigation.navigate("Offers", {
              // data: getHairCareDeals.data,
              data: hairCare,
              title: "Hair Care Deals",
            })
          }
        />

        <GridComponent
          // data={getDrinksStore.data.slice(0, 4)}
          data={Drinks}
          title="Drinks & Beverages"
          onPressTitle="Drinks"
          onTextPress={() =>
            handleTextPress("Drinks & Beverages", Drinks, "Drinks")
          }
        />

        <ItemComponent
          key={5}
          // data={getBakeryDeals.data}
          data={readyToBake}
          title="bakery"
          onPress={() =>
            navigation.navigate("Offers", {
              // data: getBakeryDeals.data,
              data: readyToBake,
              title: "Ready To Bake",
            })
          }
        />

        <GridComponent
          // data={getSnackStore.data.slice(0, 4)}
          data={Snacks}
          title="Snacks Store"
          onPressTitle="Snacks"
          onTextPress={() => handleTextPress("Snacks Store", Snacks, "Snacks")}
        />

        <GridComponent
          // data={getGourmetStore.data.slice(0, 4)}
          data={GourmetStore}
          title="The Gourmet Store"
          onPressTitle="GourmetStore"
          onTextPress={() =>
            handleTextPress(
              "The Gourmet Store",
              // getGourmetStore.data,
              GourmetStore,
              "GourmetStore"
            )
          }
        />

        <GridComponent
          // data={getBakeryStore.data.slice(0, 4)}
          data={bakery}
          title="Bakery Store"
          onPressTitle="BakeryStore"
          onTextPress={() => handleTextPress("Bakery Store", bakery, "bakery")}
        />

        <ItemComponent
          key={6}
          // data={getHouseHoldDeals.data}
          data={household}
          title="Household Deals"
          onPressTitle="household"
          onPress={() =>
            navigation.navigate("Offers", {
              // data: getHouseHoldDeals.data,
              data: household,
              title: "Household Deals",
            })
          }
        />

        <GridComponent
          // data={getCleaningStore.data.slice(0, 4)}
          data={cleaning}
          title="Cleaning & Household"
          onPressTitle="cleaning"
          onTextPress={() =>
            handleTextPress(
              "Cleaning & Household",
              // getCleaningStore.data,
              cleaning,
              "cleaning"
            )
          }
        />

        {/* <GridComponent
          // data={getBrands.data.slice(0, 4)}
          data={brands}
          title="Shop By Brands"
          // onPressTitle="BeautyStore"
          // onTextPress={() => handleTextPress("Shop By Brands", brands)}
        /> */}
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    // marginTop: "10%",
    // backgroundColor: "yellow",
    // marginBottom: ,
  },
  categoryContainer: {
    marginVertical: 10,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "#fff",
    // backgroundColor: "#D6EAF8",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    // textAlign: "center",
    textTransform: "capitalize",
    marginVertical: 5,
  },
});
