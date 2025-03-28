export interface OwnerLoaderDataType {
  id: string;
  name: string;
  surname: string;
  age: number;
}

export interface ActionDataType {
  error?: string;
  errors?: Record<string, string>;
}
