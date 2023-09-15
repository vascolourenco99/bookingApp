import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React, { useState, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { exchangeRate } from "../util/constants";
import Amenities from "../components/Amenities";

const RoomsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [selected, setSelected] = useState([]);

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
    <>
      <ScrollView>
        {route.params.rooms.map((room, index) => (
          <Pressable key={index} style={styles.containerInfo}>
            <View style={styles.infoContainerStyle}>
              <Text style={styles.InfoTextStyle}>{room.name}</Text>
              <AntDesign name="infocirlceo" size={24} color="#007FFF" />
            </View>
            <Text style={{ marginTop: 3, fontSize: 16 }}>
              Pay at the property
            </Text>
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
            <Amenities />

            {selected.includes(room.name) ? (
              <Pressable style={styles.selectedContainer}>
                <Text style={styles.selectedTextStyle}>SELECTED</Text>
                <Entypo
                  onPress={() => setSelected([])}
                  name="circle-with-cross"
                  size={24}
                  color="red"
                />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => setSelected(room.name)}
                style={styles.selectContainer}
              >
                <Text style={styles.selectTextStyle}>SELECT</Text>
              </Pressable>
            )}
          </Pressable>
        ))}
      </ScrollView>

      {selected.length > 0 ? (
        <Pressable
          onPress={() => navigation.navigate("User", {
            oldPrice: route.params.oldPrice,
            newPrice: route.params.newPrice,
            name: route.params.name,
            children: route.params.children,
            adults: route.params.adults,
            rating: route.params.rating,
            startDate: route.params.startDate,
            endDate: route.params.endDate,
          })}
          style={styles.reserveButton}
        >
          <Text style={styles.reserveButtonTextStyle}>Reserved</Text>
        </Pressable>
      ) : null}
    </>
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
  selectTextStyle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
    color: "#007FFF",
  },
  selectedContainer: {
    borderColor: "#318CE7",
    backgroundColor: "F0F8FF",
    borderWidth: 2,
    width: "100%",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  selectedTextStyle: {
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    color: "#318CE7",
    fontWeight: "bold",
    fontSize: 16,
  },
  reserveButton: {
    backgroundColor: "#007FFF",
    padding: 10,
    marginBottom: 30,
    borderRadius: 3,
    marginHorizontal: 20,
    height: 50,
  },
  reserveButtonTextStyle: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
