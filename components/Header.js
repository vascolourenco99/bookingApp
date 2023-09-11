import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';

const Header = () => {
  return (
    <View 
      style={ styles.container }>
        
      <Pressable style={ styles.pressableContainer } >
        <Ionicons name="bed-outline" size={24} color="white" />
        <Text style={ styles.text }>
          Stays
        </Text>
      </Pressable>

      <Pressable style={ styles.pressableContainer }>
        <Ionicons name="ios-airplane-outline" size={26} color="white" />
        <Text style={ styles.text }>
          Flights
        </Text>
      </Pressable>

      <Pressable style={ styles.pressableContainer }>
        <Ionicons name="car-outline" size={26} color="white" />
        <Text style={ styles.text }>
          Car Rental
        </Text>
      </Pressable>

      <Pressable style={ styles.pressableContainer }>
        <FontAwesome5 name="uber" size={26} color="white" />
        <Text style={ styles.text } >
          Taxi
        </Text>
      </Pressable>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#003588",
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  // ver esta parte ainda
  pressableContainer:{
    flexDirection: "row",
    alignItems: "center",
  },
  pressableClick:{
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 25,
    padding: 8,
  },
  text:{
    marginLeft: 8,
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  }

});