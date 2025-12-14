import { FlatList, RefreshControl, ScrollView, Text, View } from 'react-native';

import { MangaCatalog } from '@/components/MangaCatalog';
import { Skeleton } from '@/components/Skeleton';
import { COLORS } from '@/shared/constants';
import { globalStyles } from '@/shared/theme';

import { useHomeScreen } from '../hooks/useHomeScreen';

// TODO: Agregar infinity scroll
// TODO: Corregir tamaño de imagenes en pagina de lectura
// TODO: Corregir scroll de la lista de mangas cuando son más de 10

export default function HomeScreen() {
  const { mangas, isLoading, error, isRefreshing, handlePullToRefresh } =
    useHomeScreen();

  if (isLoading)
    return Array.from({ length: 5 }, (_, index) => index + 1).map((e) => (
      <View key={e} className='px-4'>
        <Skeleton />
      </View>
    ));

  if (error.show)
    return (
      <View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              tintColor={COLORS.WHITE}
              onRefresh={handlePullToRefresh}
            />
          }
          contentContainerStyle={globalStyles.center}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <Text className='text-white mt-2 text-3xl'>{error.message}</Text>
          </View>
        </ScrollView>
      </View>
    );

  return (
    <View className='pb-2 px-4'>
      <FlatList
        data={mangas}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View className='h-[10]' />}
        showsVerticalScrollIndicator={false}
        renderItem={MangaCatalog}
      />
    </View>
  );
}
