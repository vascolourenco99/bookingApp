import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useRef, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import MapView, {Marker} from "react-native-maps";
const exchangeRate = 0.012;


const MapScreen = () => {
  const route = useRoute();
  const mapView = useRef();

  const coordidates = [];
  const details = route.params.searchPlaces.map((item)=> item.properties?.map((prop) => {
    coordidates.push({
      latitude: Number(prop.latitude),
      longitude: Number(prop.longitude),
    });
  }))

  useEffect(() => {
    mapView.current.fitToCoordinates(coordidates, {
      edgePadding: {
        top: 150,
        right: 150,
        bottom: 150,
        left: 150,
      },
    });
  },[])

  return (
    <View>
      <MapView
        ref={mapView}
        style={styles.map}
      >
        {route.params.searchPlaces.map((item) => 
          item.properties.map((property, index) => (
            <Marker
              key={index}
              title={property.name}
              coordinate={{
                latitude: Number(property.latitude),
                longitude: Number(property.longitude),
              }}
            >
                <Pressable style={styles.priceContainer}>
                  <Text style={styles.priceStyle}>{(property.newPrice * exchangeRate).toFixed(2)}€</Text>
                </Pressable>
            </Marker>
          )))}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  priceContainer:{
    backgroundColor: "#003580",
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 4
  },
  priceStyle:{
    fontSize: 15,
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  }
});
