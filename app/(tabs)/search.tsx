import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import {
  FlatList,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { MangaCatalog } from '@/components/MangaCatalog';
import { MangaService } from '@/services/mangas-service';
import { hideKeyboard } from '@/shared/utils';

export const useDebouncedValue = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default function SearchScreen() {
  const [text, onChangeText] = useState('');
  const debouncedText = useDebouncedValue(text, 500);

  const { data } = useQuery({
    queryKey: ['manga-by-name', debouncedText],
    queryFn: () => MangaService.getMangaByName(debouncedText),
    enabled: !!debouncedText,
    refetchOnWindowFocus: false,
  });

  const handleOnSubmit = () => {
    if (text === '') return;
    hideKeyboard();
  };

  return (
    <View className='flex-1 px-4'>
      <TouchableWithoutFeedback onPress={hideKeyboard}>
        <View>
          <View className='border border-white rounded-xl flex-row justify-between py-2 px-3'>
            <TextInput
              className='flex-1 text-white'
              placeholder='Enter the title of the manga'
              value={text}
              onChangeText={onChangeText}
              onSubmitEditing={handleOnSubmit}
            />
            <Pressable onPress={handleOnSubmit}>
              <FontAwesome size={26} name='search' color='white' />
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <View className='flex-1 py-4'>
        <FlatList
          data={data?.data ?? []}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View className='h-[10]' />}
          showsVerticalScrollIndicator={false}
          renderItem={MangaCatalog}
        />
      </View>
    </View>
  );
}
