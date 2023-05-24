import { Slider } from "@miblanchard/react-native-slider";
import { StyleSheet, View, Text } from "react-native";
import { ReactElement } from "react";
import { useState } from "react";

export default function MusicSlider(): ReactElement {
  const [time, setTime] = useState(0.2);
  return (
    <View >
      <Slider
        thumbTintColor="#fff"
        thumbTouchSize={{width: 45, height: 45}}
        minimumTrackTintColor="#fff"
        maximumTrackTintColor="#898c8a"
        value={time}
        onValueChange={(time) => setTime(time[0])}
      />
    </View>
  );
}
