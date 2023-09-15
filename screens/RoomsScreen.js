import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { exchangeRate } from "../util/constants";
import Amenities from "../components/Amenities";

const RoomsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Available Rooms",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003588",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);
  
  return (
    <ScrollView>
      {route.params.rooms.map((room, index) => (
        <Pressable key={index} style={styles.containerInfo}>
          <View style={styles.infoContainerStyle}>
            <Text style={styles.InfoTextStyle}>{room.name}</Text>
            <AntDesign name="infocirlceo" size={24} color="#007FFF" />
          </View>
          <Text style={{ marginTop: 3, fontSize: 16  }}>Pay at the property</Text>
          <Text style={{ marginTop: 3, color: "green", fontSize: 16 }}>
            Free cancellation Available
          </Text>
          <View style={styles.priceInforContainer}>
            <Text
              style={{
                fontSize: 18,
                color: "red",
                textDecorationLine: "line-through",
              }}
            >
              {(route.params.oldPrice * exchangeRate).toFixed(2)}€
            </Text>
            <Text style={{ fontSize: 18 }}>
              {(route.params.newPrice * exchangeRate).toFixed(2)}€
            </Text>
          </View>
          <Amenities/>
          <Pressable style={styles.selectContainer}>
              <Text style={styles.selectTextStyle}>SELECT</Text>
          </Pressable>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default RoomsScreen;

const styles = StyleSheet.create({
  containerInfo: {
    margin: 10,
    backgroundColor: "white",
    padding: 10,
  },
  infoContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  InfoTextStyle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#007FFF",
  },
  priceInforContainer: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  selectContainer: {
    padding: 10,
    borderWidth: 2,
    fontSize: 16,
    borderColor: "#007FFF",
  },
  selectTextStyle:{
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
    color: "#007FFF",
  }
});
