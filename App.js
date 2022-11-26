import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//LoginScreen
import Login_Screen from "./src/screens/LoginSignUp/Login/Login_Screen";
import Signup_Verification from "./src/screens/LoginSignUp/SignUp/SignUp_Verification";
import SignUp_ChoosePassword from "./src/screens/LoginSignUp/SignUp/SignUp_ChoosePassword";
import Signup_EnterUsername from "./src/screens/LoginSignUp/SignUp/SignUp_EnterUsername";
import SignUp_AccountCreated from "./src/screens/LoginSignUp/SignUp/SignUp_AccountCreated";
import Signup_EnterEmail from "./src/screens/LoginSignUp/SignUp/SignUp_EnterEmail";

//ForgotPassword
import ForgotPassword_EnterEmail from "./src/screens/LoginSignUp/ForgotPassword/ForgotPassword_EnterEmail";
import ForgotPassword_AccountRecovered from "./src/screens/LoginSignUp/ForgotPassword/ForgotPassword_AccountRecovered";
import ForgotPassword_EnterCode from "./src/screens/LoginSignUp/ForgotPassword/ForgotPassword_EnterCode";
import ForgotPassword_ChoosePassword from "./src/screens/LoginSignUp/ForgotPassword/ForgotPassword_ChoosePassword";
import Mainpage from "./src/screens/Mainpage/Mainpage";
import All_Chats from "./src/screens/ChatScreen/All_Chats";
import SearchUser from "./src/screens/Mainpage/SearchUser";
import Notification from "./src/screens/Mainpage/Notification";
import UserProfile from "./src/screens/Profile/UserProfile";
import Setting from "./src/Settings/Setting";

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
        {/* <Stack.Screen name="Login" component={Login_Screen} />
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
        /> */}

        {/* ForgotPassword Navigation */}
        {/* 
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
        /> */}

        {/* Main App Page */}
        <Stack.Screen name="Mainpage" component={Mainpage} />
        <Stack.Screen
          name="Chats"
          component={All_Chats}
          options={{ animation: "slide_from_bottom" }}
        />
        <Stack.Screen
          name="SearchUser"
          component={SearchUser}
          options={{ animation: "simple_push" }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ animation: "simple_push" }}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{ animation: "simple_push" }}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{ animation: "slide_from_right" }}
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
