import { LoaderFunctionArgs, Params } from "react-router";
import axios from "axios";
import { OwnerType } from "../../../models/OwnerTypes";
import { PetType } from "../../../models/PetTypes";

const api: string = "https://localhost:7278/api/";

export const ownersGetAPI: ({
  request,
}: LoaderFunctionArgs) => Promise<OwnerType[] | string> = async ({
  request,
}: LoaderFunctionArgs): Promise<OwnerType[] | string> => {
  const url: URL = new URL(request.url);
  const name: string | null = url.searchParams.get("Name");
  const surname: string | null = url.searchParams.get("Surname");
  const sortBy: string | null = url.searchParams.get("SortBy");
  const isDescending: string | null = url.searchParams.get("IsDescending");

  try {
    const response: Axios.AxiosXHR<OwnerType[]> = await axios.get<OwnerType[]>(
      `${api}owners`,
      {
        params: {
          Name: name,
          Surname: surname,
          SortBy: sortBy,
          IsDescending: isDescending,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return "Something went wrong";
  }
};

export const ownerGetAPI: ({
  params,
}: LoaderFunctionArgs) => Promise<Response | OwnerType> = async ({
  params,
}: LoaderFunctionArgs) => {
  const { ownerId }: Params = params;

  if (!ownerId) {
    return new Response("Owner ID is required", { status: 400 });
  }

  try {
    const response: Axios.AxiosXHR<OwnerType> = await axios.get(
      `${api}owner/${ownerId}`,
    );

    if (response.status === 200) {
      return response.data;
    }

    return new Response("Failed to get owner", { status: 400 });
  } catch (error) {
    console.error("Error loading owner:", error);

    return new Response("Failed to load owner details", { status: 500 });
  }
};

export const petsGetAPI: ({
  request,
}: LoaderFunctionArgs) => Promise<PetType[] | string> = async ({
  request,
}: LoaderFunctionArgs): Promise<PetType[] | string> => {
  const url: URL = new URL(request.url);
  const name: string | null = url.searchParams.get("Name");
  const sortBy: string | null = url.searchParams.get("SortBy");
  const isDescending: string | null = url.searchParams.get("IsDescending");

  try {
    const response: Axios.AxiosXHR<PetType[]> = await axios.get<PetType[]>(
      `${api}pets`,
      {
        params: {
          Name: name,
          SortBy: sortBy,
          IsDescending: isDescending,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return "Something went wrong";
  }
};

export const petGetAPI: ({
  params,
}: LoaderFunctionArgs) => Promise<Response | PetType> = async ({
  params,
}: LoaderFunctionArgs) => {
  const { petId }: Params = params;

  if (!petId) {
    return new Response("pet ID is required", { status: 400 });
  }

  try {
    const response: Axios.AxiosXHR<PetType> = await axios.get(
      `${api}pet/${petId}`,
    );

    if (response.status === 200) {
      return response.data;
    }

    return new Response("Failed to get pet", { status: 400 });
  } catch (error) {
    console.error("Error loading owner:", error);

    return new Response("Failed to load pet details", { status: 500 });
  }
};
