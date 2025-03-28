import { createBrowserRouter } from "react-router";
import RootLayout from "../pages/rootLayout/RootLayout";
import HomePage from "../pages/homePage/HomePage";
import OwnersPage from "../pages/ownersPage/OwenrsPage";
import { ownerGetAPI, ownersGetAPI } from "../services/https/loader/loader";
import {
  createOwnerAction,
  OwnerDeleteAction,
  updateOwnerAction,
} from "../services/https/action/action";
import CreateOwner from "../components/createOwner/CreateOwner";
import EditOwner from "../components/editOwner/EditOwner";
import ErrorPage from "../pages/errorPage/ErrorPage";
import OwnerDetailPage from "../pages/ownerDetailPage/OwnerDetailPage";

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
              path: ":ownerId/delete",
              action: OwnerDeleteAction,
            },
            {
              path: ":ownerId/edit",
              element: <EditOwner />,
              id: "editOwner",
              loader: ownerGetAPI,
              action: updateOwnerAction,
            },
          ],
        },
      ],
    },
  ]);
