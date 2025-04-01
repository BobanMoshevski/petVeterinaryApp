import { createBrowserRouter } from "react-router";
import RootLayout from "../pages/rootLayout/RootLayout";
import HomePage from "../pages/homePage/HomePage";
import OwnersPage from "../pages/ownersPage/OwenrsPage";
import {
  ownerGetAPI,
  ownersGetAPI,
  petGetAPI,
  petsGetAPI,
} from "../services/https/loader/loader";
import {
  createOwnerAction,
  createPetAction,
  ownerDeleteAction,
  petDeleteAction,
  updateOwnerAction,
  updatePetAction,
} from "../services/https/action/action";
import CreateOwner from "../components/createOwner/CreateOwner";
import EditOwner from "../components/editOwner/EditOwner";
import ErrorPage from "../pages/errorPage/ErrorPage";
import OwnerDetailPage from "../pages/ownerDetailPage/OwnerDetailPage";
import PetsPage from "../pages/petsPage/PetsPage";
import PetDetailPage from "../pages/petDetailPage/PetDetailPage";
import CreatePetPage from "../pages/createPetPage/CreatePetPage";
import EditPetPage from "../pages/editPetPage/EditPetPage";
import VaccinesPage from "../pages/vaccinesPage/VaccinesPage";
import VaccineDetailPage from "../pages/vaccineDetailPage/VaccineDetailPage";
import CreateVaccinePage from "../pages/createVaccinePage/CreateVaccinePage";
import EditVaccinePage from "../pages/editVaccinePage/EditVaccinePage";

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
        },
        {
          path: "owners",
          id: "owners",
          element: <OwnersPage />,
          loader: ownersGetAPI,
        },
        {
          path: "owner",
          id: "owner",
          children: [
            {
              index: true,
              path: ":ownerId",
              id: "ownerDetail",
              element: <OwnerDetailPage />,
              loader: ownerGetAPI,
            },
            {
              path: "new",
              element: <CreateOwner />,
              action: createOwnerAction,
            },
            {
              path: ":ownerId/edit",
              element: <EditOwner />,
              id: "editOwner",
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
          id: "petsPage",
          element: <PetsPage />,
          loader: petsGetAPI,
        },
        {
          path: "pet",
          id: "pet",
          loader: ownersGetAPI,
          children: [
            {
              index: true,
              path: ":petId",
              id: "petDetail",
              element: <PetDetailPage />,
              loader: petGetAPI,
            },
            {
              path: "new",
              element: <CreatePetPage />,
              id: "newPet",
              loader: ownersGetAPI,
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
          id: "vaccinesPage",
          element: <VaccinesPage />,
        },
        {
          path: "vaccine",
          id: "vaccine",
          children: [
            {
              index: true,
              path: ":vaccineId",
              id: "vaccineDetailPage",
              element: <VaccineDetailPage />,
            },
            {
              path: "new",
              element: <CreateVaccinePage />,
              id: "newVaccine",
            },
            {
              path: ":vaccineId/edit",
              element: <EditVaccinePage />,
              id: "editVaccine",
            },
            {
              path: ":vaccineId/delete",
            },
          ],
        },
      ],
    },
  ]);
