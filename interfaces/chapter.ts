export interface IChapter {
  title: string;
  currentChapter: string;
  chapterListIds: Chapter[];
  images: Image[];
}

export interface Chapter {
  id: string;
  name: string;
}

export interface Image {
  title: string;
  image: string;
}
