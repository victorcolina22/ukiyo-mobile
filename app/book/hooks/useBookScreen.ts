import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { MangaService } from '@/services/mangas-service';
import { Manga } from '@/interfaces/manga';

export const useBookScreen = () => {
  const { id } = useLocalSearchParams();

  const [manga, setManga] = useState<Manga>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof id === 'string') getManga(id);
  }, [id]);

  const getManga = async (id: string) => {
    const response = await MangaService.getMangaById(id);
    setManga(response);
    setIsLoading(false);
  };

  return {
    id,
    isLoading,
    manga,
  };
};
