import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";

import { Octicons, FontAwesome, Entypo, Ionicons } from "@expo/vector-icons";

import PropertyCard from "../components/PropertyCard";
import {
  BottomModal,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";

import { data } from "../db/data";
import { filters } from "../db/filters";

import { compare, comparision } from "../util/functions";

const PlacesScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [sortedData, setSortedData] = useState(data);

  const searchPlaces = data?.filter(
    (item) => item.place === route.params.place
  );

  const applyFilter = (filter) => {
    setModalVisible(false);
    switch (filter) {
      case "cost:High to Low":
        searchPlaces.map((val) => val.properties.sort(compare));
        setSortedData(searchPlaces);
        break;
      case "cost:Low to High":
        searchPlaces.map((val) => val.properties.sort(comparision));
        setSortedData(searchPlaces);
        break;
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Popular Places",
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
    <View>
      <Pressable style={styles.optionsContainer}>
        <Pressable
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.optionsPositions}
        >
          <Octicons name="arrow-switch" size={22} color="gray" />
          <Text style={styles.optionsStyle}>Sort</Text>
        </Pressable>

        <Pressable style={styles.optionsPositions}>
          <Ionicons name="filter" size={22} color="gray" />
          <Text style={styles.optionsStyle}>Filter</Text>
        </Pressable>

        <Pressable
          onPress={() =>
            navigation.navigate("Map", {
              searchPlaces: searchPlaces,
            })
          }
          style={styles.optionsPositions}
        >
          <Entypo name="map" size={22} color="gray" />
          <Text style={styles.optionsStyle}>Map</Text>
        </Pressable>
      </Pressable>

      <ScrollView style={{ backgroundColor: "#F5F5F5" }}>
        {sortedData
          ?.filter((item) => item.place === route.params.place)
          .map((item) =>
            item.properties.map((property, index) => (
              <PropertyCard
                key={index}
                rooms={route.params.rooms}
                children={route.params.children}
                adults={route.params.adults}
                selectedDates={route.params.selectedDates}
                property={property}
                availableRooms={property.rooms}
              />
            ))
          )}
      </ScrollView>

      <BottomModal
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        footer={
          <ModalFooter>
            <Pressable
              onPress={() => applyFilter(selectedFilter)}
              style={styles.footerSize}
            >
              <Text>Apply</Text>
            </Pressable>
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Sort and Filter" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 280 }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                marginVertical: 10,
                flex: 2,
                height: 280,
                borderRightWidth: 1,
                borderColor: "#E0E0E0",
              }}
            >
              <Text style={{ textAlign: "center" }}>Sort</Text>
            </View>

            <View style={{ flex: 3, margin: 10 }}>
              {filters.map((item, index) => (
                <Pressable
                  key={index}
                  onPress={() => setSelectedFilter(item.filter)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 10,
                  }}
                >
                  {selectedFilter.includes(item.filter) ? (
                    <FontAwesome name="circle" size={18} color="green" />
                  ) : (
                    <Entypo name="circle" size={18} color="black" />
                  )}

                  <Text
                    style={{ fontSize: 16, fontWeight: "500", marginLeft: 6 }}
                  >
                    {item.filter}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </View>
  );
};

export default PlacesScreen;

const styles = StyleSheet.create({
  optionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    padding: 10,
    backgroundColor: "white",
  },
  optionsPositions: { flexDirection: "row", alignItems: "center" },
  optionsStyle: { fontSize: 15, fontWeight: "500", marginLeft: 8 },
  footerSize: {
    paddingRight: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 10,
    marginBottom: 20,
  },
});
