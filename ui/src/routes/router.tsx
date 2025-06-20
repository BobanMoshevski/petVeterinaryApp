import { createBrowserRouter } from "react-router";
import RootLayout from "../pages/rootLayout/RootLayout";
import ErrorPage from "../pages/errorPage/ErrorPage";
import HomePage from "../pages/homePage/HomePage";
import OwnersPage from "../pages/ownersPage/OwenrsPage";
import OwnerDetailsPage from "../pages/ownerDetailsPage/OwnerDetailsPage";
import CreateOwnerPage from "../pages/createOwnerPage/CreateOwnerPage";
import EditOwnerPage from "../pages/editOwnerPage/EditOwnerPage";
import PetsPage from "../pages/petsPage/PetsPage";
import PetDetailsPage from "../pages/petDetailsPage/PetDetailsPage";
import CreatePetPage from "../pages/createPetPage/CreatePetPage";
import EditPetPage from "../pages/editPetPage/EditPetPage";
import VaccinesPage from "../pages/vaccinesPage/VaccinesPage";
import VaccineDetailsPage from "../pages/vaccineDetailsPage/VaccineDetailsPage";
import CreateVaccinePage from "../pages/createVaccinePage/CreateVaccinePage";
import EditVaccinePage from "../pages/editVaccinePage/EditVaccinePage";
import {
  getTotalOwnersPetsVaccinesAPI,
  ownersGetAPI,
  ownerGetAPI,
  petsGetAPI,
  petGetAPI,
  vaccinesGetAPI,
  vaccineGetAPI,
} from "../services/https/loader/loader";
import {
  createOwnerAction,
  updateOwnerAction,
  ownerDeleteAction,
  createPetAction,
  updatePetAction,
  petDeleteAction,
  createVaccineAction,
  updateVaccineAction,
  deleteVaccineAction,
} from "../services/https/action/action";

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    {
      path: "/",
      id: "root",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
          id: "home",
          loader: getTotalOwnersPetsVaccinesAPI,
        },
        {
          path: "owners",
          id: "owners",
          element: <OwnersPage />,
          loader: ownersGetAPI,
        },
        {
          path: "owner",
          children: [
            {
              path: ":ownerId",
              id: "ownerDetails",
              element: <OwnerDetailsPage />,
              loader: ownerGetAPI,
            },
            {
              path: "new",
              element: <CreateOwnerPage />,
              action: createOwnerAction,
            },
            {
              path: ":ownerId/edit",
              id: "editOwner",
              element: <EditOwnerPage />,
              loader: ownerGetAPI,
              action: updateOwnerAction,
            },
            {
              path: ":ownerId/delete",
              action: ownerDeleteAction,
            },
          ],
        },
        {
          path: "pets",
          id: "pets",
          element: <PetsPage />,
          loader: petsGetAPI,
        },
        {
          path: "pet",
          id: "pet",
          loader: ownersGetAPI,
          children: [
            {
              path: ":petId",
              id: "petDetails",
              element: <PetDetailsPage />,
              loader: petGetAPI,
            },
            {
              path: "new",
              element: <CreatePetPage />,
              id: "newPet",
              loader: vaccinesGetAPI,
              action: createPetAction,
            },
            {
              path: ":petId/edit",
              element: <EditPetPage />,
              id: "editPet",
              loader: petGetAPI,
              action: updatePetAction,
            },
            {
              path: ":petId/delete",
              action: petDeleteAction,
            },
          ],
        },
        {
          path: "vaccines",
          element: <VaccinesPage />,
          id: "vaccines",
          loader: vaccinesGetAPI,
        },
        {
          path: "vaccine",
          children: [
            {
              path: ":vaccineId",
              id: "vaccineDetails",
              element: <VaccineDetailsPage />,
              loader: vaccineGetAPI,
            },
            {
              path: "new",
              element: <CreateVaccinePage />,
              action: createVaccineAction,
            },
            {
              path: ":vaccineId/edit",
              id: "editVaccine",
              element: <EditVaccinePage />,
              loader: vaccineGetAPI,
              action: updateVaccineAction,
            },
            {
              path: ":vaccineId/delete",
              action: deleteVaccineAction,
            },
          ],
        },
      ],
    },
  ]);
