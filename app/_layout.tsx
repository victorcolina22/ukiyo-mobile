import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { globalStyles } from '@/shared/theme';
import 'react-native-reanimated';

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
    <SafeAreaView style={styles.container}>
      <Stack
        screenOptions={{
          title: '',
          headerStyle: {
            backgroundColor: globalStyles.backgroundColorGray.backgroundColor,
          },
          contentStyle: {
            backgroundColor: globalStyles.backgroundColorGray.backgroundColor,
            paddingTop: 20,
            paddingHorizontal: 15,
          },
        }}
      >
        <Stack.Screen
          name='(tabs)'
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='book/[bookId]/[id]'
          options={{ headerShown: false }}
        />
        <Stack.Screen name='+not-found' />
      </Stack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.backgroundColorGray.backgroundColor,
  },
});
