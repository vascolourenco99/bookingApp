import { View, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import SearchResults from "../components/SearchResults";
import { data } from "../db/data";

const SearchScreen = () => {
  const [input, setInput] = useState("");

  return (
    <SafeAreaView style={{ marginTop: 20 }}>
      <View
        style={ styles.placeholderStyle }
      >
        <TextInput
          value={input}
          onChangeText={(text) => setInput(text)}
          placeholder="Enter Your Destination"
        />
        <AntDesign name="search1" size={22} color="black" />
      </View>

      <SearchResults data={data} input={input} setInput={setInput} />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  placeholderStyle: {
    padding: 10,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#FFC72C",
    borderWidth: 4,
    borderRadius: 10,
  }
});
