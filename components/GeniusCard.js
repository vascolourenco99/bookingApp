import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GeniusCard = () => {
  return (
    <View
      style={{
        backgroundColor: "#6CB4EE",
        paddingVertical: 4,
        borderRadius: 5,
        width: 100,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 15,
        }}
      >
        Genius Level
      </Text>
    </View>
  );
};

export default GeniusCard;

