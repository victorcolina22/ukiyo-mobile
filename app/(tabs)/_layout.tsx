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
          paddingTop: 10,
          backgroundColor: globalStyles.backgroundColorGray.backgroundColor,
          height: 65,
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
          tabBarIconStyle: {
            color: globalStyles.textColorWhite.color,
          },
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
