import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { pixelNormalize } from "../components/ResponsivePhotos";
import { MaterialIcons } from "@expo/vector-icons";
import GeniusCard from "../components/GeniusCard";
import TravelCard from "../components/TravelCard";
import { exchangeRate } from "../util/constants";
import Amenities from "../components/Amenities";

const PropertyInfoScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const difference = route.params.oldPrice - route.params.newPrice;
  const offerPrice = (Math.abs(difference) / route.params.oldPrice) * 100;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `${route.params.name}`,
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
    <SafeAreaView>
      <ScrollView>
        <Pressable style={styles.imageContainer}>
          {route.params.photos.slice(0, 5).map((photo, index) => (
            <View key={index} style={{ margin: 6 }}>
              <Image style={styles.image} source={{ uri: photo.image }} />
            </View>
          ))}
          <Pressable style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ marginLeft: 20 }}>Show More</Text>
          </Pressable>

          <View
            style={{
              marginHorizontal: 12,
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                {route.params.name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 8,
                }}
              >
                <MaterialIcons name="stars" size={24} color="green" />
                <Text>{route.params.rating}</Text>
                <GeniusCard />
                <TravelCard />
              </View>
            </View>
          </View>
        </Pressable>
        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        />
        <Text
          style={{
            marginTop: 10,
            fontSize: 17,
            fontWeight: "500",
            marginHorizontal: 12,
          }}
        >
          Price for 1 Night and {route.params.adults} adults
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 12,
            marginTop: 4,
            gap: 8,
          }}
        >
          <Text
            style={{
              color: "red",
              fontSize: 20,
              textDecorationLine: "line-through",
            }}
          >
            {(
              route.params.oldPrice *
              route.params.adults *
              exchangeRate
            ).toFixed(2)}
            €
          </Text>
          <Text style={{ fontSize: 20 }}>
            {(
              route.params.newPrice *
              route.params.adults *
              exchangeRate
            ).toFixed(2)}
            €
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 12,
            marginTop: 7,
            backgroundColor: "green",
            paddingHorizontal: 4,
            paddingVertical: 5,
            width: 70,
            borderRadius: 4,
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            {offerPrice.toFixed(0)}% OFF
          </Text>
        </View>

        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        />

        <View
          style={{
            margin: 12,
            flexDirection: "row",
            alignItems: "center",
            gap: 60,
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
              Check In:
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
            >
              {route.params.selectedDates.startDate}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
              Check Out:
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
            >
              {route.params.selectedDates.endDate}
            </Text>
          </View>
        </View>

        <View style={{ marginLeft: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
            Rooms and Guests:
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}>
            {route.params.rooms} rooms {route.params.adults} adults{" "}
            {route.params.children} children
          </Text>
        </View>

        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        />
        <Amenities />

        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        />
      </ScrollView>
      <Pressable
      onPress={() => navigation.navigate("Rooms", {
        rooms:route.params.availableRooms,
        oldPrice:route.params.oldPrice,
        newPrice:route.params.newPrice,
        name:route.params.name,
        children:route.params.children,
        adults:route.params.adults,
        rating:route.params.rating,
        startDate:route.params.selectedDates.startDate,
        endDate:route.params.selectedDates.endDate,
      })}
      style={styles.buttonAvailability}>
        <Text style={styles.buttonText}>Select Availabity</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default PropertyInfoScreen;

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: pixelNormalize(80),
    borderRadius: pixelNormalize(4),
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 6,
  },
  buttonAvailability: {
    backgroundColor: "#6CB4EE",
    position: "absolute",
    bottom: 20,
    padding: 15,
    width: "100%"
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
});
