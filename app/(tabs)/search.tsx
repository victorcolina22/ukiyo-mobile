import { useState } from 'react';
import { TextInput } from 'react-native';
import { PaddingContainerView } from '@/components/PaddingContainerView';

export default function SearchScreen() {
  const [text, onChangeText] = useState('');

  return (
    <PaddingContainerView className='flex-1 bg-gray'>
      <TextInput
        className='bg-white border border-black rounded-[10] h-[40] px-[10]'
        placeholder='Enter the title of the manga'
        value={text}
        onChangeText={onChangeText}
      />
    </PaddingContainerView>
  );
}
