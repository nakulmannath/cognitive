import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsPage from "../pages/details";
import HomePage from "../pages/home";
import { AppStackNavigatorParamList } from "./types";

const AppStack = createNativeStackNavigator<AppStackNavigatorParamList>();

const HomeStackNavigator = () => {
  return (
    <AppStack.Navigator initialRouteName="Home">
      <AppStack.Screen name="Home" component={HomePage} />
      <AppStack.Screen name="Details" component={DetailsPage} />
    </AppStack.Navigator>
  );
};

export default HomeStackNavigator;