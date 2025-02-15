import { useState } from 'react';
import {
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export default function SearchScreen() {
  const [text, onChangeText] = useState('');

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View className='flex-1 px-4'>
        <TextInput
          className='bg-white border border-black rounded-[10] h-[40] px-[10]'
          placeholder='Enter the title of the manga'
          value={text}
          onChangeText={onChangeText}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
