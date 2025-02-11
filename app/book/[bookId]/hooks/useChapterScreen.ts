import { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useQuery } from '@tanstack/react-query';

// Services
import { MangaService } from '@/services/mangas-service';

// Shared
import { ERROR_MANGA_IMAGES_NOT_FOUND } from '@/shared/constants';

export const useChapterScreen = () => {
  const { id } = useLocalSearchParams();

  const [error, setError] = useState({
    message: '',
    show: false,
  });

  const { data: chapter, isLoading } = useQuery({
    queryKey: ['manga', id],
    queryFn: () => getChapter(id as string),
    retry: false,
  });

  const getChapter = async (bookId: string) => {
    try {
      const response = await MangaService.getChapterById(bookId);
      return response.data;
    } catch (error) {
      setError({ message: ERROR_MANGA_IMAGES_NOT_FOUND, show: true });
      throw error;
    }
  };

  return {
    chapter,
    isLoading,
    error,
  };
};

export default useChapterScreen;
