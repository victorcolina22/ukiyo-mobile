import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

import { globalStyles } from '@/shared/theme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: globalStyles.textColorWhite.color,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: globalStyles.backgroundColorGray.backgroundColor,
          height: 60,
        },
        sceneStyle: {
          backgroundColor: globalStyles.backgroundColorGray.backgroundColor,
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name='home' color={color} />
          ),
          animation: 'shift',
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name='search' color={color} />
          ),
          animation: 'shift',
        }}
      />
    </Tabs>
  );
}
