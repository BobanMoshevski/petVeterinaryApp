import { NavigateFunction } from "react-router";

export interface PetsSearchBarType {
  navigate: NavigateFunction;
  searchParams: URLSearchParams;
}

export type SelectSortByStateType = [
  selectSortBy: string,
  setSelectSortBy: React.Dispatch<React.SetStateAction<string>>,
];

export type SelectOrderByStateType = [
  selectOrderBy: string,
  setSelectOrderBy: React.Dispatch<React.SetStateAction<string>>,
];

export interface SelectOptionType {
  label: string;
  value: string;
}

export interface UpdateSearchParamsType {
  (key: string, value: string): void;
}

export interface OnMouseEnterHandlerType {
  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

export interface OnMouseLeaveHandlerType {
  (
    selectBy: string,
    optionValue: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void;
}

export interface SelectedOptionHandlerType {
  (optionValue: string, query: string): void;
}

export interface ClearSearchBarHandlerType {
  (): void;
}

export type MouseEventType = React.MouseEvent<HTMLButtonElement, MouseEvent>;
