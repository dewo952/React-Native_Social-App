import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//LoginScreen
import Login_Screen from "./src/screens/LoginScreen/Login/Login_Screen";
import Signup_Verification from "./src/screens/LoginScreen/SignUp/SignUp_Verification";
import SignUp_ChoosePassword from "./src/screens/LoginScreen/SignUp/SignUp_ChoosePassword";
import Signup_EnterUsername from "./src/screens/LoginScreen/SignUp/SignUp_EnterUsername";
import SignUp_AccountCreated from "./src/screens/LoginScreen/SignUp/SignUp_AccountCreated";
import Signup_EnterEmail from "./src/screens/LoginScreen/SignUp/SignUp_EnterEmail";

//ForgotPassword
import ForgotPassword_EnterEmail from "./src/screens/LoginScreen/ForgotPassword/ForgotPassword_EnterEmail";
import ForgotPassword_AccountRecovered from "./src/screens/LoginScreen/ForgotPassword/ForgotPassword_AccountRecovered";
import ForgotPassword_EnterCode from "./src/screens/LoginScreen/ForgotPassword/ForgotPassword_EnterCode";
import ForgotPassword_ChoosePassword from "./src/screens/LoginScreen/ForgotPassword/ForgotPassword_ChoosePassword";
import Mainpage from "./src/screens/Mainpage/Mainpage";
import All_Chats from "./src/screens/LoginScreen/ChatScreen/All_Chats";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        {/* Login Navigation */}
        <Stack.Screen name="Login" component={Login_Screen} />
        <Stack.Screen name="Signup_EnterEmail" component={Signup_EnterEmail} />
        <Stack.Screen
          name="Signup_Verification"
          component={Signup_Verification}
        />
        <Stack.Screen
          name="Signup_ChoosePassword"
          component={SignUp_ChoosePassword}
        />
        <Stack.Screen
          name="Signup_EnterUsername"
          component={Signup_EnterUsername}
        />
        <Stack.Screen
          name="Signup_AccountCreated"
          component={SignUp_AccountCreated}
        />

        {/* ForgotPassword Navigation */}

        <Stack.Screen
          name="ForgotPassword_EnterEmail"
          component={ForgotPassword_EnterEmail}
        />
        <Stack.Screen
          name="ForgotPassword_EnterCode"
          component={ForgotPassword_EnterCode}
        />
        <Stack.Screen
          name="ForgotPassword_ChoosePassword"
          component={ForgotPassword_ChoosePassword}
        />
        <Stack.Screen
          name="ForgotPassword_AccountRecovered"
          component={ForgotPassword_AccountRecovered}
        />

        <Stack.Screen name="Mainpage" component={Mainpage} />
        <Stack.Screen
          name="Chats"
          component={All_Chats}
          options={{ animation: "slide_from_bottom" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
