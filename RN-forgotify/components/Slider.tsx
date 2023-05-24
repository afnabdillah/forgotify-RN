import { Slider } from "@miblanchard/react-native-slider";
import { StyleSheet, View, Text } from "react-native";
import { ReactElement } from "react";
import { useState } from "react";

export default function MusicSlider(): ReactElement {
  const [time, setTime] = useState(0.2);
  return (
    <View style={{backgroundColor: "#c99a97"}}>
      <Slider
        thumbTintColor="#343434"
        thumbTouchSize={{width: 45, height: 45}}
        minimumTrackTintColor="#fff"
        maximumTrackTintColor="#d6d4d4"
        value={time}
        onValueChange={(time) => setTime(time[0])}
      />
    </View>
  );
}
