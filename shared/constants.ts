export const NAME_APP = 'ukiyo';
export const ERROR_MANGA_NOT_FOUND = 'Error al cargar los mangas :(';
export const ERROR_MANGA_IMAGES_NOT_FOUND = 'Error al cargar las imágenes :(';

export const URL = process.env.EXPO_PUBLIC_BASE_URL;
export const API = 'api';
export const BASE_URL = `${URL}/${API}`;
export const ENDPOINTS = {
  MANGA_LIST: '/mangaList',
  MANGA_BY_ID: '/manga',
  SEARCH: '/search',
};
