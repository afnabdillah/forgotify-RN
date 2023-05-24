import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { ReactElement } from "react";
import { LoginProps } from "../types";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login({ navigation }: LoginProps): ReactElement {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.loginContainer}
          onPress={(): void => navigation.navigate("MainPage")}
        >
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
            Login
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
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
  loginContainer: {
    backgroundColor: "green",
    width: "80%",
    height: 60,
    borderRadius: 20,
    marginHorizontal: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
});
