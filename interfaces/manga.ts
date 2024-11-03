import { ChapterList } from './chapterList';

export interface Manga {
  imageUrl: string;
  name: string;
  author: string;
  status: string;
  updated: string;
  view: string;
  genres: string[];
  chapterList: ChapterList[];
}
