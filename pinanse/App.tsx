import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "./screens/LogIn";
import SearchCurr from "./screens/SearchCurr";
import BottomNavigator from "./components/BottomNavigator";
import { Center, extendTheme, NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";

const theme = extendTheme({
  colors: {
    primary: "#0b182f",
    secondary: "#3b60ad",
    bot: "#ffc947",
  },

  fontConfig: {
    Roboto: {
      100: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      200: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      300: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      400: {
        normal: "Roboto-Regular",
        italic: "Roboto-Italic",
      },
      500: {
        normal: "Roboto-Medium",
      },
      600: {
        normal: "Roboto-Medium",
        italic: "Roboto-MediumItalic",
      },
      700: {
        normal: "Roboto-Bold",
      },
      800: {
        normal: "Roboto-Bold",
        italic: "Roboto-BoldItalic",
      },
      900: {
        normal: "Roboto-Bold",
        italic: "Roboto-BoldItalic",
      },
    },
  },
  components: {
    Text: {
      baseStyle: {
        color: "#696D72",
      },
      defaultProps: {
        size: "lg",
      },
      sizes: {
        xl: {
          fontSize: "64px",
        },
        lg: {
          fontSize: "32px",
        },
        md: {
          fontSize: "16px",
        },
        sm: {
          fontSize: "12px",
        },
      },
    },
  },
});

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LogIn">
            <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={SearchCurr}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="App"
              component={BottomNavigator}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};

export default App;
