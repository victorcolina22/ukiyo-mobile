import { MetaData } from './metadata';

export interface IMangaList {
  mangaList: MangaList[];
  metaData: MetaData;
}

export interface MangaList {
  id: string;
  image: string;
  title: string;
  chapter: string;
  view: string;
  description: string;
}
