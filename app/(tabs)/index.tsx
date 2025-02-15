import { Link } from 'expo-router';
import {
  FlatList,
  Image,
  Pressable,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';

// Components
import { Genres } from '@/components/Genres';
import { RenderIf } from '@/components/RenderIf';
import { Skeleton } from '@/components/Skeleton';

// Shared
import { COLORS } from '@/shared/constants';
import { globalStyles } from '@/shared/theme';

// Hooks
import { useHomeScreen } from '../hooks/useHomeScreen';

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
        renderItem={({ item }) => (
          <Link asChild href={`/book/${item.id}`}>
            <Pressable className='flex-1 flex-row gap-3'>
              <Image
                className='h-[180] w-[130] object-cover rounded-lg'
                source={{ uri: item.imageUrl }}
                alt={item.title}
              />

              <View className='flex-shrink'>
                <Text
                  className='text-white font-bold text-lg'
                  numberOfLines={2}
                  ellipsizeMode='tail'
                >
                  {item.title}
                </Text>

                <Genres data={item.genres} />

                {/* <RenderIf condition={Boolean(item.chapters)}> */}
                {/*   <Text */}
                {/*     className='text-white mt-2' */}
                {/*     numberOfLines={2} */}
                {/*     ellipsizeMode='tail' */}
                {/*   > */}
                {/*     <Text className='font-bold'>Chapter: </Text> */}
                {/*     <Text>{item.chapters}</Text> */}
                {/*   </Text> */}
                {/* </RenderIf> */}
              </View>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}
