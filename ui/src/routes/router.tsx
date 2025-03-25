import { createBrowserRouter } from "react-router";
import RootLayout from "../pages/rootLayout/RootLayout";
import HomePage from "../pages/homePage/HomePage";

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      id: "root",
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
  ]);
