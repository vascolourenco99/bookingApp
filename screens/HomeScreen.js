import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  Button,
} from "react-native";
import DatePicker from "react-native-date-ranges";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking.com",
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
      headerRight: () => (
        <Ionicons
          name="notifications-circle-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);

  const customButton = (onConfirm) => {
    return (
      <Button
        style={styles.buttonContainer}
        onPress={onConfirm}
        title="Submit"
      />
    );
  };

  return (
    <>
      <View>
        <Header />

        <ScrollView>
          <View style={styles.container}>
            {/* Destination */}
            <Pressable style={styles.pressableContainer}>
              <FontAwesome name="search" size={24} color="black" />
              <TextInput
                placeholderTextColor="black"
                placeholder="Enter your Destination"
              />
            </Pressable>

            {/* Selected Dates */}
            <Pressable style={styles.pressableContainer}>
              <FontAwesome name="calendar" size={24} color="black" />
              <DatePicker
                style={{
                  width: 350,
                  height: 30,
                  borderRadius: 0,
                  borderWidth: 0,
                  borderColor: "transparent",
                }}
                customStyles={{
                  placeholderText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                  headerStyle: {
                    backgroundColor: "#003580",
                  },
                  contentText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                }}
                selectedBgColor="#0047AB"
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(starDate, endDate) =>
                  setSelectedDates(starDate, endDate)
                }
                allowFontScaling={false}
                placeholder={"Apr 27, 2018 → Jul 10, 2018"}
                mode={"range"}
              />
            </Pressable>

            {/* Rooms and Guests */}
            <Pressable
              style={styles.pressableContainer}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Ionicons name="person" size={24} color="black" />
              <TextInput
                placeholderTextColor="red"
                placeholder="1 room / 2 adults / 0 Children"
              />
            </Pressable>

            {/* Search Button */}
            <Pressable style={styles.pressableContainerButton}>
              <Text style={styles.searchButton}>Search Button</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>

      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={{
                marginBottom: 20,
                color: "white",
                backgroundColor: "#003580",
              }}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select rooms and guests" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 310 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize:16, fontWeight:"500" }} >Rooms</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Pressable>
                <Text>{rooms}</Text>
              </Pressable>
              <Pressable
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderColor: "#FFC72C",
    borderWidth: 3,
    borderRadius: 6,
  },
  pressableContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    borderColor: "#FFC72C",
    borderWidth: 2,
    paddingVertical: 15,
  },
  pressableContainerButton: {
    paddingHorizontal: 10,
    borderColor: "#FFC72C",
    borderWidth: 2,
    paddingVertical: 15,
    backgroundColor: "#2a52be",
  },
  searchButton: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
    color: "white",
  },
  buttonContainer: {
    container: { width: "80%", marginHorizontal: "3%" },
    text: { fontSize: 20 },
  },
});
