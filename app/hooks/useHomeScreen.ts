import { useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { MangaService } from '@/services/mangas-service';

import { ERROR_MANGA_NOT_FOUND } from '@/shared/constants';

export const useHomeScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState({
    message: '',
    show: false,
  });

  const { data: mangas, isLoading } = useQuery({
    queryKey: ['mangas'],
    queryFn: getMangas,
    retry: false,
  });

  async function getMangas() {
    try {
      const response = await MangaService.getMangaList();
      return response.data;
    } catch (error) {
      console.log(error);
      setError({
        message: ERROR_MANGA_NOT_FOUND,
        show: true,
      });
    }
  }

  const handlePullToRefresh = useCallback(async () => {
    setIsRefreshing(true);
    try {
      await getMangas();
    } catch (error) {
      console.log(error);
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  return {
    mangas,
    isLoading,
    error,
    isRefreshing,
    handlePullToRefresh,
  };
};

export default useHomeScreen;
