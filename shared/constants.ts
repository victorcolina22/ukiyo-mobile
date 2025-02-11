export const NAME_APP = 'ukiyo';
export const ERROR_MANGA_NOT_FOUND = 'Error al cargar los mangas :(';
export const ERROR_MANGA_IMAGES_NOT_FOUND = 'Error al cargar el capítulo :(';

export const URL = process.env.EXPO_PUBLIC_BASE_URL;
export const ENDPOINTS = {
  MANGA_LIST: '/mangas',
  MANGA_BY_ID: '/manga',
  CHAPTER_BY_ID: '/manga/chapter',
  SEARCH: '/search',
};

export const COLORS = {
  WHITE: '#eeeeee',
  GRAY: '#17181a',
};
