import { NavigationContainer } from "@react-navigation/native"
import HomeStackNavigator from "./HomeStackNavigator"

const RootNav = () => {
    return (
        <NavigationContainer>
            <HomeStackNavigator />
        </NavigationContainer>
    )
};

export default RootNav;