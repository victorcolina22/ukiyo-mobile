import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { Skeleton } from 'moti/skeleton';

import { useBookScreen } from './hooks/useBookScreen';

export default function BookScreen() {
  const { id, isLoading, manga } = useBookScreen();

  if (isLoading)
    return (
      <View className='px-4'>
        <View className='flex-row gap-3 mb-3'>
          <Skeleton height={180} width={130} />
          <View className='gap-5'>
            <Skeleton height={20} width={200} />
            <Skeleton height={20} width={200} />
            <Skeleton height={20} width={100} />
            <Skeleton height={20} width={140} />
          </View>
        </View>

        <View className='gap-7 mt-12'>
          {Array.from({ length: 5 }, (_, index) => index + 1).map((e) => (
            <Skeleton key={e} height={40} width='100%' />
          ))}
        </View>
      </View>
    );

  return (
    <ScrollView className='px-4' showsVerticalScrollIndicator={false}>
      <View className='flex-row gap-3'>
        <Image
          className='h-[180] w-[130] object-cover rounded-xl'
          source={{ uri: manga?.imageUrl }}
        />

        <View className='flex-shrink'>
          <Text className='text-white text-2xl font-bold'>
            {manga?.title ?? ''}
          </Text>

          <Text className='text-white font-bold mt-[15]'>
            Author: <Text className='font-normal'>{manga?.author ?? ''}</Text>
          </Text>

          <Text className='text-white font-bold mt-[8]'>
            Status:{' '}
            <Text style={{ fontWeight: 'normal' }}>{manga?.status ?? ''}</Text>
          </Text>

          <View className='flex-row flex-wrap gap-[6] mt-[8]'>
            {manga?.genres.map((genre) => (
              <Text
                key={genre}
                className='border border-[#B6C4B6] rounded-[5] text-white py-[1] px-[5]'
              >
                {genre}
              </Text>
            ))}
          </View>
        </View>
      </View>

      <View className='flex flex-col gap-3 mt-[40]'>
        {manga?.chapters?.map((chapter) => (
          <Link asChild key={chapter.id} href={`/book/${id}/${chapter.id}`}>
            <Pressable
              key={chapter.id}
              className='bg-[#05080E] rounded-[8] px-[10] py-[16]'
            >
              <Text className='text-white'>{chapter.chapter}</Text>
            </Pressable>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
}
