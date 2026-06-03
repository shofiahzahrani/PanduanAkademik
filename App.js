import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Import Screens
import DetailMatkulScreen from "./src/screens/DetailMatkulScreen";
import HomeScreen from "./src/screens/HomeScreen";
import MatkulScreen from "./src/screens/MatkulScreen";
import NilaiScreen from "./src/screens/NilaiScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SplashScreen from "./src/screens/SplashScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Gabungan Bottom Tabs Utama
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#1565C0" },
        headerTintColor: "#fff",
        tabBarActiveTintColor: "#1565C0",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "AkademiKu",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Mata Kuliah"
        component={MatkulScreen}
        options={{
          title: "Mata Kuliah",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-open-variant"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfileScreen}
        options={{
          title: "Profil Mahasiswa",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Stack Utama Aplikasi (Menjaga Back Stack yang Benar)
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="MainTabs" component={MainTabs} />

          <Stack.Screen
            name="DetailMatkul"
            component={DetailMatkulScreen}
            options={({ navigation }) => ({
              headerShown: true,
              title: "Detail Kelas",
              headerStyle: { backgroundColor: "#1565C0" },
              headerTintColor: "#fff",
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{ marginRight: 15, marginLeft: -5 }}
                >
                  <MaterialCommunityIcons
                    name="chevron-left"
                    size={30}
                    color="#fff"
                  />
                </TouchableOpacity>
              ),
              headerBackVisible: false, // Mematikan total panah + tulisan bawaan iOS
            })}
          />

          <Stack.Screen
            name="Nilai"
            component={NilaiScreen}
            options={({ navigation }) => ({
              headerShown: true,
              title: "Nilai & Transkrip",
              headerStyle: { backgroundColor: "#1565C0" },
              headerTintColor: "#fff",
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{ marginRight: 15, marginLeft: -5 }}
                >
                  <MaterialCommunityIcons
                    name="chevron-left"
                    size={30}
                    color="#fff"
                  />
                </TouchableOpacity>
              ),
              headerBackVisible: false,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
