import { RouterProvider } from "react-router/dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { createBrowserRouter } from "react-router";
import RootLayout from "./components/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <LandingPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
