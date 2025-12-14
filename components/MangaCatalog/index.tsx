import { Link } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';

import { Manga } from '@/interfaces/manga';

import Genres from '../Genres';

export function MangaCatalog({ item }: { item: Manga }) {
  return (
    <Link asChild href={`/book/${item.id}`}>
      <Pressable className='flex-1 flex-row gap-3'>
        <Image
          className='h-[180] w-[130] object-cover rounded-xl'
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
        </View>
      </Pressable>
    </Link>
  );
}
