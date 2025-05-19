
import { Stack } from "expo-router";
import "../global.css";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Montserra": require("../assets/fonts/Montserra.ttf"),
  });
   const queryClient = new QueryClient();

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
      <QueryClientProvider client={queryClient}>
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Main"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LocationsPage"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
    </QueryClientProvider>
  );
}
