export type SearchByNameStateType = [
  searchByName: string,
  setSearchByName: React.Dispatch<React.SetStateAction<string>>,
];

export type SearchBySurnameStateType = [
  searchBySurname: string,
  setSearchBySurname: React.Dispatch<React.SetStateAction<string>>,
];

export type SearchSortByStateType = [
  sortBy: string,
  setSortBy: React.Dispatch<React.SetStateAction<string>>,
];

export type SearchIsDescendingStateType = [
  isDescending: boolean | null,
  setOrderBy: React.Dispatch<React.SetStateAction<boolean | null>>,
];

export interface UpdateSearchParamsType {
  (key: string, value: string): void;
}

export interface SearchHandlerType {
  (query: string): void;
}
