import {
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  Pressable
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <Text style={styles.textStyleSignIn}>Sign In</Text>

          <Text style={styles.textStyle}>Sign In to Your Account</Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "500", color:"gray" }}>Email</Text>

            <TextInput
              value={email}
              onChange={(text) => setEmail(text)}
              style={{
                fontSize:email ? 18: 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>

          <View style={{ marginTop: 12 }}>
            <Text style={{ fontSize: 18, fontWeight: "500", color:"gray" }}>Password</Text>

            <TextInput
              value={password}
              onChange={(text) => setPassword(text)}
              secureTextEntry={true}
              style={{
                fontSize: password ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>
        </View>

        <Pressable
            style={{
                width: 200,
                backgroundColor: "#003580",
                padding: 15,
                borderRadius: 7,
                marginTop: 50,
                marginLeft: "auto",
                marginRight: "auto",
            }}
        >
            <Text
            style={{
                textAlign: "center",
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
            }}
            >Login</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Register")} style={{marginTop:20}}>
            <Text style={{textAlign:"center", fontSize:16, color:"gray"}}>Don´t have an account? Sign up</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  textStyleSignIn: {
    color: "#003580",
    fontSize: 17,
    fontWeight: "700",
  },
  textStyle: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: "500",
  },
});
