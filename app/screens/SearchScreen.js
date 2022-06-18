import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "../components/AppText";
import Customheader from "../components/Customheader";
import SearchHeader from "../components/SearchHeader";
import SearchIndicator from "../components/SearchIndicator";

export default function SearchScreen({ navigation }) {
  let [query, setQuery] = useState("");
  useEffect(() => {
    navigation.setOptions({
      headerTitle: ({ navigation }) => (
        <SearchHeader
          navigation={navigation}
          setter={(text) => setQuery(text)}
        />
      ),
    });
    // console.log(query);
  }, [navigation, query]);

  return (
    <View>
      {query ? (
        <AppText>Search Result For {query}</AppText>
      ) : (
        <View
          style={{
            // backgroundColor: "yellow",
            height: "100%",
            // justifyContent: "center",
          }}
        >
          <SearchIndicator />
          {/* <AppText>Search For products</AppText> */}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
