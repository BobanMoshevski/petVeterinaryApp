import { ActionFunctionArgs, Params, redirect } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";
import { CreateOrUpdateOwnerType } from "../../../models/OwnerTypes";
import { CreateOrUpdatePetType } from "../../../models/PetTypes";
import { CreateOrUpdateVaccineType } from "../../../models/VaccineTypes";

const api: string = "https://localhost:7278/api/";

export const createOwnerAction: ({
  request,
}: ActionFunctionArgs) => Promise<Response> = async ({
  request,
}: ActionFunctionArgs) => {
  const formData: URLSearchParams = new URLSearchParams(await request.text());
  const ownerName: string = formData.get("ownerName") || "";
  const isValidName: boolean = /^[A-Za-zÀ-ÿ\s'-]{2,50}$/.test(ownerName.trim());
  const ownerSurname: string = formData.get("ownerSurname") || "";
  const isValidSurname: boolean = /^[A-Za-zÀ-ÿ'-]{2,50}$/.test(
    ownerSurname.trim(),
  );
  const ownerDateOfBirth: string = formData.get("ownerDateOfBirth") || "";
  const dateOfBirth: Date = new Date(ownerDateOfBirth);
  const today: Date = new Date();
  const age: number =
    today.getFullYear() -
    dateOfBirth.getFullYear() -
    (today < new Date(dateOfBirth.setFullYear(today.getFullYear())) ? 1 : 0);
  const ownerEmail: string = formData.get("ownerEmail") || "";
  const isValidEmail: boolean = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    ownerEmail.trim(),
  );
  const ownerPhoneNumber: string = formData.get("ownerPhoneNumber") || "";
  const isValidPhone: boolean =
    /^(\+389[- ]?|0)([2-5][0-9]|7[0-9])[- ]?\d{3}[- ]?\d{3,4}$/.test(
      ownerPhoneNumber.trim(),
    );
  const ownerAddress: string = formData.get("ownerAddress") || "";
  const isValidAddress: boolean = /^[a-zA-Z0-9\s.,-]{5,100}$/.test(
    ownerAddress.trim(),
  );
  const ownerCountry: string = formData.get("ownerCountry") || "";
  const isValidCountry: boolean = /^[A-Za-zÀ-ÿ\s'-]{2,50}$/.test(
    ownerCountry.trim(),
  );
  const ownerCity: string = formData.get("ownerCity") || "";
  const isValidCity: boolean = /^[A-Za-zÀ-ÿ\s'-]{2,50}$/.test(ownerCity.trim());
  const ownerPostalCode: string = formData.get("ownerPostalCode") || "";
  const isValidPostalCode: boolean = /^\d{4}$/.test(ownerPostalCode.trim());
  const errors: Record<string, string> = {};

  if (!isValidName) {
    errors.ownerName =
      "Name must be at least 2 letters long and contain only alphabetic characters (no symbols or numbers).";
  }

  if (!isValidSurname) {
    errors.ownerSurname =
      "Surname must be at least 2 letters long and contain only alphabetic characters (no symbols or numbers).";
  }

  if (age < 18 || age > 100) {
    errors.ownerDateOfBirth = "Owner must be between 18 and 100 years old.";
  }

  if (!isValidEmail) {
    errors.ownerEmail = "Invalid email address.";
  }

  if (!isValidPhone) {
    errors.ownerPhoneNumber = "Invalid phone number.";
  }

  if (!isValidAddress) {
    errors.ownerAddress =
      "Invalid address. Must be 5–100 characters and contain only letters, numbers, spaces, and ,.-";
  }

  if (!isValidCountry) {
    errors.ownerCountry = "Invalid country name.";
  }

  if (!isValidCity) {
    errors.ownerCity =
      "Invalid city name. Use only letters, spaces, apostrophes, or hyphens.";
  }

  if (!isValidPostalCode) {
    errors.ownerPostalCode = "Invalid postal code. Must be exactly 4 digits.";
  }

  if (Object.keys(errors).length > 0) {
    return new Response(JSON.stringify({ errors }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const newOwner: CreateOrUpdateOwnerType = {
    name: ownerName.trim(),
    surname: ownerSurname.trim(),
    dateOfBirth: ownerDateOfBirth,
    email: ownerEmail.trim(),
    phoneNumber: ownerPhoneNumber.trim(),
    address: ownerAddress.trim(),
    country: ownerCountry.trim(),
    city: ownerCity.trim(),
    postalCode: ownerPostalCode.trim(),
  };

  try {
    const response: Axios.AxiosXHR<unknown> = await axios.post(
      `${api}owner`,
      newOwner,
    );

    if (response.status === 201) {
      toast.success("Succesfuly Created Owner.");
      return redirect("/owners");
    }

    return new Response("Failed to create owner", { status: 400 });
  } catch (error) {
    toast.error("Owner Is Not Created.");
    return new Response("An error occurred while creating the owner", {
      status: 500,
    });
  }
};

export const updateOwnerAction: ({
  request,
  params,
}: ActionFunctionArgs) => Promise<Response> = async ({
  request,
  params,
}: ActionFunctionArgs) => {
  const formData: URLSearchParams = new URLSearchParams(await request.text());
  const { ownerId }: Params<string> = params;
  const ownerName: string = formData.get("ownerName") || "";
  const isValidName: boolean = /^[A-Za-zÀ-ÿ\s'-]{2,50}$/.test(ownerName.trim());
  const ownerSurname: string = formData.get("ownerSurname") || "";
  const isValidSurname: boolean = /^[A-Za-zÀ-ÿ'-]{2,50}$/.test(
    ownerSurname.trim(),
  );
  const ownerDateOfBirth: string = formData.get("ownerDateOfBirth") || "";
  const dateOfBirth: Date = new Date(ownerDateOfBirth);
  const today: Date = new Date();
  const age: number =
    today.getFullYear() -
    dateOfBirth.getFullYear() -
    (today < new Date(dateOfBirth.setFullYear(today.getFullYear())) ? 1 : 0);
  const ownerEmail: string = formData.get("ownerEmail") || "";
  const isValidEmail: boolean = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    ownerEmail.trim(),
  );
  const ownerPhoneNumber: string = formData.get("ownerPhoneNumber") || "";
  const isValidPhone: boolean =
    /^(\+389[- ]?|0)([2-5][0-9]|7[0-9])[- ]?\d{3}[- ]?\d{3,4}$/.test(
      ownerPhoneNumber.trim(),
    );
  const ownerAddress: string = formData.get("ownerAddress") || "";
  const isValidAddress: boolean = /^[a-zA-Z0-9\s.,-]{5,100}$/.test(
    ownerAddress.trim(),
  );
  const ownerCountry: string = formData.get("ownerCountry") || "";
  const isValidCountry: boolean = /^[A-Za-zÀ-ÿ\s'-]{2,50}$/.test(
    ownerCountry.trim(),
  );
  const ownerCity: string = formData.get("ownerCity") || "";
  const isValidCity: boolean = /^[A-Za-zÀ-ÿ\s'-]{2,50}$/.test(ownerCity.trim());
  const ownerPostalCode: string = formData.get("ownerPostalCode") || "";
  const isValidPostalCode: boolean = /^\d{4}$/.test(ownerPostalCode.trim());
  const errors: Record<string, string> = {};

  if (!ownerId) {
    return new Response("Owner ID is required", { status: 400 });
  }

  if (!isValidName) {
    errors.ownerName =
      "Name must be at least 2 letters long and contain only alphabetic characters (no symbols or numbers).";
  }

  if (!isValidSurname) {
    errors.ownerSurname =
      "Surname must be at least 2 letters long and contain only alphabetic characters (no symbols or numbers).";
  }

  if (age < 18 || age > 100) {
    errors.ownerDateOfBirth = "Owner must be between 18 and 100 years old.";
  }

  if (!isValidEmail) {
    errors.ownerEmail = "Invalid email address.";
  }

  if (!isValidPhone) {
    errors.ownerPhoneNumber = "Invalid phone number.";
  }

  if (!isValidAddress) {
    errors.ownerAddress =
      "Invalid address. Must be 5–100 characters and contain only letters, numbers, spaces, and ,.-";
  }

  if (!isValidCountry) {
    errors.ownerCountry = "Invalid country name.";
  }

  if (!isValidCity) {
    errors.ownerCity =
      "Invalid city name. Use only letters, spaces, apostrophes, or hyphens.";
  }

  if (!isValidPostalCode) {
    errors.ownerPostalCode = "Invalid postal code. Must be exactly 4 digits.";
  }

  if (Object.keys(errors).length > 0) {
    return new Response(JSON.stringify({ errors }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const updatedOwner: CreateOrUpdateOwnerType = {
    name: ownerName.trim(),
    surname: ownerSurname.trim(),
    dateOfBirth: ownerDateOfBirth,
    email: ownerEmail.trim(),
    phoneNumber: ownerPhoneNumber.trim(),
    address: ownerAddress.trim(),
    country: ownerCountry.trim(),
    city: ownerCity.trim(),
    postalCode: ownerPostalCode.trim(),
  };

  try {
    const response: Axios.AxiosXHR<unknown> = await axios.put(
      `${api}owner/${ownerId}`,
      updatedOwner,
    );

    if (response.status === 200) {
      toast.success("Succesfuly Update Owner.");
      return redirect("/owners");
    }

    return new Response("Failed to update owner", { status: 400 });
  } catch (error) {
    toast.error("Owner Is Not Updated.");
    return new Response("An error occurred while updating the owner", {
      status: 500,
    });
  }
};

export const ownerDeleteAction: ({
  params,
}: ActionFunctionArgs) => Promise<Response> = async ({
  params,
}: ActionFunctionArgs) => {
  const { ownerId }: Params<string> = params;

  if (!ownerId) {
    return new Response("Owner ID is required.", { status: 400 });
  }

  try {
    const response: Axios.AxiosXHR<unknown> = await axios.delete(
      `${api}owner/${ownerId}`,
    );

    if (response.status === 204) {
      toast.success("Succesfuly Deleted Owner.");
      return redirect("/owners");
    }

    return new Response("Failed to delete owner", { status: 400 });
  } catch (error) {
    toast.error("Owner Is Not Deleted.");
    return redirect("/owners");
  }
};

export const createPetAction: ({
  request,
}: {
  request: Request;
}) => Promise<Response | undefined> = async ({
  request,
}: {
  request: Request;
}) => {
  const formData: URLSearchParams = new URLSearchParams(await request.text());
  const ownerId: string = formData.get("ownerId") || "";
  const petName: string = formData.get("petName") || "";
  const isValidName: boolean = /^[A-Za-zÀ-ÿ\s'-]{2,50}$/.test(petName.trim());
  const petDateOfBirth: string = formData.get("petDateOfBirth") || "";
  const dateOfBirth: Date = new Date(petDateOfBirth);
  const today: Date = new Date();
  const age: number =
    today.getFullYear() -
    dateOfBirth.getFullYear() -
    (today < new Date(dateOfBirth.setFullYear(today.getFullYear())) ? 1 : 0);
  const petSpecies: string = formData.get("petSpecies") || "";
  const isValidSpecies: boolean = /^[A-Za-zÀ-ÿ\s'-]{2,50}$/.test(
    petSpecies.trim(),
  );
  const petBreed: string = formData.get("petBreed") || "";
  const isValidBreed: boolean = /^[A-Za-zÀ-ÿ\s'-]{2,50}$/.test(petBreed.trim());
  const petGender: string = formData.get("petGender") || "";
  const isValidGender: boolean = petGender === "Male" || petGender === "Female";
  const petWeight: string = formData.get("petWeight") || "";
  const weight: number = Number(petWeight);
  const isValidWeight: boolean | "" =
    petWeight && !Number.isNaN(weight) && weight > 0 && weight <= 500;
  const vaccineIds: number[] = (formData.getAll("vaccinesIds") as string[]).map(
    Number,
  );
  const errors: Record<string, string> = {};
  const ownerIdIsNumber: number = Number(ownerId);

  if (ownerIdIsNumber === 0) {
    errors.ownerId = "Owner is required.";
  }

  if (!isValidName) {
    errors.petName = "Name is required and must be a valid string.";
  }

  if (age < 0 || age > 50) {
    errors.petDateOfBirth = "Pet must be between 0 and 50 years old.";
  }

  if (!isValidSpecies) {
    errors.petSpecies = "Species is required and must be a valid string.";
  }

  if (!isValidBreed) {
    errors.petBreed = "Species is required and must be a valid string.";
  }

  if (!isValidGender) {
    errors.petGender = "Gender must be either 'Male' or 'Female'.";
  }

  if (!isValidWeight) {
    errors.petWeight = "Weight must be a number between 0.1 and 500.";
  }

  if (Object.keys(errors).length > 0) {
    toast.error("Pet Is Not Created.");
    return new Response(JSON.stringify({ errors }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const newPet: CreateOrUpdatePetType = {
    ownerId,
    name: petName,
    dateOfBirth: petDateOfBirth,
    species: petSpecies,
    breed: petBreed,
    gender: petGender,
    weight: Number(petWeight),
    vaccineIds,
  };

  try {
    const response: Axios.AxiosXHR<unknown> = await axios.post(
      `${api}pet/${ownerId}`,
      newPet,
    );

    if (response.status === 201) {
      toast.success("Succesfuly Created Pet.");
      return redirect("/pets");
    }

    return new Response("Failed to create pet", { status: 400 });
  } catch (error) {
    toast.error("Pet Is Not Created.");
    return new Response("An error occurred while creating the pet", {
      status: 500,
    });
  }
};

export const updatePetAction: ({
  request,
  params,
}: ActionFunctionArgs) => Promise<Response> = async ({
  request,
  params,
}: ActionFunctionArgs) => {
  const petId: number = Number(params.petId);
  const formData: URLSearchParams = new URLSearchParams(await request.text());
  const ownerId: string = formData.get("ownerId") || "";
  const petName: string = formData.get("petName") || "";
  const isValidName: boolean = /^[A-Za-zÀ-ÿ\s'-]{2,50}$/.test(petName.trim());
  const petDateOfBirth: string = formData.get("petDateOfBirth") || "";
  const dateOfBirth: Date = new Date(petDateOfBirth);
  const today: Date = new Date();
  const age: number =
    today.getFullYear() -
    dateOfBirth.getFullYear() -
    (today < new Date(dateOfBirth.setFullYear(today.getFullYear())) ? 1 : 0);
  const petSpecies: string = formData.get("petSpecies") || "";
  const isValidSpecies: boolean = /^[A-Za-zÀ-ÿ\s'-]{2,50}$/.test(
    petSpecies.trim(),
  );
  const petBreed: string = formData.get("petBreed") || "";
  const isValidBreed: boolean = /^[A-Za-zÀ-ÿ\s'-]{2,50}$/.test(petBreed.trim());
  const petGender: string = formData.get("petGender") || "";
  const isValidGender: boolean = petGender === "Male" || petGender === "Female";
  const petWeight: string = formData.get("petWeight") || "";
  const weight: number = Number(petWeight);
  const isValidWeight: boolean | "" =
    petWeight && !Number.isNaN(weight) && weight > 0 && weight <= 500;
  const vaccineIds: number[] = (formData.getAll("vaccinesIds") as string[]).map(
    Number,
  );
  const errors: Record<string, string> = {};
  const ownerIdIsNumber: number = Number(ownerId);

  if (!petId) {
    errors.petId = "Pet is required.";
  }

  if (ownerIdIsNumber === 0) {
    errors.ownerId = "Owner is required.";
  }

  if (!isValidName) {
    errors.petName = "Name is required and must be a valid string.";
  }

  if (age < 0 || age > 50) {
    errors.petDateOfBirth = "Pet must be between 0 and 50 years old.";
  }

  if (!isValidSpecies) {
    errors.petSpecies = "Species is required and must be a valid string.";
  }

  if (!isValidBreed) {
    errors.petBreed = "Species is required and must be a valid string.";
  }

  if (!isValidGender) {
    errors.petGender = "Gender must be either 'Male' or 'Female'.";
  }

  if (!isValidWeight) {
    errors.petWeight = "Weight must be a number between 0.1 and 500.";
  }

  if (Object.keys(errors).length > 0) {
    toast.error("Pet Is Not Created.");
    return new Response(JSON.stringify({ errors }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const updatePet: CreateOrUpdatePetType = {
    ownerId,
    name: petName,
    dateOfBirth: petDateOfBirth,
    species: petSpecies,
    breed: petBreed,
    gender: petGender,
    weight: Number(petWeight),
    vaccineIds,
  };

  try {
    const response: Axios.AxiosXHR<unknown> = await axios.put(
      `${api}pet/${petId}`,
      updatePet,
    );

    if (response.status === 200) {
      toast.success("Succesfuly Edited Pet.");
      return redirect("/pets");
    }
    return new Response("Failed to update pet", { status: 400 });
  } catch (error) {
    toast.error("Pet Is Not Edited.");
    return new Response("An error occurred while updating the pet", {
      status: 500,
    });
  }
};

export const petDeleteAction: ({
  params,
}: ActionFunctionArgs) => Promise<Response> = async ({
  params,
}: ActionFunctionArgs) => {
  const { petId }: Params<string> = params;

  if (!petId) {
    return new Response("Pet ID is required.", { status: 400 });
  }

  try {
    await axios.delete(`${api}pet/${petId}`);
    return redirect("/pets");
  } catch (error) {
    return new Response("Failed to delete pet.", { status: 500 });
  }
};

export const createVaccineAction: ({
  request,
}: ActionFunctionArgs) => Promise<Response> = async ({
  request,
}: ActionFunctionArgs) => {
  const formData: URLSearchParams = new URLSearchParams(await request.text());
  const vaccineName: string = formData.get("vaccineName") || "";
  const isValidVaccineName: boolean = /^[A-Za-zÀ-ÿ0-9\s-]{2,50}$/.test(
    vaccineName,
  );
  const vaccineManufacturer: string = formData.get("vaccineManufacturer") || "";
  const isValidManufacturer: boolean = /^[A-Za-zÀ-ÿ0-9\s&-]{2,50}$/.test(
    vaccineManufacturer,
  );
  const vaccineBatchNumber: string = formData.get("vaccineBatchNumber") || "";
  const isValidBatchNumber: boolean = /^[A-Za-z0-9-]{4,50}$/.test(
    vaccineBatchNumber,
  );
  const vaccineExpirationDate: string =
    formData.get("vaccineExpirationDate") || "";
  const expirationDate: Date = new Date(vaccineExpirationDate);
  const today: Date = new Date();
  today.setHours(0, 0, 0, 0);
  const isValidExpirationDate: boolean | string =
    vaccineExpirationDate &&
    !Number.isNaN(expirationDate.getTime()) &&
    expirationDate > today;
  const vaccineDescription: string = formData.get("vaccineDescription") || "";
  const isValidDescription: boolean = vaccineDescription.length <= 500;
  const errors: Record<string, string> = {};

  if (!isValidVaccineName) {
    errors.vaccineName =
      "Invalid vaccine name. Use only letters, numbers, spaces, and hyphens.";
  }

  if (!isValidManufacturer) {
    errors.vaccineManufacturer =
      "The manufacturer name must be 2–50 characters long and may include letters, numbers, spaces, hyphens, and ampersands.";
  }

  if (!isValidBatchNumber) {
    errors.vaccineBatchNumber =
      "Batch number must be 4–50 characters and contain only letters, numbers, and hyphens.";
  }

  if (!isValidExpirationDate) {
    errors.vaccineExpirationDate =
      "Expiration date is required and must be a valid future date.";
  }

  if (!isValidDescription) {
    errors.vaccineDescription = "Description cannot exceed 500 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return new Response(JSON.stringify({ errors }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const newVaccine: CreateOrUpdateVaccineType = {
    name: vaccineName.trim(),
    manufacturer: vaccineManufacturer.trim(),
    batchNumber: vaccineBatchNumber,
    expirationDate: vaccineExpirationDate,
    description: vaccineDescription.trim(),
  };

  try {
    const response: Axios.AxiosXHR<unknown> = await axios.post(
      `${api}vaccine`,
      newVaccine,
    );

    if (response.status === 201) {
      toast.success("Succesfuly Created Vaccine.");
      return redirect("/vaccines");
    }

    return new Response("Failed to create vaccine", { status: 400 });
  } catch (error) {
    toast.error("Vaccine Is Not Created.");
    return new Response("An error occurred while creating the vaccine", {
      status: 500,
    });
  }
};

export const updateVaccineAction: ({
  request,
  params,
}: ActionFunctionArgs) => Promise<Response> = async ({
  request,
  params,
}: ActionFunctionArgs) => {
  const formData: URLSearchParams = new URLSearchParams(await request.text());
  const { vaccineId }: Params<string> = params;
  const vaccineName: string = formData.get("vaccineName") || "";
  const isValidVaccineName: boolean = /^[A-Za-zÀ-ÿ0-9\s-]{2,50}$/.test(
    vaccineName,
  );
  const vaccineManufacturer: string = formData.get("vaccineManufacturer") || "";
  const isValidManufacturer: boolean = /^[A-Za-zÀ-ÿ0-9\s&-]{2,50}$/.test(
    vaccineManufacturer,
  );
  const vaccineBatchNumber: string = formData.get("vaccineBatchNumber") || "";
  const isValidBatchNumber: boolean = /^[A-Za-z0-9-]{4,50}$/.test(
    vaccineBatchNumber,
  );
  const vaccineExpirationDate: string =
    formData.get("vaccineExpirationDate") || "";
  const expirationDate: Date = new Date(vaccineExpirationDate);
  const today: Date = new Date();
  today.setHours(0, 0, 0, 0);
  const isValidExpirationDate: boolean | string =
    vaccineExpirationDate &&
    !Number.isNaN(expirationDate.getTime()) &&
    expirationDate > today;
  const vaccineDescription: string = formData.get("vaccineDescription") || "";
  const isValidDescription: boolean = vaccineDescription.length <= 500;
  const errors: Record<string, string> = {};

  if (!vaccineId) {
    return new Response("Vaccine ID is required", { status: 400 });
  }

  if (!isValidVaccineName) {
    errors.vaccineName =
      "Invalid vaccine name. Use only letters, numbers, spaces, and hyphens.";
  }

  if (!isValidManufacturer) {
    errors.vaccineManufacturer =
      "The manufacturer name must be 2–50 characters long and may include letters, numbers, spaces, hyphens, and ampersands.";
  }

  if (!isValidBatchNumber) {
    errors.vaccineBatchNumber =
      "Batch number must be 4–50 characters and contain only letters, numbers, and hyphens.";
  }

  if (!isValidExpirationDate) {
    errors.vaccineExpirationDate =
      "Expiration date is required and must be a valid future date.";
  }

  if (!isValidDescription) {
    errors.vaccineDescription = "Description cannot exceed 500 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return new Response(JSON.stringify({ errors }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const updatedOwner: CreateOrUpdateVaccineType = {
    name: vaccineName.trim(),
    manufacturer: vaccineManufacturer.trim(),
    batchNumber: vaccineBatchNumber,
    expirationDate: vaccineExpirationDate,
    description: vaccineDescription.trim(),
  };

  try {
    const response: Axios.AxiosXHR<unknown> = await axios.put(
      `${api}vaccine/${vaccineId}`,
      updatedOwner,
    );

    if (response.status === 200) {
      toast.success("Succesfuly Update Vaccine.");
      return redirect("/vaccines");
    }

    return new Response("Failed to update vaccine", { status: 400 });
  } catch (error) {
    toast.error("Vaccine Is Not Updated.");
    return new Response("An error occurred while updating the vaccine", {
      status: 500,
    });
  }
};

export const deleteVaccineAction: ({
  params,
}: ActionFunctionArgs) => Promise<Response> = async ({
  params,
}: ActionFunctionArgs) => {
  const { vaccineId }: Params<string> = params;

  if (!vaccineId) {
    return new Response("Vaccine ID is required.", { status: 400 });
  }

  try {
    const response: Axios.AxiosXHR<unknown> = await axios.delete(
      `${api}vaccine/${vaccineId}`,
    );

    if (response.status === 204) {
      toast.success("Succesfuly Deleted Vaccine.");
      return redirect("/vaccines");
    }

    return new Response("Failed to delete vaccine", { status: 400 });
  } catch (error) {
    toast.error("Vaccine Is Not Deleted.");
    return redirect("/vaccines");
  }
};
