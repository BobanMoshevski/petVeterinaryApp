import React from "react";
import { RouterProvider } from "react-router";
import { Toaster } from "react-hot-toast";
import { router } from "./routes/router";

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 25px",
            backgroundColor: "#9FA6B2",
            color: "#FBFBFB",
          },
        }}
      />
    </>
  );
};

export default App;
