import { IMangaList } from '@/interfaces/mangaList';
import { BASE_URL, ENDPOINTS } from '@/shared/constants';

export class MangaService {
  private static MANGA_HOOK_URL = `${BASE_URL}${ENDPOINTS.MANGA_LIST}`;
  private static MANGA_BY_ID_URL = `${BASE_URL}${ENDPOINTS.MANGA_BY_ID}`;
  private static SEARCH_MANGA_URL = `${BASE_URL}${ENDPOINTS.SEARCH}`;

  static async getMangaList(): Promise<IMangaList> {
    try {
      const response = await fetch(`${this.MANGA_HOOK_URL}`);
      return response.json();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async getMangaListByPage(page: number): Promise<IMangaList> {
    try {
      const response = await fetch(`${this.MANGA_HOOK_URL}?page=${page}`);
      return response.json();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async getMangaById(id: string) {
    if (!id) return;
    try {
      const response = await fetch(`${this.MANGA_BY_ID_URL}/${id}`);
      return response.json();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async getChapterById(bookId: string, id: string) {
    if (!id) return;
    try {
      const response = await fetch(`${this.MANGA_BY_ID_URL}/${bookId}/${id}`);
      return response.json();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async search(query: string) {
    if (!query) return;
    try {
      const response = await fetch(`${this.SEARCH_MANGA_URL}/${query}`);
      return response.json();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
