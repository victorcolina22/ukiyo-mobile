import { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { IChapter } from '@/interfaces/chapter';
import { MangaService } from '@/services/mangas-service';
import { ERROR_MANGA_IMAGES_NOT_FOUND } from '@/shared/constants';

export const useChapterScreen = () => {
  const { bookId, id } = useLocalSearchParams();

  const [chapter, setChapter] = useState<IChapter>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({
    message: '',
    show: false,
  });

  useEffect(() => {
    if (typeof id === 'string' && typeof bookId === 'string')
      getChapter(bookId, id);
  }, [bookId, id]);

  const getChapter = async (bookId: string, id: string) => {
    try {
      const response = await MangaService.getChapterById(bookId, id);
      setChapter(response);
    } catch (error) {
      setError({ message: ERROR_MANGA_IMAGES_NOT_FOUND, show: true });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    chapter,
    isLoading,
    error,
  };
};
