import { useCallback, useEffect, useState } from 'react';
import { MangaList } from '@/interfaces/mangaList';
import { MangaService } from '@/services/mangas-service';
import { ERROR_MANGA_NOT_FOUND } from '@/shared/constants';

export const useHomeScreen = () => {
  const [mangas, setMangas] = useState<MangaList[] | null>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState({
    message: '',
    show: false,
  });

  useEffect(() => {
    getMangas();
  }, []);

  const getMangas = async () => {
    try {
      const response = await MangaService.getMangaListByPage(1);
      setMangas(response?.mangaList ?? []);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError({
        message: ERROR_MANGA_NOT_FOUND,
        show: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePullToRefresh = useCallback(async () => {
    setIsRefreshing(true);

    await getMangas();
    setIsRefreshing(false);
  }, []);

  return { mangas, isLoading, error, isRefreshing, handlePullToRefresh };
};
