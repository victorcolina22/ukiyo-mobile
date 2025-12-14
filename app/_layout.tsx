import 'react-native-reanimated';
import '../global.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { globalStyles } from '@/shared/theme';

// TankStack Query Client
const queryClient = new QueryClient();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView className='flex-1 bg-gray'>
        <Stack
          screenOptions={{
            title: '',
            headerStyle: {
              backgroundColor: globalStyles.backgroundColorGray.backgroundColor,
            },
            contentStyle: {
              backgroundColor: globalStyles.backgroundColorGray.backgroundColor,
              paddingTop: 20,
            },
          }}
        >
          <Stack.Screen
            name='(tabs)'
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </SafeAreaView>
    </QueryClientProvider>
  );
}
