import { Tabs } from "expo-router/tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          padding: 5,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-sharp" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="look-for-mentor"
        options={{
          title: "Buscar",
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-sharp" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-sharp" size={30} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="mentor"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
