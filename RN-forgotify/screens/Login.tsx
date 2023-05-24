import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { ReactElement } from "react";
import { LoginProps } from "../types";

export default function Login({ navigation }: LoginProps): ReactElement {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={{
          backgroundColor: "green",
          width: "80%",
          height: 60,
          borderRadius: 20,
          marginHorizontal: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={(): void => navigation.navigate("MainPage")}
      >
        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
          Login
        </Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
});
