import { FlatList, Image, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { IChapter } from '@/interfaces/chapter';
import { MangaService } from '@/services/mangas-service';

export default function ChapterScreen() {
  const { bookId, id } = useLocalSearchParams();

  const [chapter, setChapter] = useState<IChapter>();

  useEffect(() => {
    if (typeof id === 'string' && typeof bookId === 'string')
      getChapter(bookId, id);
  }, [bookId, id]);

  const getChapter = async (bookId: string, id: string) => {
    const response = await MangaService.getChapterById(bookId, id);
    setChapter(response);
  };

  return (
    <FlatList
      data={chapter?.images ?? []}
      keyExtractor={(item) => item.image}
      renderItem={({ item }) => (
        <Image
          key={item.image}
          source={{ uri: item.image }}
          alt={item.title}
          style={styles.image}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    aspectRatio: 1,
  },
});
