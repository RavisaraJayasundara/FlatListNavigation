import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StudentList from "./components/StudentList";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './components/Profile';
import AddStudent from "./components/AddStudent";


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="StudentList" component={StudentList}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Add" component={AddStudent}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
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
