import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { services } from "../db/services";

const Amenities = () => {
  return (
    <View style={styles.containerAmentites}>
      <Text style={styles.title}>Most Popular Facilities</Text>
      <View style={styles.facilitiesContainer}>
        {services.map((item, index) => (
            <View key={index} style={styles.facilitesStyle}>
                <Text style={{color:"white", fontWeight:"bold"}}>{item.name}</Text>
            </View>
        ))}
      </View>
    </View>
  );
};

export default Amenities;

const styles = StyleSheet.create({
  containerAmentites: {
    padding: 10,
  },
  title: {
    fontWeight: "600",
    fontSize: 17,
  },
  facilitesStyle: {
    margin: 10,
    backgroundColor: "#007FFF",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 25,
  },
  facilitiesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  }
});
