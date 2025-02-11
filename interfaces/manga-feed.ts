export interface MangaFeed {
  id: string;
  type: string;
  attributes: Attributes;
  relationships: Relationship[];
}

export interface Attributes {
  volume: null;
  chapter: string;
  title: null;
  translatedLanguage: string;
  externalUrl: null;
  publishAt: Date;
  readableAt: Date;
  createdAt: Date;
  updatedAt: Date;
  pages: number;
  version: number;
}

export interface Relationship {
  id: string;
  type: string;
  attributes?: Attributes;
}
