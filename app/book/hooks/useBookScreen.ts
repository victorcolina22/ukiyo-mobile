import { useLocalSearchParams } from 'expo-router';
import { useQuery } from '@tanstack/react-query';

import { MangaService } from '@/services/mangas-service';

export const useBookScreen = () => {
  const { id } = useLocalSearchParams();

  const { data: manga, isLoading } = useQuery({
    queryKey: ['manga', id],
    queryFn: () => getManga(id as string),
    retry: false,
  });

  async function getManga(id: string) {
    try {
      const response = await MangaService.getMangaById(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    id,
    isLoading,
    manga,
  };
};

export default useBookScreen;
