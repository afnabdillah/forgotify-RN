import { NavigationProp } from "@react-navigation/native";

export type RootStackParamList = {
  MainPage?: undefined;
  Login?: undefined;
  // Other screen names and their parameters can be defined here
};

export type LoginProps = {
  navigation: NavigationProp<RootStackParamList>;
}