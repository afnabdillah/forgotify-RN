import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  Pressable,
  Image
} from "react-native";
import { ReactElement, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MusicSlider from "../components/Slider";
import { AntDesign, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { height, width } = Dimensions.get("window");

export default function MainPage(): ReactElement {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{minHeight: height}}>
        <LinearGradient
          style={{ flex: 1 }}
          colors={["green", "#232423"]}
          end={{ x: 0.5, y: 0.7 }}
        >
          <View style={styles.container}>
            <View
              style={{
                backgroundColor: "yellow",
                width: width - 36 * 2,
                height: 150,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
            </View>
            <TouchableHighlight
              onPress={() => console.log("refresh pressed")}
              style={styles.refreshButton}
            >
              <View style={styles.refreshContainer}>
                <Text style={styles.refreshText}>REFRESH</Text>
                <Feather name="refresh-ccw" size={20} color="white" />
              </View>
            </TouchableHighlight>
            <View style={styles.albumImageContainer}>
              <Image source={require("../assets/testImages/cover.jpg")} style={{width: "100%", height: "100%"}} />
            </View>
            <View style={styles.songInfoContainer}>
              <View>
                <Text style={styles.songTitle}>Kyosei Domination</Text>
                <Text style={{color: "white"}}>
                  From <Text style={styles.songAlbum}>Kyosei Meridie</Text>
                </Text>
                <Text style={styles.songArtist}>Shoujo Byou</Text>
              </View>
              <View style={styles.likeContainer}>
                <AntDesign name="hearto" size={32} color="white" />
              </View>
            </View>
            <View style={styles.sliderContainer}>
              <MusicSlider />
              <View style={styles.buttonsContainer}>
                <AntDesign name="stepbackward" size={24} color="white" />
                <View style={styles.pauseButtonContainer}>
                  {isPaused ? (
                    <Pressable onPress={() => setIsPaused(!isPaused)}>
                      <AntDesign name="caretright" size={32} color="black" />
                    </Pressable>
                  ) : (
                    <Pressable onPress={() => setIsPaused(!isPaused)}>
                      <AntDesign name="pause" size={32} color="black" />
                    </Pressable>
                  )}
                </View>
                <Pressable onPress={() => console.log("pressed")}>
                  <AntDesign name="stepforward" size={24} color="white" />
                </Pressable>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  refreshButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderColor: "white",
    borderRadius: 100,
    borderStyle: "solid",
    borderWidth: 1,
    marginVertical: 24,
  },
  refreshContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  refreshText: {
    marginRight: 8,
    fontSize: 16,
    color: "white",
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
    width: width - 36 * 2,
  },
  songTitle: {
    fontWeight: "bold",
    color: "white",
    fontSize: 22,
  },
  songAlbum: {
    fontWeight: "normal",
    color: "#bdbebf",
    fontSize: 14,
  },
  songArtist: {
    fontWeight: "normal",
    color: "#bdbebf",
    fontSize: 14,
  },
  likeContainer: {
    height: 40,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sliderContainer: {
    width: width - 36 * 2,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  pauseButtonContainer: {
    width: 60,
    aspectRatio: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9999,
  },
});
