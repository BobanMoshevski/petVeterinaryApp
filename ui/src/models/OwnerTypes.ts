import { PetType } from "./PetTypes";

export interface OwnerType {
  id: number;
  name: string;
  surname: string;
  dateOfBirth: Date;
  email: string;
  phoneNumber: string;
  address: string;
  country: string;
  city: string;
  postalCode: string;
  age: number;
  fullName: string;
  pets: PetType[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateOrUpdateOwnerType {
  name: string;
  surname: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  address: string;
  country: string;
  city: string;
  postalCode: string;
}
