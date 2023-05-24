import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import MainPage from "../screens/MainPage";
import { ReactElement } from "react";

type RootStackParamList = {
  MainPage: undefined;
  Login: undefined;
  // Other screen names and their parameters can be defined here
};

const Stack = createStackNavigator();

export default function MainStack(): ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
      <Stack.Screen name="MainPage" component={MainPage} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}
