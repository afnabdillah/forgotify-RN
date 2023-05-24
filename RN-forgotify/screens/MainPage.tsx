import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { ReactElement } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MusicSlider from "../components/Slider";
// import  from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

export default function MainPage(): ReactElement {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.albumImageContainer}></View>
          <View style={styles.songInfoContainer}>
            <View>
              <Text style={styles.songTitle}>Song Name</Text>
              <Text style={styles.songAlbum}>Album Name</Text>
              <Text style={styles.songArtist}>Artist Name</Text>
            </View>
            <View style={styles.likeContainer}></View>
          </View>
          <View style={styles.sliderContainer}>
            <MusicSlider />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  albumImageContainer: {
    backgroundColor: "red",
    width: width - 36 * 2,
    aspectRatio: 1,
    marginBottom: 12,
  },
  songInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "gray",
    width: width - 36 * 2,
  },
  songTitle: {
    fontWeight: "bold",
    color: "white",
    fontSize: 24,
  },
  songAlbum: {
    fontWeight: "normal",
    color: "white",
    fontSize: 16,
  },
  songArtist: {
    fontWeight: "normal",
    color: "white",
    fontSize: 16,
  },
  likeContainer: {
    backgroundColor: "green",
    height: 40,
    aspectRatio: 1,
  },
  sliderContainer: { 
    backgroundColor: "white", 
    width: width - 36 * 2 
  }
});
