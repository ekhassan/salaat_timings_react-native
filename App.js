import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from expo vector icons
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LogoutScreen from "./screens/LogoutScreen";
// Screens
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import NamazTime from "./screens/NamazTime";
import MapScreen from "./screens/MapScreen";
import AddTime from "./screens/AddTime";
import SettingScreen from "./screens/SettingScreen";
import SearchScreen from "./screens/SearchScreen";
import * as Location from "expo-location";

// Tabs
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [masjid, setMasjid] = useState("masjid");
  const [logoutConfirmationVisible, setLogoutConfirmationVisible] = useState(false);

  useEffect(() => {
    getLocationPermission();
  }, []);

  const getLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Required",
        "This app needs access to your location to function properly.",
        [{ text: "OK", onPress: () => getLocationPermission() }]
      );
    }

    const masjid = await AsyncStorage.getItem("masjid");
    masjid && setMasjid(masjid);
  };

  const logout = async () => {
    setLogoutConfirmationVisible(true);
  };

  const confirmLogout = async () => {
    await AsyncStorage.removeItem("masjid");
    setMasjid("");
    setLogoutConfirmationVisible(false);
  };

  const cancelLogout = () => {
    setLogoutConfirmationVisible(false);
  };

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Namaz") {
              iconName = focused ? "time" : "time-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Map") {
              iconName = focused ? "map" : "map-outline";
            } else if (route.name === "AddTime") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            } else if (route.name === "Setting") {
              iconName = focused ? "settings" : "settings-outline";
            } else if (route.name === "Login") {
              iconName = focused ? "log-in" : "log-in-outline";
            } else if (route.name === "Signup") {
              iconName = focused ? "person-add" : "person-add-outline";
            } else if (route.name === "Logout") {
              iconName = focused ? "log-out" : "log-out-outline";
            }

            const activeColor = focused ? "#00B140" : color;
            return <Ionicons name={iconName} size={size} color={activeColor} />;
          },
          tabBarLabel: ({ focused }) => {
            // Apply custom color for the active tab text
            let labelName;
            if (route.name === "Home") {
              labelName = "Home";
            } else if (route.name === "Namaz") {
              labelName = "Namaz";
            } else if (route.name === "Search") {
              labelName = "Search";
            } else if (route.name === "Map") {
              labelName = "Map";
            } else if (route.name === "AddTime") {
              labelName = "Add Time";
            } else if (route.name === "Setting") {
              labelName = "Setting";
            } else if (route.name === "Login") {
              labelName = "Login";
            } else if (route.name === "Signup") {
              labelName = "Signup";
            } else if (route.name === "Logout") {
              labelName = "Logout";
            }
            const activeColor = focused ? "#00B140" : "gray";

            return (
              <Text style={{ color: activeColor, marginLeft: 8,fontSize:10}}>{labelName}</Text>
            );
          },
        })}
        tabBarActiveTintColor="#00B140"
        tabBarInactiveTintColor="gray"
        tabBarStyle={{
          display: "flex",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Namaz"
          component={NamazTime}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        {masjid.length !== 0 && (
          <>
            <Tab.Screen
              name="Map"
              component={MapScreen}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="AddTime"
              component={AddTime}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Setting"
              component={SettingScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
        {masjid.length === 0 ? (
          <Tab.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <Tab.Screen
            name="Logout"
            component={LogoutScreen}
            options={{
              headerShown: false,
              tabBarButton: (props) => (
                <TouchableOpacity {...props} onPress={logout} />
              ),
            }}
          />
        )}
        {masjid.length === 0 ? (
          <Tab.Screen
            name="Signup"
            component={SignupScreen}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <></>
        )}

      </Tab.Navigator>
      <Modal
        animationType="slide"
        transparent={true}
        visible={logoutConfirmationVisible}
        onRequestClose={() => {
          setLogoutConfirmationVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure you want to log out?</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={confirmLogout}
            >
              <Text style={styles.textStyle}>Yes</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={cancelLogout}
            >
              <Text style={styles.textStyle}>No</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    paddingHorizontal: 70,
    paddingVertical: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#00B140",
    marginTop: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
