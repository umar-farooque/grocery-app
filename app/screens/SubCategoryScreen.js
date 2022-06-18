import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";

import OfferCard from "../components/OfferCard";
import Seperator from "../components/Seperator";

import { masala, getData } from "../utils/Items";

import listingsApi from "../api/listings";
import useApi from "../hooks/useApi";
import AppText from "../components/AppText";
import LoadingIndicator from "../components/LoadingIndicator";

function SubCategoryScreen({ route }) {
  // let dataApis = {
  //   Category: useApi(listingsApi.getCategoryItem),
  //   BeautyStore: useApi(listingsApi.getBeautyStoreItems),
  //   personal: useApi(listingsApi.getPersonalStoreItem),
  //   Drinks: useApi(listingsApi.getDrinksStoreItem),
  //   Snacks: useApi(listingsApi.getSnackStoreItem),
  //   GourmetStore: useApi(listingsApi.getGourmetStoreItem),
  //   BakeryStore: useApi(listingsApi.getBakeryStoreItem),
  //   cleaning: useApi(listingsApi.getCleaningStoreItem),
  //   // BakeryStore: useApi(listingsApi.getBakeryStoreItem),
  // };
  let [data, setData] = useState([]);
  let { subtitle, Title } = route.params;
  // let getCategoryItem = dataApis[Title];
  // console.log(Title, subtitle, getCategoryItem);
  let renderItem = (item) => (
    <OfferCard
      item={item.item}
      onPress={() => navigation.navigate("detail", { data: item.item })}
    />
  );
  // console.log( getCategoryItem.request(Title));

  useEffect(() => {
    setData(getData(Title, subtitle));
    // getCategoryItem.request(subtitle);
  }, [Title, subtitle]);

  // console.log(getCategoryItem.data);

  return (
    <>
      {/* <LoadingIndicator visible={getCategoryItem.loading} /> */}
      <View style={styles.container}>
        <ScrollView>
          {/* {getCategoryItem.data ? ( */}
          {data ? (
            <FlatList
              data={data}
              keyExtractor={(item, index) => item.toString() + index}
              renderItem={renderItem}
              ItemSeparatorComponent={Seperator}
            />
          ) : (
            <AppText>No data available</AppText>
          )}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SubCategoryScreen;
