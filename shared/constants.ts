export const NAME_APP = 'ukiyo';
export const ERROR_MANGA_NOT_FOUND = 'Error al cargar los mangas :(';
export const ERROR_MANGA_IMAGES_NOT_FOUND = 'Error al cargar el capítulo :(';

export const URL = process.env.EXPO_PUBLIC_BASE_URL;
export const ENDPOINTS = {
  MANGAS: '/mangas',
  CHAPTER_BY_ID: '/mangas/chapter',
  SEARCH: '/search',
};

export const COLORS = {
  WHITE: '#eeeeee',
  GRAY: '#17181a',
};

export enum MANGA_STATUS_COLORS_ENUM {
  ONGOING = 'ongoing',
  COMPLETED = 'completed',
  HIATUS = 'hiatus',
  CANCELLED = 'cancelled',
}
