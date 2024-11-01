export interface MetaData {
  category: Category[];
  currentPage: number;
  state: Category[];
  totalPages: number;
  totalStories: number;
  type: Category[];
}

export interface Category {
  id: string;
  name: string;
}
