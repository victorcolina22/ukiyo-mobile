import { AxiosResponse } from 'axios';

import { Manga, Response } from '@/interfaces/manga';

import { URL, ENDPOINTS } from '@/shared/constants';
import { apiService } from './api.adapter';

export class MangaService {
  private static MANGA_BY_ID_URL = `${URL}${ENDPOINTS.MANGA_BY_ID}`;
  private static MANGA_UKIYO_URL = `${URL}${ENDPOINTS.MANGA_LIST}`;
  private static MANGA_CHAPTER_URL = `${URL}${ENDPOINTS.CHAPTER_BY_ID}`;

  static async getMangaList(): Promise<AxiosResponse<Manga[]>> {
    try {
      const response = await apiService.get<Manga[]>(this.MANGA_UKIYO_URL);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async getMangaById(id: string): Promise<Response<Manga>> {
    try {
      const url = `${this.MANGA_BY_ID_URL}/${id}`;
      const response = await apiService.get<Manga>(url);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async getChapterById(
    chapterId: string,
  ): Promise<Response<{ chapterImageUrl: string }[]>> {
    try {
      const url = `${this.MANGA_CHAPTER_URL}/${chapterId}`;
      const response = await apiService.get<{ chapterImageUrl: string }[]>(url);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
