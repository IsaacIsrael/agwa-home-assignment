import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import Cart from '../Screens/Cart';
import Farms from "../Screens/LoggedIn/Farms";
import Colors from '../utils/styles';
import SignUp from "../Screens/LoggedOut/SignUp";

const { Navigator, Screen } = createBottomTabNavigator();

const onPress = ({navigation, route}) => {
  const event = navigation.emit({
    type: 'tabPress',
    target: route.key,
    canPreventDefault: true,
  });

  if (!isFocused && !event.defaultPrevented) {
    navigation.navigate(route.name);
  }
};


const BottomTabs = () => (
    <Navigator
      screenOptions={{
        activeTintColor: Colors.primary ,
        headerShown: false,
      }}
    >
      <Screen
				name='farms'
				component={Farms}
        options={{
          tabBarLabel: "Farms",
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome5 
              name={'seedling'} 
              color={focused ? Colors.primary : color}
              size={size} 
            />
          ),
        }}
			/>
      <Screen
				name='profile'
				component={Farms}
				options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons 
              name="account" 
              color={focused ? Colors.primary : color}
              size={size} 
            />
          ),
        }}
			/>
    </Navigator>
  );

  export default BottomTabs;