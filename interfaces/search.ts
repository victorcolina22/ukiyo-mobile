export interface ISearch {
  mangaList: SearchMangaList[];
  metaData: MetaData;
}

export interface SearchMangaList {
  id: string;
  image: string;
  title: string;
}

export interface MetaData {
  totalPages: number;
}
