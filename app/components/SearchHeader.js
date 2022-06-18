import React, { useState, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

import { SearchBar } from "react-native-elements";
const SearchHeader = ({ navigation, setter }) => {
  const [query, setQuery] = useState("");
  const handleChangeText = (text) => {
    setQuery(text);
    setter(text);
  };
  const ref = useRef();
  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <SearchBar
          ref={ref}
          autoFocus
          searchIcon={false}
          placeholder="Search For Products  ....."
          value={query}
          onChangeText={handleChangeText}
          onEndEditing={() => setter(query)}
          //   onClear={() => ref.current.blur()}
          containerStyle={styles.containerStyle}
          inputStyle={{ backgroundColor: "white" }}
          inputContainerStyle={{ backgroundColor: "white" }}
        />
      </View>
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  containerStyle: {
    padding: 0,
    width: "98%",
    backgroundColor: "white",
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  container: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%",
    // backgroundColor: "red",
    justifyContent: "center",
    // marginTop: 10,
    alignItems: "center",
    // justifyContent: "flex-start",
    alignItems: "center",
  },
});
