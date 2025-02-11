import { Text, View } from 'react-native';

interface GenresProps {
  data: string[];
}

export function Genres({ data = [] }: GenresProps) {
  const onlyThreeGenres = data.slice(0, 3);
  const genresJoined = onlyThreeGenres.map((genre) => genre).join(', ');

  return (
    <View className='flex items-center gap-2'>
      <Text className='text-white'>{genresJoined}</Text>
    </View>
  );
}

export default Genres;
