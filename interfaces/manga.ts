export interface Response<T> {
  data: T;
}

export interface Manga {
  id: string;
  title: string;
  description: string;
  status: string;
  year: number;
  imageUrl: string;
  genres: string[];
  chapters: Chapter[];
  author: string;
}

export interface Tag {
  id: string;
  type: string;
  attributes: Attributes;
  relationships: any[];
}

export interface Attributes {
  name: Name;
  description: Description;
  group: string;
  version: number;
}

export interface Description {}

export interface Name {
  en: string;
}

export interface Chapter {
  id: string;
  chapter: string;
}
