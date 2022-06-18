import React from "react";
import { TextInput } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { GoogleAutoComplete } from "react-native-google-autocomplete";

export default function GooglePlaceSearch() {
  return (
    <View>
      <Text>search secr</Text>
      <GoogleAutoComplete
        apiKey="AIzaSyDaf__u9h28xb5cqeynjbva5KvpuFBDmdg"
        debounce={300}
      >
        {({ inputValue, handleTextChange, locationResults, fetchDetails }) => (
          <>
            <TextInput
              style={{
                height: 40,
                width: 300,
                borderWidth: 1,
                paddingHorizontal: 16,
              }}
              value={inputValue}
              onChangeText={handleTextChange}
              placeholder="Location..."
            />
            {console.log("Location REsults ====>", locationResults)}
          </>
        )}
      </GoogleAutoComplete>
    </View>
  );
}

const styles = StyleSheet.create({});
//  query={{
//     key: "AIzaSyDaf__u9h28xb5cqeynjbva5KvpuFBDmdg",
//     language: "en",
//   }}
