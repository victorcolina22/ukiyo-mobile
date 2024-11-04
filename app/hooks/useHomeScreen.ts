import { useEffect, useState } from 'react';
import { MangaList } from '@/interfaces/mangaList';
import { MangaService } from '@/services/mangas-service';

export const useHomeScreen = () => {
  const [mangas, setMangas] = useState<MangaList[] | null>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMangas();
  }, []);

  const getMangas = async () => {
    const response = await MangaService.getMangaListByPage(1);
    setMangas(response?.mangaList ?? []);
    setIsLoading(false);
  };

  return { mangas, isLoading };
};
