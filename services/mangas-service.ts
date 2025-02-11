// Interfaces
import { IMangaList } from '@/interfaces/mangaList';
import { ISearch } from '@/interfaces/search';
import { Manga, Response } from '@/interfaces/manga';

// Shared
import { URL, ENDPOINTS } from '@/shared/constants';

export class MangaService {
  private static MANGA_BY_ID_URL = `${URL}${ENDPOINTS.MANGA_BY_ID}`;
  private static MANGA_UKIYO_URL = `${URL}${ENDPOINTS.MANGA_LIST}`;
  private static MANGA_CHAPTER_URL = `${URL}${ENDPOINTS.CHAPTER_BY_ID}`;
  // private static SEARCH_MANGA_URL = `${URL}${ENDPOINTS.SEARCH}`;

  static async getMangaList(): Promise<Response<Manga[]>> {
    try {
      const response = await fetch(`${this.MANGA_UKIYO_URL}`);
      return response.json();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async getMangaById(id: string): Promise<Response<Manga>> {
    try {
      const response = await fetch(`${this.MANGA_BY_ID_URL}/${id}`);
      return response.json();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async getChapterById(
    chapterId: string,
  ): Promise<Response<{ chapterImageUrl: string }[]>> {
    try {
      const response = await fetch(`${this.MANGA_CHAPTER_URL}/${chapterId}`);
      return response.json();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // static async search(query: string): Promise<ISearch | undefined> {
  //   if (!query) return;
  //   try {
  //     const response = await fetch(`${this.SEARCH_MANGA_URL}/${query}`);
  //     return response.json();
  //   } catch (error) {
  //     console.log(error);
  //     throw error;
  //   }
  // }
}
