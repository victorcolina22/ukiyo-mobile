import { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { IChapter } from '@/interfaces/chapter';
import { MangaService } from '@/services/mangas-service';

export const useChapterScreen = () => {
  const { bookId, id } = useLocalSearchParams();

  const [chapter, setChapter] = useState<IChapter>();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof id === 'string' && typeof bookId === 'string')
      getChapter(bookId, id);
  }, [bookId, id]);

  const getChapter = async (bookId: string, id: string) => {
    const response = await MangaService.getChapterById(bookId, id);
    setChapter(response);
    setIsLoading(false);
  };

  return {
    chapter,
    isLoading,
  };
};
