import axios from "axios";
import { ActionFunctionArgs, Params, redirect } from "react-router";
import { CreateOrUpdateOwnerType } from "../../../models/OwnerTypes";

const api: string = "https://localhost:7278/api/owner";

export const createOwnerAction: ({
  request,
}: {
  request: Request;
}) => Promise<Response | undefined> = async ({
  request,
}: {
  request: Request;
}) => {
  const formData: URLSearchParams = new URLSearchParams(await request.text());

  const name: string = formData.get("name") || "";
  const surname: string = formData.get("surname") || "";
  const age: number = parseInt(formData.get("age") || "0", 10);

  const errors: Record<string, string> = {};

  if (typeof name !== "string" || !name.trim() || !Number.isNaN(Number(name))) {
    errors.name = "Name is required and must be a valid string.";
  }

  if (
    typeof surname !== "string" ||
    !surname.trim() ||
    !Number.isNaN(Number(surname))
  ) {
    errors.surname = "Surname is required and must be a valid string.";
  }

  const ageIsNumber: number = Number(age);
  if (Number.isNaN(ageIsNumber) || ageIsNumber < 18 || ageIsNumber > 100) {
    errors.age = "Age must be a number between 18 and 100.";
  }

  if (Object.keys(errors).length > 0) {
    return new Response(JSON.stringify({ errors }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const newOwner: CreateOrUpdateOwnerType = {
    name,
    surname,
    age,
  };

  try {
    const response: Axios.AxiosXHR<unknown> = await axios.post(api, newOwner);

    if (response.status === 201) {
      return redirect("/owners");
    }

    return new Response("Failed to create owner", { status: 400 });
  } catch (error) {
    console.error("Error creating owner:", error);
    return new Response("An error occurred while creating the owner", {
      status: 500,
    });
  }
};

export const updateOwnerAction: ({
  request,
}: {
  request: Request;
}) => Promise<Response | undefined> = async ({
  request,
}: {
  request: Request;
}) => {
  const formData: URLSearchParams = new URLSearchParams(await request.text());

  const id: string = formData.get("id") || "";
  const name: string = formData.get("name") || "";
  const surname: string = formData.get("surname") || "";
  const age: number = parseInt(formData.get("age") || "0", 10);

  if (!id) {
    return new Response("Owner ID is required", { status: 400 });
  }

  const errors: Record<string, string> = {};

  if (typeof name !== "string" || !name.trim() || !Number.isNaN(Number(name))) {
    errors.name = "Name is required and must be a valid string.";
  }

  if (
    typeof surname !== "string" ||
    !surname.trim() ||
    !Number.isNaN(Number(surname))
  ) {
    errors.surname = "Surname is required and must be a valid string.";
  }

  const ageIsNumber: number = Number(age);
  if (Number.isNaN(ageIsNumber) || ageIsNumber < 18 || ageIsNumber > 100) {
    errors.age = "Age must be a number between 18 and 100.";
  }

  if (Object.keys(errors).length > 0) {
    return new Response(JSON.stringify({ errors }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const updatedOwner: CreateOrUpdateOwnerType = {
    name,
    surname,
    age,
  };

  try {
    const response: Axios.AxiosXHR<unknown> = await axios.put(
      `${api}/${id}`,
      updatedOwner,
    );

    if (response.status === 200) {
      return redirect("/owners");
    }

    return new Response("Failed to update owner", { status: 400 });
  } catch (error) {
    console.error("Error updating owner:", error);
    return new Response("An error occurred while updating the owner", {
      status: 500,
    });
  }
};

export const OwnerDeleteAction: ({
  params,
}: ActionFunctionArgs) => Promise<Response> = async ({
  params,
}: ActionFunctionArgs) => {
  const { ownerId }: Params<string> = params;

  if (!ownerId) {
    return new Response("Owner ID is required.", { status: 400 });
  }

  try {
    await axios.delete(`${api}/${ownerId}`);
    return redirect("/owners");
  } catch (error) {
    console.error("Error deleting owner:", error);
    return new Response("Failed to delete owner.", { status: 500 });
  }
};
