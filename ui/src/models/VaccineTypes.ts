export interface VaccineType {
  id: number;
  name: string;
  manufacturer: string;
  batchNumber: string;
  expirationDate: Date;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateOrUpdateVaccineType {
  name: string;
  manufacturer: string;
  batchNumber: string;
  expirationDate: string;
  description: string;
}
