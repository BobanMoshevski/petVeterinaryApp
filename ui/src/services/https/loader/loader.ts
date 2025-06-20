import { LoaderFunctionArgs, Params } from "react-router";
import axios from "axios";
import { OwnerType } from "../../../models/OwnerTypes";
import { PetType } from "../../../models/PetTypes";
import { VaccineType } from "../../../models/VaccineTypes";

const api: string = "https://localhost:7278/api/";

export const getTotalOwnersPetsVaccinesAPI: () => Promise<
  | {
      totalOwners: number;
      totalPets: number;
      totalVaccines: number;
    }
  | Response
> = async () => {
  try {
    const totalOwnersResponse: Axios.AxiosXHR<{ totalOwners: number }> =
      await axios.get(`${api}totalOwners`);
    const totalPetsResponse: Axios.AxiosXHR<{ totalPets: number }> =
      await axios.get(`${api}totalPets`);
    const totalVaccinesResponse: Axios.AxiosXHR<{ totalVaccines: number }> =
      await axios.get(`${api}totalVaccines`);

    if (
      totalOwnersResponse.status === 200 ||
      totalPetsResponse.status === 200 ||
      totalVaccinesResponse.status === 200
    ) {
      const { totalOwners }: { totalOwners: number } = totalOwnersResponse.data;
      const { totalPets }: { totalPets: number } = totalPetsResponse.data;
      const { totalVaccines }: { totalVaccines: number } =
        totalVaccinesResponse.data;
      return { totalOwners, totalPets, totalVaccines };
    }

    return new Response("Failed to get total number of owners.", {
      status: 400,
    });
  } catch (error) {
    return new Response("Failed to load total numbers of owners", {
      status: 500,
    });
  }
};

export const ownersGetAPI: ({
  request,
}: LoaderFunctionArgs) => Promise<OwnerType[] | Response> = async ({
  request,
}: LoaderFunctionArgs) => {
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

    if (response.status === 200) {
      return response.data;
    }

    return new Response("Failed to get owners.", { status: 400 });
  } catch (error) {
    return new Response("Failed to load owners", { status: 500 });
  }
};

export const ownerGetAPI: ({
  params,
}: LoaderFunctionArgs) => Promise<OwnerType | Response> = async ({
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
    return "Something went wrong";
  }
};

type PetLoaderResult = {
  petData: PetType;
  vaccinesData: VaccineType[]; // or a different type if needed
};

export const petGetAPI: ({
  params,
}: LoaderFunctionArgs) => Promise<Response | PetLoaderResult> = async ({
  params,
}: LoaderFunctionArgs) => {
  const { petId }: Params = params;

  if (!petId) {
    return new Response("pet ID is required", { status: 400 });
  }

  try {
    const petResponse: Axios.AxiosXHR<PetType> = await axios.get(
      `${api}pet/${petId}`,
    );
    const vaccinesResponse: Axios.AxiosXHR<VaccineType[]> = await axios.get(
      `${api}vaccines`,
    );

    if (petResponse.status === 200 || vaccinesResponse.status === 200) {
      return { petData: petResponse.data, vaccinesData: vaccinesResponse.data };
    }

    return new Response("Failed to get pet", { status: 400 });
  } catch (error) {
    return new Response("Failed to load pet details", { status: 500 });
  }
};

export const vaccinesGetAPI: ({
  request,
}: LoaderFunctionArgs) => Promise<VaccineType[] | Response> = async ({
  request,
}: LoaderFunctionArgs) => {
  const url: URL = new URL(request.url);
  const name: string | null = url.searchParams.get("Name");
  const sortBy: string | null = url.searchParams.get("SortBy");
  const isDescending: string | null = url.searchParams.get("IsDescending");

  try {
    const response: Axios.AxiosXHR<VaccineType[]> = await axios.get<
      VaccineType[]
    >(`${api}vaccines`, {
      params: {
        Name: name,
        SortBy: sortBy,
        IsDescending: isDescending,
      },
    });

    if (response.status === 200) {
      return response.data;
    }

    return new Response("Failed to get vaccines.", { status: 400 });
  } catch (error) {
    return new Response("Failed to load vaccines", { status: 500 });
  }
};

export const vaccineGetAPI: ({
  params,
}: LoaderFunctionArgs) => Promise<Response | VaccineType> = async ({
  params,
}: LoaderFunctionArgs) => {
  const { vaccineId }: Params = params;

  if (!vaccineId) {
    return new Response("Vaccine ID is required", { status: 400 });
  }

  try {
    const response: Axios.AxiosXHR<VaccineType> = await axios.get(
      `${api}vaccine/${vaccineId}`,
    );

    if (response.status === 200) {
      return response.data;
    }

    return new Response("Failed to get vaccine", { status: 400 });
  } catch (error) {
    return new Response("Failed to load vaccine details", { status: 500 });
  }
};
