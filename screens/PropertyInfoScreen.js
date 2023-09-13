import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const PropertyInfoScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
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
      }
    });
  }, []);
  return (
    <SafeAreaView>
      <Text>PropertyInfoScreen</Text>
    </SafeAreaView>
  )
}

export default PropertyInfoScreen

const styles = StyleSheet.create({})