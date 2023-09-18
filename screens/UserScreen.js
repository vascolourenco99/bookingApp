import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Alert
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { exchangeRate } from "../util/constants";

const UserScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const finalStep = () => {
    if (!firstName || !lastName || !email || !phoneNumber) {
      Alert.alert("Invalide Details", "Please enter the fields", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }

    if (firstName && lastName && email && phoneNumber) {
      navigation.navigate("Confirmation", {
        oldPrice: route.params.oldPrice,
        newPrice: route.params.newPrice,
        name: route.params.name,
        children: route.params.children,
        adults: route.params.adults,
        rating: route.params.rating,
        startDate: route.params.startDate,
        endDate: route.params.endDate,
      });
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "User Details",
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
      <View style={{ padding: 20 }}>
        <View style={styles.containerInput}>
          <Text>First Name</Text>
          <TextInput
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            style={styles.inputStyle}
          ></TextInput>
        </View>
        <View style={styles.containerInput}>
          <Text>Last Name</Text>
          <TextInput
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            style={styles.inputStyle}
          ></TextInput>
        </View>
        <View style={styles.containerInput}>
          <Text>Email</Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.inputStyle}
          ></TextInput>
        </View>
        <View style={styles.containerInput}>
          <Text>Phone Number</Text>
          <TextInput
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            style={styles.inputStyle}
          ></TextInput>
        </View>
      </View>
      <Pressable
        style={{
          backgroundColor: "white",
          marginTop: "auto",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 40,
          padding: 20,
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
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
          <Text>
            You saved{" "}
            {(
              route.params.oldPrice * route.params.adults * exchangeRate -
              route.params.newPrice * route.params.adults * exchangeRate
            ).toFixed(2)}
            €
          </Text>
        </View>
        <Pressable
          onPress={finalStep}
          style={{ backgroundColor: "#007FFF", padding: 10, borderRadius: 5 }}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 15 }}>
            Final Step
          </Text>
        </Pressable>
      </Pressable>
    </>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  containerInput: {
    flexDirection: "column",
    gap: 10,
  },
  inputStyle: {
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
});
